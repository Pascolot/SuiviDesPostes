import axios from "axios";
import React from "react";

const DropDown2 = ({ notif, t, i18n }) => {
    const handleClick = () => {
        axios.post("reset2", {});
    };

    return (
        <div className={`${notif === 0 ? "hidden" : "block"} m-4`}>
            <div>
                {t("receive")}
                <span> {notif !== 0 ? notif : null} </span>
                message(s)
            </div>
            <div className="flex justify-center items-center">
                <button
                    onClick={handleClick}
                    className={`text-white ${
                        i18n.language === "en" && "px-5"
                    } bg-green-600 py-1 px-1 rounded mt-4`}
                >
                    {t("asread")}
                </button>
            </div>
        </div>
    );
};

export default DropDown2;
