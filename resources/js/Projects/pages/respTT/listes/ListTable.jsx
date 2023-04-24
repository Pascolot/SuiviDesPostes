import axios from "axios";
import React, { useEffect, useState } from "react";
import TableEmployee from "../../../tableau/respTT/TableEmployee";
import Pagination from "../../../paginations/respTT/Pagination";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ListTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [employeePerPage, setEmployeePerPage] = useState(5);
    const [employee, setEmployee] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [t, i18n] = useTranslation("common");

    useEffect(() => {
        let isMounted = true;

        const fetchEmployee = async () => {
            setLoading(true);
            const res = await axios.get("employeeList");
            if (isMounted) {
                setEmployee(res.data);
                setLoading(false);
            }
        };

        fetchEmployee();

        return () => {
            isMounted = false;
        };
    }, []);

    useEffect(() => {
        let isMounted = true;

        const fetchEmployee = async () => {
            const res = await axios.get("employeeList/" + search);
            if (isMounted) {
                setEmployee(res.data);
            }
        };

        fetchEmployee();

        return () => {
            isMounted = false;
        };
    }, [search]);

    // Nombre d'employé affiche par tableau
    const indexOfLastEmployee = currentPage * employeePerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeePerPage;
    const currentEmployee = employee.slice(
        indexOfFirstEmployee,
        indexOfLastEmployee
    );

    // Changement de page
    const paginateFront = () => setCurrentPage(currentPage + 1);
    const paginateBack = () => setCurrentPage(currentPage - 1);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const employeeSetting = (ev) => {
        const event = ev.target.options;
        for (let i = 0; i < event.length; i++) {
            if (event[i].selected) {
                setCurrentPage(1);
                setEmployeePerPage(event[i].value);
            }
        }
    };

    return (
        <>
            <div className="dark:bg-slate-200 shadow-md rounded-md m-auto relative w-full max-w-full">
                <div className="h-10 flex items-center justify-center w-full">
                    <h1 className="text-2xl text-gray-500 font-bold">
                        {t("list")}
                    </h1>
                </div>

                <div className="cg:w-full max-w-full m-auto mx-3">
                    <div className="flex justify-center items-center m-4">
                        <span className="text-gray-700 font-semibold">
                            {t("search")}:{" "}
                        </span>
                        <input
                            onChange={(e) => setSearch(e.target.value)}
                            className="search2"
                            type="search"
                            name="search"
                            autoComplete="off"
                            placeholder={t("search")}
                        />
                    </div>
                    <div className="flex justify-between items-center h-16 w-full m-auto relative">
                        <label className="text-gray-700 cm:mb-4">
                            {" "}
                            {t("show")}{" "}
                            <select
                                className="selectOne"
                                onChange={(event) => {
                                    employeeSetting(event);
                                }}
                            >
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                                <option value={employee.length}>
                                    {t("all")}
                                </option>
                            </select>{" "}
                            {t("entries")}
                        </label>

                        <Link className="btn cm:mb-4" to="/create">
                            {t("add")}
                        </Link>
                    </div>
                    <TableEmployee
                        employee={currentEmployee}
                        loading={loading}
                        t={t}
                    />

                    <div className="flex items-center h-16 w-full relative">
                        <Pagination
                            employeePerPage={employeePerPage}
                            totalEmployee={employee.length}
                            paginate={paginate}
                            paginateBack={paginateBack}
                            paginateFront={paginateFront}
                            currentPage={currentPage}
                            t={t}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ListTable;
