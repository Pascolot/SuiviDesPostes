import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const FormOne = ({ t }) => {
    const [input, setInput] = useState({
        matricule: "",
        nom: "",
        prenom: "",
        poste: "",
        adresse: "",
        contact: "",
    });
    const [genderValue, setGenderValue] = useState("Masculin");

    let history = useHistory();

    const { matricule, nom, prenom, poste, adresse, contact } = input;

    const inputChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value }); // ... suivi d'un json
    };

    const handleSelect = (ev) => {
        const event = ev.target.options;
        for (let i = 0; i < event.length; i++) {
            if (event[i].selected) {
                setGenderValue(event[i].value);
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("employeeList", {
                ...input,
                genre: genderValue,
            })
            .then(() => {
                toast.success(t("success"));
                setTimeout(() => {
                    history.push("/liste");
                }, 3000);
            });
    };

    return (
        // formulaire pour ajouter un employé à la liste
        <form onSubmit={handleSubmit} className="flex flex-wrap justify-center">
            <div className="w-80 mt-4 flex flex-col mr-4">
                <label
                    className="mb-2 text-sm font-bold text-gray-500"
                    htmlFor="matricule"
                >
                    Matricule
                </label>
                <input
                    className="input2"
                    type="text"
                    name="matricule"
                    id="matricule"
                    value={matricule}
                    onChange={inputChange}
                    maxLength="4"
                    required
                    pattern="^1(?:[ _.-]?(\d{1})){3}$"
                    autoComplete="off"
                />
            </div>
            <div className="w-80 mt-4 flex flex-col mr-4">
                <label
                    className="mb-2 text-sm font-bold text-gray-500"
                    htmlFor="nom"
                >
                    {t("name")}
                </label>
                <input
                    className="input2 uppercase"
                    type="text"
                    value={nom}
                    onChange={inputChange}
                    name="nom"
                    id="nom"
                    required
                    autoComplete="off"
                />
            </div>
            <div className="w-80 mt-4 flex flex-col mr-4">
                <label
                    className="mb-2 text-sm font-bold text-gray-500"
                    htmlFor="prenom"
                >
                    {t("first_name")}
                </label>
                <input
                    className="input2 capitalize"
                    type="text"
                    name="prenom"
                    id="prenom"
                    value={prenom}
                    onChange={inputChange}
                    autoComplete="off"
                />
            </div>
            <div className="w-80 mt-4 flex flex-col mr-4">
                <label
                    // ici ms n'est pas un class du tailwind CSS
                    className="ms text-sm font-bold text-gray-500"
                    htmlFor="select"
                >
                    {t("gender")}
                </label>
                <select
                    onChange={handleSelect}
                    className="input2"
                    name="select"
                    id="select"
                >
                    <option value="Masculin">{t("male")}</option>
                    <option value="Feminin">{t("female")}</option>
                </select>
            </div>
            <div className="w-80 mt-4 flex flex-col mr-4">
                <label
                    className="mb-2 text-sm font-bold text-gray-500"
                    htmlFor="poste_occupe"
                >
                    {t("position")}
                </label>
                <input
                    className="input2 capitalize"
                    type="text"
                    name="poste"
                    id="poste_occupe"
                    value={poste}
                    onChange={inputChange}
                    autoComplete="off"
                    required
                />
            </div>
            <div className="w-80 mt-4 flex flex-col mr-4">
                <label
                    className="mb-2 text-sm font-bold text-gray-500"
                    htmlFor="adresse"
                >
                    {t("address")}
                </label>
                <input
                    className="input2 capitalize"
                    type="text"
                    name="adresse"
                    id="adresse"
                    value={adresse}
                    onChange={inputChange}
                    autoComplete="off"
                />
            </div>
            <div className="w-80 mb-5 mt-4 flex flex-col mr-4">
                <label
                    className="mb-2 text-sm font-bold text-gray-500"
                    htmlFor="contact"
                >
                    Contact
                </label>
                <input
                    className="input2"
                    type="tel"
                    name="contact"
                    id="contact"
                    value={contact}
                    onChange={inputChange}
                    autoComplete="off"
                    pattern="^(03[2-489])(?:[ _.-]?(\d{1})){7}$"
                    maxLength="10"
                    minLength="10"
                />
            </div>
            <div className="w-full mb-5 mt-4 mr-4 flex justify-end">
                <input
                    className="btn2 cursor-pointer"
                    type="submit"
                    value={t("adding")}
                />
            </div>
        </form>
    );
};

export default FormOne;
