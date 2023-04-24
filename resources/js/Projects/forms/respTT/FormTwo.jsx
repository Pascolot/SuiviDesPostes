import axios from "axios";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

const FormTwo = ({ Matricule, Nom, Prenom, Genre, PostOccupe, Adresse, Contact }) => {
    const [input, setInput] = useState({
        matricule: Matricule,
        nom: Nom,
        prenom: Prenom,
        poste: PostOccupe,
        adresse: Adresse,
        contact: Contact,
    });
    const [genderValue, setGenderValue] = useState(Genre);
    const [t, i18n] = useTranslation("common");

    const { matricule, nom, prenom, poste, adresse, contact } = input;

    const inputChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value }); // ...json
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("updateEmployeeList", {...input, genre: genderValue}).then(() => {
            toast.warning(t("update"));
            setTimeout(() => {
                location.reload();
            }, 3000);
        });
    };

    const handleSelect = (ev) => {
        const event = ev.target.options;
        for (let i = 0; i < event.length; i++) {
            if (event[i].selected) {
                setGenderValue(event[i].value);
            }
        }
    };

    return (
        // formulaire pour ajouter un employé à la liste
        <form onSubmit={handleSubmit} className="ml-4">
            <div className="contentForm">
                <label className="labelForm" htmlFor="matricule">
                    Matricule
                </label>
                <input
                    className="inputForm"
                    type="text"
                    name="matricule"
                    id="matricule"
                    defaultValue={matricule}
                    readOnly
                    autoComplete="off"
                />
            </div>
            <div className="contentForm">
                <label className="labelForm" htmlFor="nom">
                    {t("name")}
                </label>
                <input
                    className="inputForm"
                    type="text"
                    defaultValue={nom}
                    onChange={inputChange}
                    name="nom"
                    id="nom"
                    autoComplete="off"
                />
            </div>
            <div className="contentForm">
                <label className="labelForm" htmlFor="prenom">
                    {t("first_name")}
                </label>
                <input
                    className="inputForm"
                    type="text"
                    name="prenom"
                    id="prenom"
                    defaultValue={prenom}
                    onChange={inputChange}
                    autoComplete="off"
                />
            </div>
            <div className="contentForm">
                <label className="labelForm" htmlFor="prenom">
                    {t("gender")}
                </label>
                <select
                    onChange={handleSelect}
                    className="inputForm mt-px"
                    name="select"
                    id="select"
                >
                    {Genre === "Feminin" ? (
                        <>
                            <option value="Feminin">{t("female")}</option>
                            <option value="Masculin">{t("male")}</option>
                        </>
                    ) : (
                        <>
                            <option value="Masculin">{t("male")}</option>
                            <option value="Feminin">{t("female")}</option>
                        </>
                    )}
                </select>
            </div>
            <div className="contentForm">
                <label className="labelForm" htmlFor="poste_occupe">
                    {t("position")}
                </label>
                <input
                    className="inputForm"
                    type="text"
                    name="poste"
                    id="poste_occupe"
                    defaultValue={poste}
                    onChange={inputChange}
                    autoComplete="off"
                />
            </div>
            <div className="contentForm">
                <label className="labelForm" htmlFor="adresse">
                    {t("address")}
                </label>
                <input
                    className="inputForm"
                    type="text"
                    name="adresse"
                    id="adresse"
                    defaultValue={adresse}
                    onChange={inputChange}
                    autoComplete="off"
                />
            </div>
            <div className="contentForm">
                <label className="labelForm" htmlFor="contact">
                    Contact
                </label>
                <input
                    className="inputForm"
                    type="tel"
                    name="contact"
                    id="contact"
                    defaultValue={contact}
                    onChange={inputChange}
                    autoComplete="off"
                />
            </div>
            <div className="w-full mb-5 mt-4 flex justify-end">
                <input
                    className="btn mr-12 cursor-pointer"
                    type="submit"
                    value={t("save")}
                />
            </div>
        </form>
    );
};

export default FormTwo;
