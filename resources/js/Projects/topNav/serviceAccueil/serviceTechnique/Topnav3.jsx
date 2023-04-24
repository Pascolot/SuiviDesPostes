import {
    faAngleDown,
    faBell,
    faCaretDown,
    faEnvelope,
    faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import userImg from "../../../src/anonyme2.png";
import ModeEnable from "../../../darkMode/ModeEnable";
import axios from "axios";
import Dropdown from "../../../dropdown/Dropdown";
import DropDown2 from "../../../dropdown/serviceAccueil/DropDown2";
import { useTranslation } from "react-i18next";
import DropDown3 from "../../../dropdown/serviceAccueil/DropDown3";

const Topnav3 = () => {
    const [user, setUser] = useState(null);
    const [show, setShow] = useState(false);
    const [notif, setNotif] = useState([]);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const dropping2 = useRef(null);
    const dropping = useRef(null);
    const dropping3 = useRef(null);
    const [t, i18n] = useTranslation("common");

    const showDropdown = () => {
        setShow(!show);
    };

    const showDropdown2 = () => {
        setShow2(!show2);
    };

    const showDropdown3 = () => {
        setShow3(!show3);
    };

    document.onmousedown = (e) => {
        if (!dropping.current.contains(e.target)) {
            setShow(false);
        }

        if (!dropping2.current.contains(e.target)) {
            setShow2(false);
        }

        if (!dropping3.current.contains(e.target)) {
            setShow3(false);
        }
    };

    useEffect(() => {
        let isMounted = true;

        axios.get("userName").then((response) => {
            if (isMounted) {
                setUser(response.data);
            }
        });

        return () => {
            isMounted = false;
        };
    }, []);

    useEffect(() => {
        let isMounted = true;

        axios.get("notification2").then((response) => {
            if (isMounted) {
                setNotif(response.data);
            }
        });

        return () => {
            isMounted = false;
        };
    }, [show2]);

    return (
        <div className="topnav">
            <div className="relative flex items-center shadow-md rounded-3xl overflow-hidden cm:mr-4 ml-4">
                <input
                    className="search"
                    type="search"
                    name="search"
                    id="search"
                    placeholder={t("searching")}
                    autoComplete="off"
                />
                <button className="searching">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>

            {/* Ici se trouve tous les dropdown */}
            <div className="dropDown h-full items-center flex mr-10">
                <div
                    className="text-black mr-6 relative cm:hidden"
                    ref={dropping2}
                    onClick={showDropdown2}
                >
                    <FontAwesomeIcon
                        className="text-gray-700 cursor-pointer"
                        icon={faBell}
                    />
                    <span
                        className={`${
                            notif.length === 0 ? "hidden" : "badge bg-red-700"
                        }`}
                    >
                        {notif.length !== 0 ? notif.length : null}
                    </span>
                    <div
                        className={`bg-slate-100 ${
                            show2 ? "scale-100" : "scale-0"
                        } dropdown2`}
                    >
                        <DropDown2 i18n={i18n} t={t} notif={notif.length} />
                    </div>
                </div>
                <div className="text-gray-700 mr-8 relative cm:hidden">
                    <FontAwesomeIcon
                        className="text-gray-700 cursor-pointer"
                        icon={faEnvelope}
                    />
                    <span className="badge bg-blue-700">2</span>
                </div>
                <div className="text-gray-700 mr-8 -mt-0.5 relative cursor-pointer">
                    <ModeEnable />
                </div>
                <div
                    onClick={showDropdown3}
                    ref={dropping3}
                    className="-ml-4 mr-4 relative cm:hidden"
                >
                    <div className="text-gray-700 text-sm cursor-pointer">
                        {t("translate")}
                        <span className="ml-2">
                            <FontAwesomeIcon icon={faAngleDown} />
                        </span>
                    </div>
                    <div
                        className={`bg-slate-100 ${
                            show3 ? "scale-100" : "scale-0"
                        } dropdown3`}
                    >
                        <DropDown3 t={t} i18n={i18n} />
                    </div>
                </div>
                <div className="border border-opacity-20 h-3/5 w-0 mr-4 border-gray-600"></div>
                <div
                    ref={dropping}
                    onClick={showDropdown}
                    className="text-black cursor-pointer flex items-center -mt-0.5 dark:text-white relative"
                >
                    <img
                        className="rounded-full xs:rounded-md w-8 h-8 object-cover mr-2"
                        src={userImg}
                        alt="user_photo"
                    />
                    <span className="mr-2 text-gray-700">{user?.name}</span>
                    <span className="text-sm text-gray-700">
                        <FontAwesomeIcon icon={faCaretDown} />
                    </span>
                    <div
                        className={`bg-slate-100 ${
                            show ? "scale-100" : "scale-0"
                        } dropdown`}
                    >
                        <Dropdown />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topnav3;
