import React from "react";
import Moment from "react-moment";

const ShowForm2 = ({ employee, loading, t }) => {
    if (loading) {
        return <h2>{t("loading")}</h2>;
    }
    return (
        <div className="m-4">
            {employee.map((data, index) => (
                <div key={index}>
                    <p>
                        <span className="dark:text-blue-500 text-slate-50 font-semibold">
                            {t("num_mat")} :
                        </span>{" "}
                        <span className="text-gray-300 dark:text-slate-700">
                            {data.Matricule}
                        </span>
                    </p>
                    <p className="mt-2">
                        <span className="dark:text-blue-500 text-slate-50 font-semibold">
                            {t("name")} :{" "}
                        </span>
                        <span className="text-gray-300 dark:text-slate-700">
                            {data.Nom}
                        </span>
                    </p>
                    <p className="mt-2">
                        <span className="dark:text-blue-500 text-slate-50 font-semibold">
                            {t("first_name")} :{" "}
                        </span>
                        <span className="text-gray-300 dark:text-slate-700">
                            {data.Prenom}
                        </span>
                    </p>
                    <p className="mt-2">
                        <span className="dark:text-blue-500 text-slate-50 font-semibold">
                            {t("Genre")} :{" "}
                        </span>
                        <span className="text-gray-300 dark:text-slate-700">
                            {data.Genre}
                        </span>
                    </p>
                    <p className="mt-2">
                        <span className="dark:text-blue-500 text-slate-50 font-semibold">
                            {t("position")} :{" "}
                        </span>
                        <span className="text-gray-300 dark:text-slate-700">
                            {data.Poste_occupe}
                        </span>
                    </p>
                    <p className="mt-2">
                        <span className="dark:text-blue-500 text-slate-50 font-semibold">
                            {t("address")} :{" "}
                        </span>
                        <span className="text-gray-300 dark:text-slate-700">
                            {data.Adresse}
                        </span>
                    </p>
                    <p className="mt-2">
                        <span className="dark:text-blue-500 text-slate-50 font-semibold">
                            Contact :{" "}
                        </span>
                        <span className="text-gray-300 dark:text-slate-700">
                            {data.Contact}
                        </span>
                    </p>
                    <p className="mt-2">
                        <span className="dark:text-blue-500 text-slate-50 font-semibold">
                            {t("receiving")}{" "}
                        </span>

                        <Moment
                            className="text-gray-300 dark:text-slate-700"
                            format="DD/MM/YYYY"
                            date={data.created_at}
                        />
                    </p>
                </div>
            ))}
        </div>
    );
};

export default ShowForm2;
