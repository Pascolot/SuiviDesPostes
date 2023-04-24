import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Parametres = () => {
    const [t, i18n] = useTranslation("common");
    return (
        <div>
            <ul>
                <li className="text-blue-600 underline">
                    <Link to="/parametres_langage">
                        {i18n.language === "fr" ? "Langages" : "Languages"}
                    </Link>
                </li>
                <li className="text-blue-600 underline">
                    <Link to="/parametres_corbeille">
                        {i18n.language === "fr" ? "Corbeille" : "Trash"}
                    </Link>
                </li>
                <li className="text-blue-600 underline">
                    <Link to="/parametres_aides">
                        {i18n.language === "fr" ? "Aides" : "Help"}
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Parametres;
