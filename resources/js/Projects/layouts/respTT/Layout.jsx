import React from "react";
import Paths from "../../paths/respTT/Paths";
import Sidebar from "../../sidebar/respTT/Sidebar";
import Topnav from "../../topNav/respTT/Topnav";
import logo from "../../../../../public/images/logo2.png";
import {
    BrowserRouter,
    Route,
} from "react-router-dom/cjs/react-router-dom.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const Layout = () => {
    return (
        <BrowserRouter>
            <Route
                // Nous recuperons ici les propriétés du route (history, pathname etc ...)
                render={(props) => (
                    <div className="container flex max-w-full">
                        <Sidebar {...props} />
                        <div className="max-w-full min-h-screen flex flex-col w-full bg-slate-100 dark:bg-slate-900 dark:text-white">
                            <Topnav />
                            <div className="max-w-full flex flex-col h-full w-full justify-between">
                                <div className="content-main m-4">
                                    <Paths />
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

export default Layout;
