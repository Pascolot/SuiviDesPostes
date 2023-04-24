import React from "react";
import { useTranslation } from "react-i18next";

const Language = () => {
    const [t, i18n] = useTranslation("common");
    return (
        <div>
            Langages
            <p
                className="text-gray-500 font-semibold text-lg cursor-pointer"
                onClick={() => i18n.changeLanguage("fr")}
            >
                Français
            </p>
            <p
                className="text-gray-500 font-semibold text-lg cursor-pointer"
                onClick={() => i18n.changeLanguage("en")}
            >
                Anglais
            </p>
        </div>
    );
};

export default Language;
