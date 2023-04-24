import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Submenu3 = ({ data, index, open, active, props }) => {
    const [subMenu, setSubMenu] = useState(false);
    const [subMenu2, setSubMenu2] = useState(false);
    const [t, i18n] = useTranslation("common");

    const activated = active ? "text-slate-50 font-bold bg-light-white" : "";

    const showSubMenu = () => setSubMenu(!subMenu);

    const showSubMenu2 = () => setSubMenu2(!subMenu2);

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            if (!open) {
                setSubMenu(false);
            }
            if (open) {
                setSubMenu2(false);
            }
        }

        return () => {
            isMounted = false;
        };
    }, [open]);

    return (
        <>
            <Link
                key={index}
                className={`flex ${
                    open ? "justify-between" : "justify-center"
                } ${activated}
                sidebarContent`}
                to={data.path}
            >
                <div className="flex items-center">
                    {index === 3 && data.submenu ? (
                        <span onClick={showSubMenu2}>{data.icon}</span>
                    ) : (
                        <span>{data.icon}</span>
                    )}
                    <span className={`ml-4 xs:hidden ${!open && "hidden"}`}>
                        {index === 0
                            ? i18n.language === "fr"
                                ? data.dash_name
                                : "Dashboard"
                            : null}
                        {index === 1
                            ? i18n.language === "fr"
                                ? data.dash_name
                                : "Employees and Materials"
                            : null}
                        {index === 2
                            ? i18n.language === "fr"
                                ? data.dash_name
                                : "Reports"
                            : null}
                        {index === 3
                            ? i18n.language === "fr"
                                ? data.dash_name
                                : "Settings"
                            : null}
                        {index === 4
                            ? i18n.language === "fr"
                                ? data.dash_name
                                : "Abouts"
                            : null}
                    </span>
                </div>
                <div>
                    {data.submenu && subMenu ? (
                        <span
                            className={`relative md:ml-4 xs:hidden top-0.5 ${
                                !open && "hidden"
                            }`}
                            onClick={data.submenu && showSubMenu}
                        >
                            {data.iconOpened}
                        </span>
                    ) : data.submenu ? (
                        <span
                            className={`relative md:ml-4 xs:hidden top-0.5 ${
                                !open && "hidden"
                            }`}
                            onClick={data.submenu && showSubMenu}
                        >
                            {data.iconClosed}
                        </span>
                    ) : null}
                </div>
            </Link>

            <div className="relative">
                {subMenu &&
                    data.submenu.map((data, index) => {
                        return (
                            <Link
                                className={`sidebarSubmenu ${
                                    !open && "hidden"
                                } ${
                                    props.location.pathname === data.subPath
                                        ? "text-slate-300 font-bold"
                                        : "text-gray-500 hover:text-white"
                                }`}
                                to={data.subPath ? data.subPath : "/home"}
                                key={index}
                            >
                                <span
                                    className={`${
                                        props.location.pathname === data.subPath
                                            ? "text-slate-300 font-bold"
                                            : "text-light-white"
                                    }`}
                                >
                                    {data.icon}
                                </span>
                                <span className="ml-4">
                                    {index === 0
                                        ? i18n.language === "fr"
                                            ? data.subDash_name
                                            : "Languages"
                                        : null}
                                    {index === 1
                                        ? i18n.language === "fr"
                                            ? data.subDash_name
                                            : "Trash"
                                        : null}
                                    {index === 2
                                        ? i18n.language === "fr"
                                            ? data.subDash_name
                                            : "Help"
                                        : null}
                                </span>
                            </Link>
                        );
                    })}

                {subMenu2 &&
                    data.submenu.map((data, index) => {
                        return (
                            <Link
                                onClick={showSubMenu2}
                                className={`${
                                    (index === 0 && "-top-28 rounded-t-md") ||
                                    (index === 1 && "-top-14") ||
                                    (index === 2 && "rounded-b-md")
                                } bg-slate-100 shadow-md w-40 absolute z-50 h-14 ml-24 flex items-center no-underline text-lg hover:cursor-pointer ${
                                    open && "hidden"
                                } ${
                                    props.location.pathname === data.subPath
                                        ? "text-slate-300 font-bold"
                                        : "text-gray-500 hover:text-blue-700"
                                }`}
                                to={data.subPath ? data.subPath : "/home"}
                                key={index}
                            >
                                <span
                                    className={`${
                                        props.location.pathname === data.subPath
                                            ? "text-slate-300 font-bold"
                                            : "text-gray-500"
                                    } ${!open && "ml-4"}`}
                                >
                                    {data.icon}
                                </span>
                                <span className="ml-4">
                                    {index === 0
                                        ? i18n.language === "fr"
                                            ? data.subDash_name
                                            : "Language"
                                        : null}
                                    {index === 1
                                        ? i18n.language === "fr"
                                            ? data.subDash_name
                                            : "Trash"
                                        : null}
                                    {index === 2
                                        ? i18n.language === "fr"
                                            ? data.subDash_name
                                            : "Help"
                                        : null}
                                </span>
                            </Link>
                        );
                    })}
            </div>
        </>
    );
};

export default Submenu3;
