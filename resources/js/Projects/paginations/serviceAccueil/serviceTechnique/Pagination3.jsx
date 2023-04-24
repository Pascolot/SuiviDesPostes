import {
    faAngleDoubleLeft,
    faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Pagination3({
    employeePerPage,
    totalEmployee,
    paginate,
    currentPage,
    paginateFront,
    paginateBack,
    t,
}) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalEmployee / employeePerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex flex-wrap w-full justify-between m-4">
            <div className="w-full flex items-center">
                <p className="text-sm text-white dark:text-gray-700">
                    {t("show")}
                    <span className="font-medium">
                        {" "}
                        {totalEmployee === 0
                            ? currentPage * employeePerPage -
                              employeePerPage +
                              0
                            : currentPage * employeePerPage -
                              employeePerPage +
                              1}{" "}
                    </span>
                    {t("to")}
                    <span className="font-medium">
                        {" "}
                        {currentPage * employeePerPage > totalEmployee
                            ? totalEmployee
                            : currentPage * employeePerPage}{" "}
                    </span>
                    {t("of")}
                    <span className="font-medium"> {totalEmployee} </span>
                    {t("entries")}
                </p>
            </div>
            <nav className="block mt-2.5">
                <ul className="flex flex-wrap pl-0 rounded list-none">
                    <li>
                        <div className="">
                            <FontAwesomeIcon
                                className="cursor-pointer mr-2 text-blue-700"
                                onClick={() => {
                                    currentPage * employeePerPage -
                                        employeePerPage <=
                                    0
                                        ? null
                                        : paginateBack();
                                }}
                                icon={faAngleDoubleLeft}
                            />
                            {pageNumbers.map((number) => (
                                <a
                                    key={number}
                                    onClick={() => {
                                        paginate(number);
                                    }}
                                    href="#"
                                    className={
                                        currentPage === number
                                            ? "paginateActive3"
                                            : "paginateDesactive2"
                                    }
                                >
                                    {number}
                                </a>
                            ))}
                            <FontAwesomeIcon
                                className="cursor-pointer ml-2 text-blue-700"
                                icon={faAngleDoubleRight}
                                onClick={() => {
                                    currentPage * employeePerPage <
                                    totalEmployee
                                        ? paginateFront()
                                        : null;
                                }}
                            />
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
