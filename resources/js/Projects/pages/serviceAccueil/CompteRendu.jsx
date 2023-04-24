import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Pagination3 from "../../paginations/serviceAccueil/serviceTechnique/Pagination3";
import TableRapport from "../../tableau/serviceAccueil/TableRapport";

const CompteRendu = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [employee, setEmployee] = useState([]);
    const [employeePerPage, setEmployeePerPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [showLink, setShowLink] = useState(false);
    const [search, setSearch] = useState("");
    const [t, i18n] = useTranslation("common");

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
            const res = await axios.get("employeeListSending");
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
            const res = await axios.get("employeeListSending/" + search);
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

    return (
        <div className="flex max-w-full flex-col items-center justify-center">
            <ToastContainer />
            <div className="flex justify-end items-center h-16 w-full m-auto relative">
                <div>
                    {/* pour le champ recherche */}
                    <label className="mr-2" htmlFor="searching">
                        {t("search")}
                    </label>
                    <input
                        onChange={(e) => setSearch(e.target.value)}
                        className="search3"
                        type="search"
                        name="searching"
                        autoComplete="off"
                        id="searching"
                    />
                </div>
            </div>

            <div className="max-w-full w-full cm:overflow-auto">
                {employee.length === 0 ? (
                    <h1 className="text-center text-lg font-bold">
                        {t("none")}
                    </h1>
                ) : (
                    currentEmployee.map((data, index) => (
                        <TableRapport
                            data={data}
                            key={index}
                            show={show}
                            hide={hide}
                            t={t}
                        />
                    ))
                )}

                <div
                    className={`${
                        currentEmployee.length === 0 ? "m-0" : "-mt-10"
                    }`}
                >
                    <div className="mt-6">
                        <Pagination3
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
            <div className="w-full flex justify-center items-center">
                {showLink ? (
                    <Link to="/problems">
                        <button className="btn2">{t("descript")}</button>
                    </Link>
                ) : null}
            </div>
        </div>
    );
};

export default CompteRendu;
