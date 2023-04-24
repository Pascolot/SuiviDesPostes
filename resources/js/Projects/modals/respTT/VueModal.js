import React from "react";

export default function VueModal({
    toggle,
    Matricule,
    Nom,
    Prenom,
    Genre,
    PostOccupe,
    Adresse,
    Contact,
    isShowingNow,
    t,
}) {
    return (
        <div>
            <div
                className={`fixed ${
                    isShowingNow ? "scale-100" : "scale-0"
                } duration-500 top-0 left-0 bg-zinc-500 bg-opacity-80 inset-0 z-50 w-screen h-screen flex justify-center items-center`}
            >
                <div className="w-96 max-w-lg bg-white text-gray-500 shadow-md bg-opacity-90 shadow-gray-700 border-2 border-sky-700 rounded-2xl">
                    <div className="flex justify-between items-center mx-4 my-2">
                        <h1 className="font-bold text-2xl text-gray-500">
                            {t("view")}
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
                    <div className="relative p-4 flex flex-col items-start">
                        <div className="py-2">
                            <strong>Matricule</strong> : {Matricule}
                        </div>
                        <div>
                            <strong>{t("name")}</strong> : {Nom}
                        </div>
                        <div className="py-2">
                            <strong>{t("first_name")}</strong> : {Prenom}
                        </div>
                        <div className="pb-2">
                            <strong>{t("gender")}</strong> : {Genre}
                        </div>
                        <div>
                            <strong>{t("position")}</strong> : {PostOccupe}
                        </div>
                        <div className="py-2">
                            <strong>{t("address")}</strong> : {Adresse}
                        </div>
                        <div>
                            <strong>Contact</strong> : {Contact}
                        </div>
                    </div>
                    <hr className="border-gray-700 opacity-20" />
                    <div className="flex justify-end mr-6 my-2">
                        <button
                            onClick={toggle}
                            className="text-white bg-red-700 my-2 px-5 py-2 rounded cursor-pointer"
                        >
                            {t("close")}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
