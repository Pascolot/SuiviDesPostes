import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import logo from "../../src/logo.png";
import { sidebarData2 } from "../../json/data/serviceTechnique/sidebarData2";
import Submenu2 from "./subMenu/Submenu2";

const Sidebar2 = (props) => {
    const [open, setOpen] = useState(true);

    const activeItem = sidebarData2.findIndex(
        (item) => item.path === props.location.pathname
    );

    return (
        <div
            className={`${
                open ? "w-60" : "w-24"
            } min-h-screen xs:w-24 bg-dark-purple duration-500 relative`}
        >
            <button onClick={() => setOpen(!open)} className="boutonShowhide">
                <FontAwesomeIcon
                    className={` dark:text-slate-200 text-white font-extrabold ${
                        !open && "rotate-180"
                    }`}
                    icon={faAngleLeft}
                />
            </button>

            {/* entête */}
            <div className="flex justify-center items-center gap-x-2 mt-4">
                <img
                    width={`64px`}
                    height={`64px`}
                    src={logo}
                    className={`cursor-pointer ml-1 duration-700 ${
                        open && "rotate-[360deg]"
                    } ${!open && "scale-125"} cm:scale-100`}
                />
                <h1
                    className={`text-white origin-left ml-3 font-medium text-lg duration-300 ${
                        !open && "hidden"
                    } xs:hidden`}
                >
                    <span className="text-green-500 font-semibold block">
                        Luminess
                    </span>
                    <span className="block font-semibold">Madagascar</span>
                </h1>
            </div>

            {/* Contenu */}
            <ul className="list-none mt-20 text-gray-500">
                {sidebarData2.map((data, index) => {
                    return (
                        <Submenu2
                            open={open}
                            key={index}
                            data={data}
                            index={index}
                            active={index === activeItem}
                            props={props}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default Sidebar2;
