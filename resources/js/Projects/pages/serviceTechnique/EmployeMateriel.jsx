import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pagination2 from "../../paginations/serviceTechnique/Pagination2";
import TableEmployee2 from "../../tableau/serviceTechnique/TableEmployee2";

const EmployeMateriel = () => {
    const [t, i18n] = useTranslation("common");
    const [currentPage, setCurrentPage] = useState(1);
    const [employee, setEmployee] = useState([]);
    const [employeePerPage, setEmployeePerPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {
        let isMounted = true;

        const fetchEmployeeMaterials = async () => {
            if (isMounted) {
                setLoading(true);
            }
            const res = await axios.get("employeeListSend");
            if (isMounted) {
                setLoading(false);
                setEmployee(res.data);
            }
        };
        fetchEmployeeMaterials();

        return () => {
            isMounted = false;
        };
    }, []);

    useEffect(() => {
        let isMounted = true;

        const fetchEmployeeMaterials = async () => {
            const res = await axios.get("employeeListSend/" + search);
            if (isMounted) {
                setEmployee(res.data);
            }
        };
        fetchEmployeeMaterials();

        return () => {
            isMounted = false;
        };
    }, [search]);

    const indexOfLastEmployee = currentPage * employeePerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeePerPage;
    const currentEmployee = employee.slice(
        indexOfFirstEmployee,
        indexOfLastEmployee
    );

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

    if (loading) {
        return <h2 className="text-red-700">{t("loading")}</h2>;
    }

    return (
        <div className="flex w-full flex-col items-center justify-center">
            <ToastContainer />
            <div className="flex justify-between items-center h-16 w-full m-auto relative">
                <label className="dark:text-gray-500">
                    {" "}
                    <span>{t("show")}</span>{" "}
                    <select
                        className="selectOne"
                        onChange={(event) => {
                            employeeSetting(event);
                        }}
                    >
                        <option value="1">1</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value={employee.length}>{t("all")}</option>
                    </select>{" "}
                    <span>{t("entries")}</span>
                </label>
                <div>
                    {/* eto no manao recherche */}
                    <label className="mr-2" htmlFor="searching">
                        <span>{t("search")}</span>
                    </label>
                    <input
                        onChange={(e) => setSearch(e.target.value)}
                        className="search3"
                        type="search"
                        name="searching"
                        autoComplete="off"
                        id="searching"
                        placeholder={t("search")}
                    />
                </div>
            </div>
            <div className="w-full overflow-auto rounded-xl shadow">
                <table className="w-full">
                    <thead>
                        <tr className="bg-slate-300 uppercase text-xl text-gray-500 h-10 font-bold border-b-2 border-gray-200">
                            <th
                                className="border-r-2 border-r-white"
                                colSpan="4"
                            >
                                {t("employee")}
                            </th>
                            <th
                                className="border-r-2 border-r-white"
                                colSpan="4"
                            >
                                {t("materials")}
                            </th>
                            <th></th>
                        </tr>
                        <tr className="border-b-2 h-16 border-gray-200 text-zinc-200 bg-slate-500">
                            <th className="bRight">Matricule</th>
                            <th className="bRight">{t("first_name")}</th>
                            <th className="bRight">{t("gender")}</th>
                            <th className="bRight">{t("position")}</th>
                            <th className="bRight">{t("uc")}</th>
                            <th className="bRight">{t("screen")}</th>
                            <th className="bRight">{t("invert")}</th>
                            <th className="bRight">{t("tools")}</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y-2 divide-gray-200 text-center">
                        {currentEmployee.length === 0 ? (
                            <tr className="bg-slate-200">
                                <td className="py-5 dark:text-gray-500">
                                    {t("none")}
                                </td>
                                <td className="py-5 dark:text-gray-500">
                                    {t("none")}
                                </td>
                                <td className="py-5 dark:text-gray-500">
                                    {t("none")}
                                </td>
                                <td className="py-5 dark:text-gray-500">
                                    {t("none")}
                                </td>
                                <td className="py-5 dark:text-gray-500">
                                    {t("none")}
                                </td>
                                <td className="py-5 dark:text-gray-500">
                                    {t("none")}
                                </td>
                                <td className="py-5 dark:text-gray-500">
                                    {t("none")}
                                </td>
                                <td className="py-5 dark:text-gray-500">
                                    {t("none")}
                                </td>
                                <td className="py-5 dark:text-gray-500">
                                    {t("none")}
                                </td>
                            </tr>
                        ) : (
                            currentEmployee.map((data, index) => (
                                <TableEmployee2 data={data} key={index} />
                            ))
                        )}
                    </tbody>
                </table>
            </div>
            <div className="w-full">
                <Pagination2
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
    );
};

export default EmployeMateriel;
