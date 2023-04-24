import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "./button/Button";

const TableEmployee = ({ employee, loading, t }) => {
    if (loading) {
        return <h2 className="text-red-700">{t("loading")}</h2>;
    }
    return (
        <div className="w-full max-w-full">
            <ToastContainer />
            <table className="w-full text-gray-500">
                <thead className="cm:hidden bg-slate-300 h-10 font-bold border-b-2 border-gray-300">
                    <tr className="text-sm sm:text-base font-semibold table-row">
                        <th>Matricule</th>
                        <th>{t("name")}</th>
                        <th>{t("first_name")}</th>
                        <th>{t("gender")}</th>
                        <th>{t("position")}</th>
                        <th>{t("address")}</th>
                        <th>Contact</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y-2 divide-gray-200 text-center">
                    {employee.length === 0 ? (
                        <tr className="text-sm cm:block font-semibold table-row">
                            <td className="responsive" data-label={t("none")}>
                                {t("none")}
                            </td>
                            <td className="responsive" data-label={t("none")}>
                                {t("none")}
                            </td>
                            <td className="responsive" data-label={t("none")}>
                                {t("none")}
                            </td>
                            <td className="responsive" data-label={t("none")}>
                                {t("none")}
                            </td>
                            <td className="responsive" data-label={t("none")}>
                                {t("none")}
                            </td>
                            <td className="responsive" data-label={t("none")}>
                                {t("none")}
                            </td>
                            <td className="responsive" data-label={t("none")}>
                                {t("none")}
                            </td>
                            <td className="responsive flex justify-center items-center" data-label={t("none")}>
                                <div className="flex items-center justify-around w-24">
                                    <FontAwesomeIcon
                                        icon={faEye}
                                        className="text-slate-500 cursor-pointer"
                                    />

                                    <FontAwesomeIcon
                                        icon={faEdit}
                                        className="text-blue-700 cursor-pointer"
                                    />

                                    <FontAwesomeIcon
                                        icon={faTrash}
                                        className="text-red-700 cursor-pointer"
                                    />
                                </div>
                            </td>
                        </tr>
                    ) : (
                        employee.map((item, index) => (
                            <tr
                                className="cm:text-sm odd:bg-white odd:text-gray-700 even:text-slate-100 bg-slate-400 cm:block cm:mb-4 font-semibold"
                                key={index}
                            >
                                <td
                                    data-label="Matricule"
                                    className="responsive"
                                >
                                    {item.Matricule}
                                </td>
                                <td
                                    data-label={t("name")}
                                    className="responsive"
                                >
                                    {item.Nom}
                                </td>
                                <td
                                    data-label={t("first_name")}
                                    className="responsive"
                                >
                                    {item.Prenom}
                                </td>
                                <td
                                    data-label={t("gender")}
                                    className="responsive"
                                >
                                    {item.Genre}
                                </td>
                                <td
                                    data-label={t("position")}
                                    className="responsive"
                                >
                                    {item.Poste_occupe}
                                </td>
                                <td
                                    data-label={t("address")}
                                    className="responsive"
                                >
                                    {item.Adresse}
                                </td>
                                <td
                                    data-label={"Contact"}
                                    className="responsive"
                                >
                                    {item.Contact}
                                </td>
                                <td
                                    data-label={"Actions"}
                                    className="responsive flex justify-center items-center"
                                >
                                    <Button
                                        Matricule={item.Matricule}
                                        Nom={item.Nom}
                                        Prenom={item.Prenom}
                                        Genre={item.Genre}
                                        PostOccupe={item.Poste_occupe}
                                        Adresse={item.Adresse}
                                        Contact={item.Contact}
                                    />
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default TableEmployee;
