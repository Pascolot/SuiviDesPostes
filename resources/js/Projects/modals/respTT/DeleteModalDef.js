import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function DeleteModalDef({ toggle, refs, isShowingNow, t }) {
    const DeletePost = (employee_id) => {
        axios
            .post("corbeilleDef", {
                id: employee_id,
            })
            .then(() => {
                toast.error(t("definitive_result"));
                setTimeout(() => {
                    location.reload();
                }, 3000);
            });
    };

    return (
        <div>
            <div
                className={`fixed top-0 left-0 z-50 bg-zinc-500 bg-opacity-80 w-screen h-screen flex justify-center items-center ${
                    isShowingNow ? "scale-100" : "scale-0"
                } duration-500`}
            >
                <div className="w-4/5 max-w-md bg-white shadow-md bg-opacity-80 shadow-gray-700 border-2 border-sky-700 rounded-2xl">
                    <div className="flex justify-between items-center mx-4 my-2">
                        <h1 className="font-bold text-2xl text-gray-500">
                            {t("definitive_delete")}
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
                        <p className="font-bold text-center p-2">
                            {t("definitive_question")}
                        </p>
                    </div>
                    <hr className="border-gray-700 mx-4 opacity-20" />
                    <div className="  flex justify-end">
                        <button
                            onClick={() => {
                                DeletePost(refs);
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
