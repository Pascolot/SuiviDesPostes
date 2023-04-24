import axios from "axios";
import React, { useRef, useState } from "react";
import Moment from "react-moment";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import UseModal from "../../../modals/UseModal";
import DeleteModalDef from "../../../modals/respTT/DeleteModalDef";
import { useHistory } from "react-router-dom";

const SousCorbeille = ({ item, t }) => {
    const [refs, setRefs] = useState(null);
    const idRef = useRef();
    let history = useHistory();
    const { isShowing: isShowingNow, toggle: toggleNow } = UseModal();

    const handleMouse = () => {
        setRefs(idRef.current?.textContent);
    };
    const handleClick = () => {
        axios
            .post("corbeilleRecup", {
                id: refs,
            })
            .then(() => {
                toast.info(t("restoring"));
                setTimeout(() => {
                    history.push("/liste");
                }, 3000);
            });
    };

    return (
        <div className="mt-2 bg-slate-300 rounded text-gray-500">
            <ToastContainer />
            <div className="m-2">
                <span className="text-gray-700">Matricule : </span>
                <span ref={idRef}>{item.Matricule}</span>
            </div>
            <div className="m-2">
                <span className="text-gray-700">{t("name")} : </span>
                {item.Nom}
            </div>
            <div className="m-2">
                <span className="text-gray-700">{t("first_name")} : </span>
                {item.Prenom}
            </div>
            <div className="m-2">
                <span className="text-gray-700">{t("gender")} : </span>
                {item.Genre}
            </div>
            <div className="m-2">
                <span className="text-gray-700">{t("position")} : </span>
                {item.Poste_occupe}
            </div>
            <div className="m-2">
                <span className="text-gray-700">{t("address")} : </span>
                {item.Adresse}
            </div>
            <div className="m-2">
                <span className="text-gray-700">Contact : </span>
                {item.Contact}
            </div>
            <div className="m-2 text-gray-900">
                {t("deleted_on")}
                <Moment
                    format={`DD/MM/YYYY ${t("at")} hh:mm:ss`}
                    date={item.deleted_at}
                />
            </div>
            <div className="flex justify-between mb-2">
                <p
                    onMouseDown={handleMouse}
                    onClick={handleClick}
                    className="text-blue-700 font-semibold cursor-pointer underline m-2"
                >
                    {t("restore")}
                </p>
                <p
                    onMouseDown={handleMouse}
                    onClick={toggleNow}
                    className="text-red-700 font-semibold cursor-pointer underline m-2"
                >
                    {t("definitive_deleting")}
                </p>
            </div>

            <DeleteModalDef
                isShowingNow={isShowingNow}
                toggle={toggleNow}
                refs={refs}
                t={t}
            />
        </div>
    );
};

export default SousCorbeille;
