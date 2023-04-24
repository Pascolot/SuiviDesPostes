import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Pagination from "../paginations/Pagination";
import TableOrigin from "../tableau/TableOrigin";
import ReactToPrint from "react-to-print";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
    const [t, i18n] = useTranslation("common");

    const [currentPage, setCurrentPage] = useState(1);
    const [employee, setEmployee] = useState([]);
    const [employeePerPage, setEmployeePerPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [showLink, setShowLink] = useState(false);
    const [search, setSearch] = useState("");
    const componentRef = useRef();
    const show = () => {
        setShowLink(true);
    };
    const hide = () => {
        setShowLink(false);
    };

    useEffect(() => {
        let isMounted = true;

        const fetchEmployeeMaterials = async () => {
            if (isMounted) {
                setLoading(true);
            }
            const res = await axios.get("employeeListFinishing");
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
            const res = await axios.get("employeeListFinishing/" + search);
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

    if (loading) {
        return <h2 className="text-red-700">{t("loading")}</h2>;
    }

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
        <div className="flex max-w-full flex-col items-center justify-center">
            <div className="flex justify-between items-center h-16 w-full m-auto relative">
                <label className="dark:text-white">
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
                    {/* code pour l'impression du tableau du tableau de bord */}
                    <ReactToPrint
                        trigger={() => (
                            <div className="cursor-pointer">
                                <span className="mr-2 dark:text-white">
                                    {t("print")}
                                </span>
                                <FontAwesomeIcon
                                    className="dark:text-white text-black"
                                    icon={faPrint}
                                />
                            </div>
                        )}
                        content={() => componentRef.current}
                    />
                </div>
                <div>
                    <label className="mr-2" htmlFor="searching">
                        <span>{t("search")}: </span>
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

            <div className="w-full overflow-auto rounded-lg shadow">
                <table ref={componentRef} className="w-full max-w-full">
                    <thead className="uppercase bg-gray-50 border-b-2 border-gray-200">
                        <tr className="text-lg text-slate-700 font-bold h-14 bg-slate-400 border-b-2 border-gray-200">
                            <th
                                className="border-r-2 border-r-white"
                                colSpan="3"
                            >
                                {t("owners")}
                            </th>
                            <th
                                className="border-r-2 border-r-white"
                                colSpan="4"
                            >
                                {t("materials")}
                            </th>
                            <th colSpan="2">{t("about")}</th>
                        </tr>
                        <tr className="table-row bg-green-600">
                            <th className="th">{t("num_mat")}</th>
                            <th className="th">{t("first_name")}</th>
                            <th className="th">{t("gender")}</th>
                            <th className="th">{t("uc")}</th>
                            <th className="th">{t("screen")}</th>
                            <th className="th">{t("invert")}</th>
                            <th className="th">{t("tools")}</th>
                            <th className="th">{t("state")}</th>
                            <th className="th">{t("date")}</th>
                        </tr>
                    </thead>
                    <tbody className="table-row-group divide-y divide-gray-100 text-center">
                        {currentEmployee.length === 0 ? (
                            <tr className="table-row odd:bg-slate-200 odd:text-gray-700 even:bg-slate-700 even:text-white">
                                <td>{t("none")}</td>
                                <td>{t("none")}</td>
                                <td>{t("none")}</td>
                                <td>{t("none")}</td>
                                <td>{t("none")}</td>
                                <td>{t("none")}</td>
                                <td>{t("none")}</td>
                                <td>{t("none")}</td>
                                <td>{t("none")}</td>
                            </tr>
                        ) : (
                            currentEmployee.map((data, index) => (
                                <TableOrigin
                                    data={data}
                                    key={index}
                                    showLink={showLink}
                                    show={show}
                                    hide={hide}
                                    t={t}
                                />
                            ))
                        )}
                    </tbody>
                    <tfoot className="uppercase bg-gray-50 border-t-2 border-gray-200">
                        <tr className="text-sm font-semibold bg-green-600 table-row">
                            <th className="th">{t("num_mat")}</th>
                            <th className="th">{t("first_name")}</th>
                            <th className="th">{t("gender")}</th>
                            <th className="th">{t("uc")}</th>
                            <th className="th">{t("screen")}</th>
                            <th className="th">{t("invert")}</th>
                            <th className="th">{t("tools")}</th>
                            <th className="th">{t("state")}</th>
                            <th className="th">{t("date")}</th>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <div className="w-full flex justify-end mt-2.5 items-center">
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
    );
};

export default Dashboard;
