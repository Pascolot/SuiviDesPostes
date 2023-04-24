import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormThree from "../../forms/serviceTechnique/FormThree";
import ShowForm from "../../forms/serviceTechnique/ShowForm";
import Pagination2 from "../../paginations/serviceTechnique/Pagination2";

const Materiel = () => {
    const [t, i18n] = useTranslation("common");
    const [currentPage, setCurrentPage] = useState(1);
    const [employeePerPage, setEmployeePerPage] = useState(1);
    const [employee, setEmployee] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);

    const toggle = () => {
        setShow(!show);
    };

    useEffect(() => {
        let isMounted = true;

        const fetchEmployee = async () => {
            setLoading(true);
            const res = await axios.get("employeeList2");
            if (isMounted);
            {
                setEmployee(res.data);
                setLoading(false);
            }
        };
        fetchEmployee();

        return () => {
            isMounted = false;
        };
    }, []);

    // Get current posts
    const indexOfLastEmployee = currentPage * employeePerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeePerPage;
    const currentEmployee = employee.slice(
        indexOfFirstEmployee,
        indexOfLastEmployee
    );

    // Change page
    const paginateFront = () => setCurrentPage(currentPage + 1);
    const paginateBack = () => setCurrentPage(currentPage - 1);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="bg-slate-100 dark:text-gray-500 shadow-lg rounded-lg max-w-full">
            <ToastContainer />
            <h1 className="text-center text-2xl font-bold">{t("preparing")}</h1>
            <div className="w-full flex flex-wrap items-center justify-around">
                <div
                    className={`w-64 shadow-lg ${
                        !show && "mt-4 mb-4"
                    } shadow-xs hover:shadow-none duration-500 rounded-md bg-slate-300`}
                >
                    <ShowForm
                        t={t}
                        employee={currentEmployee}
                        loading={loading}
                    />
                    <div>
                        <button
                            onClick={toggle}
                            className={`btn ${
                                employee.length === 0 ? "hidden" : "inline-flex"
                            } m-4`}
                        >
                            {t("prepared")}
                        </button>
                        <p
                            className={`text-gray-500 ${
                                employee.length === 0 ? "block" : "hidden"
                            } text-xl font-semibold m-4`}
                        >
                            {t("prepare_exclam")}
                        </p>
                    </div>

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
                <div
                    className={`w-96 rounded-md ${show ? "block" : "hidden"} ${
                        employee.length === 0 ? "hidden" : "block"
                    } mt-4 mb-4 shadow-xs hover:shadow-none duration-500 bg-slate-300`}
                >
                    {currentEmployee.map((data, index) => (
                        <FormThree
                            t={t}
                            key={index}
                            matricule={data.Matricule}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Materiel;
