import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import FormOne from "../../../forms/respTT/FormOne";

const CreateEmploye = () => {
    const [t, i18n] = useTranslation("common");
    return (
        <>
            <ToastContainer />
            <div className="bg-slate-100 dark:text-gray-500 shadow-lg rounded-lg w-full">
                <h1 className="text-center text-2xl font-bold">{t("add")}</h1>
                <FormOne t={t} />
            </div>
            <div className="flex w-full justify-center">
                <button className="text-blue-600 underline">
                    <Link to="/liste">{t("back")}</Link>
                </button>
            </div>
        </>
    );
};

export default CreateEmploye;
