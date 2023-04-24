import React from "react";

const DropDown3 = ({ t, i18n }) => {
    const changeLanguage = () => {
        try {
            localStorage.setItem("lang", "Fr");
        } catch (e) {
            console.log(e);
        }
        i18n.changeLanguage("fr");
    };

    const changeLanguage2 = () => {
        try {
            localStorage.setItem("lang", "En");
        } catch (e) {
            console.log(e);
        }
        i18n.changeLanguage("en");
    };

    return (
        <div className="w-full mt-2 mb-2 text-gray-500 flex justify-center">
            <div className="text-center">
                <p onClick={changeLanguage} className="lang">
                    {i18n.language === "fr" ? "Français" : "French"}
                </p>
                <div className="w-full h-0 my-2 border-opacity-25 border border-gray-700"></div>
                <p onClick={changeLanguage2} className="lang">
                    {i18n.language === "fr" ? "Anglais" : "English"}
                </p>
            </div>
        </div>
    );
};

export default DropDown3;
