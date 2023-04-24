import {
    faEdit,
    faEye,
    faPaperPlane,
    faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import UseModal from "../../../modals/UseModal";
import UpdateModal from "../../../modals/respTT/UpdateModal";
import VueModal from "../../../modals/respTT/VueModal";
import DeleteModal from "../../../modals/respTT/DeleteModal";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

const Button = ({
    Matricule,
    Nom,
    Prenom,
    Genre,
    PostOccupe,
    Adresse,
    Contact,
}) => {
    const {
        isShowing: isShowingNow,
        isShowing1: isShowing1Now,
        isShowing2: isShowing2Now,
        toggle: toggleNow,
        toggle1: toggle1Now,
        toggle2: toggle2Now,
    } = UseModal();
    const [t, i18n] = useTranslation("common");
    const [send, setSend] = useState(null);

    const handleClick = () => {
        axios.post("sending", { Matricule: Matricule }).then(() => {
            toast.success(send === null ? t("sending") : send);
            setSend(t("record"));
        });
    };

    return (
        <>
            {/* icône pour les differentes actions */}

            <div className="flex items-center justify-around w-24">
                <FontAwesomeIcon
                    title={t("view")}
                    icon={faEye}
                    onClick={() => {
                        toggleNow();
                    }}
                    className="text-slate-600 cursor-pointer"
                />

                <FontAwesomeIcon
                    title={t("updated")}
                    icon={faEdit}
                    onClick={() => {
                        toggle1Now();
                    }}
                    className="text-blue-700 cursor-pointer"
                />

                <FontAwesomeIcon
                    title={t("delete")}
                    icon={faTrashAlt}
                    onClick={toggle2Now}
                    className="text-red-700 cursor-pointer"
                />

                <FontAwesomeIcon
                    title={t("send")}
                    icon={faPaperPlane}
                    onClick={handleClick}
                    className="text-sky-600 cursor-pointer"
                />
            </div>

            <VueModal
                toggle={toggleNow}
                Matricule={Matricule}
                Nom={Nom}
                Prenom={Prenom}
                Genre={Genre}
                PostOccupe={PostOccupe}
                Adresse={Adresse}
                Contact={Contact}
                isShowingNow={isShowingNow}
                t={t}
            />

            <UpdateModal
                toggle1={toggle1Now}
                Matricule={Matricule}
                Nom={Nom}
                Prenom={Prenom}
                Genre={Genre}
                PostOccupe={PostOccupe}
                Adresse={Adresse}
                Contact={Contact}
                isShowing1Now={isShowing1Now}
                t={t}
            />

            <DeleteModal
                toggle2={toggle2Now}
                isShowing2Now={isShowing2Now}
                id={Matricule}
                t={t}
            />
        </>
    );
};

export default Button;
