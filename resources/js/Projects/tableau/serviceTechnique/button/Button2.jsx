import React, { useState } from "react";
import {
    faEdit,
    faTrashAlt,
    faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UseModal from "../../../modals/UseModal";
import DeleteModal2 from "../../../modals/serviceTechnique/DeleteModal2";
import UpdateModal2 from "../../../modals/serviceTechnique/UpdateModal2";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { toast } from "react-toastify";

const Button2 = ({ Matricule }) => {
    const [t, i18n] = useTranslation("common");

    const {
        isShowing: isShowingNow,
        toggle: toggleNow,
        isShowing1: isShowingNow1,
        toggle1: toggleNow1,
    } = UseModal();

    const [send, setSend] = useState(null);

    const handleclick = () => {
        axios.post("sending2", { Matricule: Matricule }).then(() => {
            toast.success(send === null ? t("sending") : send);
            setSend(t("record"));
        });
    };

    const handleMouse = () => {
        axios.post("sending2", { Matricule: Matricule }).then((resp) => {
            setSend(resp.data);
        });
    };

    return (
        <div className="flex items-center justify-center">
            <FontAwesomeIcon
                title={t("updated")}
                onClick={toggleNow1}
                icon={faEdit}
                className="text-blue-700 cursor-pointer m-1.5"
            />

            <FontAwesomeIcon
                title={t("delete")}
                icon={faTrashAlt}
                onClick={toggleNow}
                className=" text-red-700 cursor-pointer m-1.5"
            />

            <FontAwesomeIcon
                onClick={handleclick}
                onMouseDown={handleMouse}
                icon={faPaperPlane}
                title={t("send")}
                className="text-sky-400 cursor-pointer m-1.5"
            />

            <UpdateModal2
                isShowingNow1={isShowingNow1}
                toggle1={toggleNow1}
                id={Matricule}
                t={t}
            />

            <DeleteModal2
                isShowingNow={isShowingNow}
                toggle={toggleNow}
                id={Matricule}
                t={t}
            />
        </div>
    );
};

export default Button2;
