import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function DeleteModal2({ toggle, id, isShowingNow, t }) {
    const DeletePost = (employee_id) => {
        axios
            .post("/deleteEmployeeMaterials", {
                Matricule: employee_id,
            })
            .then(() => {
                toast.error(t("deleted"));
                setTimeout(() => {
                    location.reload();
                }, 3000);
            });
    };

    return (
        <div>
            <div
                className={`fixed ${
                    isShowingNow ? "top-0" : "top-full"
                } duration-500  left-0 bg-zinc-500 bg-opacity-80 inset-0 z-50 w-screen h-screen flex justify-center items-center`}
            >
                <div className="w-2/5 max-w-lg bg-white shadow-md bg-opacity-90 shadow-gray-700 border-2 border-sky-500 rounded-2xl">
                    <div className="flex justify-between items-center mx-4 my-2">
                        <h1 className="font-bold text-2xl text-gray-500">
                            {t("deleting")}
                        </h1>

                        <button
                            title={t("close")}
                            className="buttonModal"
                            onClick={toggle}
                        >
                            <span className="closeModal">×</span>
                        </button>
                    </div>
                    <hr className="border-gray-700 mx-4 opacity-20" />
                    <div>
                        <p className="font-bold p-2 text-center text-sm text-gray-500">
                            {t("deleting_question")}
                        </p>
                    </div>
                    <hr className="border-gray-700 mx-4 opacity-20" />
                    <div className="  flex justify-end">
                        <button
                            onClick={() => {
                                DeletePost(id);
                            }}
                            className="yesNoButton"
                        >
                            {t("yes")}
                        </button>
                        <button onClick={toggle} className="yesNoButton">
                            {t("no")}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
