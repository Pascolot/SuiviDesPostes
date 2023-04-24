import React from "react";
import FormTwo from "../../forms/respTT/FormTwo";

export default function UpdateModal({
    toggle1,
    Matricule,
    Nom,
    Prenom,
    Genre,
    PostOccupe,
    Adresse,
    Contact,
    isShowing1Now,
    t,
}) {
    return (
        <div>
            <div
                className={`fixed ${
                    isShowing1Now ? "left-0" : "left-full"
                } duration-500 top-0 bg-zinc-500 bg-opacity-80 inset-0 z-50 w-screen h-screen flex justify-center items-center`}
            >
                <div
                    id={"Modal"}
                    className="w-96 max-w-lg bg-white shadow-md bg-opacity-80 shadow-gray-700 border-2 border-sky-700 rounded-2xl"
                >
                    <div className="flex justify-between items-center mx-4 my-2">
                        <h1 className="font-bold text-2xl text-gray-500">
                            {t("updating")}
                        </h1>
                        <button
                            title={t("close")}
                            className="buttonModal"
                            onClick={toggle1}
                        >
                            <span className="closeModal">×</span>
                        </button>
                    </div>
                    <hr className="border-gray-700 mx-4 opacity-20" />

                    <FormTwo
                        Matricule={Matricule}
                        Nom={Nom}
                        Prenom={Prenom}
                        Genre={Genre}
                        PostOccupe={PostOccupe}
                        Adresse={Adresse}
                        Contact={Contact}
                    />
                </div>
            </div>
        </div>
    );
}
