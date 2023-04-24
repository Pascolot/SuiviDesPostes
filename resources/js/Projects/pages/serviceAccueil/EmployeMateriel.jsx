import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import FormFour from "../../forms/serviceAccueil/FormFour";
import ShowForm2 from "../../forms/serviceAccueil/ShowForm2";
import Pagination3 from "../../paginations/serviceAccueil/serviceTechnique/Pagination3";

const EmployeMateriel2 = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [employeePerPage, setEmployeePerPage] = useState(1);
    const [employee, setEmployee] = useState([]);
    const [loading, setLoading] = useState(false);
    const [t, i18n] = useTranslation("common");

    useEffect(() => {
        let isMounted = true;

        const fetchEmployee = async () => {
            if (isMounted) {
                setLoading(true);
            }
            const res = await axios.get("employeeList3");
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

    const indexOfLastEmployee = currentPage * employeePerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeePerPage;
    const currentEmployee = employee.slice(
        indexOfFirstEmployee,
        indexOfLastEmployee
    );

    const paginateFront = () => setCurrentPage(currentPage + 1);
    const paginateBack = () => setCurrentPage(currentPage - 1);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="bg-slate-200 dark:bg-slate-800 shadow-lg rounded-sm max-w-full">
            <h1 className="text-center dark:text-white text-gray-500 text-2xl font-bold">
                {t("em")}
            </h1>
            <div className="w-full flex flex-wrap items-center justify-around">
                <div
                    className={`w-64 ${
                        currentEmployee.length === 0 && "mt-4"
                    } shadow-lg shadow-opact transition duration-1000 hover:shadow-none rounded-md bg-slate-500 dark:bg-slate-300`}
                >
                    <ShowForm2
                        employee={currentEmployee}
                        t={t}
                        loading={loading}
                    />
                    <h1
                        className={` text-white ${
                            currentEmployee.length === 0
                                ? "flex justify-center items-center mt-4"
                                : "hidden"
                        }`}
                    >
                        {t("none")}
                    </h1>
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
                <div
                    className={`w-96 dark:text-gray-500 rounded-md mt-4 mb-4 shadow-opact hover:shadow-none transition duration-1000 bg-slate-500 dark:bg-slate-300`}
                >
                    {currentEmployee.map((data, index) => (
                        <FormFour
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

export default EmployeMateriel2;
