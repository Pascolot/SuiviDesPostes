import React from "react";
import Paths2 from "../../paths/serviceTechnique/Paths2";
import Sidebar2 from "../../sidebar/serviceTechnique/Sidebar2";
import Topnav2 from "../../topNav/serviceTechnique/Topnav2";
import {
    BrowserRouter,
    Route,
} from "react-router-dom/cjs/react-router-dom.min";
import logo from "../../../../../public/images/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const Layout2 = () => {
    return (
        <BrowserRouter>
            <Route
                render={(props) => (
                    <div className="container flex max-w-full">
                        <Sidebar2 {...props} />
                        <div className="max-w-full min-h-screen flex flex-col w-full bg-slate-100 dark:bg-slate-900 dark:text-white">
                            <Topnav2 />
                            <div className="max-w-full flex flex-col h-full w-full justify-between">
                                <div className="content-main m-4">
                                    <Paths2 />
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

export default Layout2;
