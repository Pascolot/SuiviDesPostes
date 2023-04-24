import React from "react";
import {
    BrowserRouter,
    Route,
} from "react-router-dom/cjs/react-router-dom.min";
import Topnav3 from "../../topNav/serviceAccueil/serviceTechnique/Topnav3";
import Sidebar3 from "../../sidebar/serviceAccueil/Sidebar3";
import Paths3 from "../../paths/serviceAccueil/serviceTechnique/Paths3";
import logo from "../../../../../public/images/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const Layout3 = () => {
    return (
        <BrowserRouter>
            <Route
                render={(props) => (
                    <div className="container flex max-w-full">
                        <Sidebar3 {...props} />
                        <div className="max-w-full min-h-screen flex flex-col w-full bg-slate-100 dark:bg-slate-900 dark:text-white">
                            <Topnav3 />
                            <div className="max-w-full flex flex-col h-full w-full justify-between">
                                <div className="content-main m-4">
                                    <Paths3 />
                                </div>
                                <footer className="w-full flex justify-center items-center h-16 bg-slate-100">
                                    <div>
                                        <img
                                            className="inline-block -mt-1"
                                            src={logo}
                                            width={"128"}
                                            height={"128"}
                                            alt="logoLuminess"
                                        />
                                        <span className="-ml-3 text-gray-700 font-medium">
                                            Madagascar
                                        </span>
                                        <FontAwesomeIcon
                                            className="text-sm text-gray-700 mx-1"
                                            icon={faCopyright}
                                        />
                                        <span className="text-gray-700 font-medium">
                                            2022
                                        </span>
                                    </div>
                                </footer>
                            </div>
                        </div>
                    </div>
                )}
            />
        </BrowserRouter>
    );
};

export default Layout3;
