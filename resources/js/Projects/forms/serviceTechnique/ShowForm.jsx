import React from "react";
import Moment from "react-moment";

const ShowForm = ({ employee, loading, t }) => {
    if (loading) {
        return <h2 className="text-red-700">{t("loading")}</h2>;
    }
    return (
        <div className="m-4">
            {employee.map((data, index) => (
                <div className="text-gray-500" key={index}>
                    <p>
                        <span className="text-gray-700 font-semibold">
                            {t("num_mat")} :{" "}
                        </span>
                        <span>{data.Matricule}</span>
                    </p>
                    <p>
                        <span className="text-gray-700 font-semibold">
                            {t("first_name")} :{" "}
                        </span>
                        <span>{data.Prenom}</span>
                    </p>
                    <p>
                        <span className="text-gray-700 font-semibold">
                            {t("gender")} :{" "}
                        </span>
                        <span>{data.Genre}</span>
                    </p>
                    <p>
                        <span className="text-gray-700 font-semibold">
                            {t("position")} :{" "}
                        </span>
                        <span>{data.Poste_occupe}</span>
                    </p>
                    <p>
                        <span className="text-gray-700 font-semibold">
                            {t("created_on")}{" "}
                        </span>

                        <Moment format="DD/MM/YYYY" date={data.created_at} />
                    </p>
                </div>
            ))}
        </div>
    );
};

export default ShowForm;
