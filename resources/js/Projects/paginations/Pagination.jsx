import React from "react";

export default function Pagination({
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
        <div className="flex flex-wrap w-full justify-between items-center gap-x-3">
            <div>
                <p className="text-sm text-gray-700 dark:text-white">
                    {t("Showing")}
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
            <nav className="block">
                <ul className="flex pl-0 rounded list-none">
                    <li>
                        <div className="border border-gray-500 rounded-md">
                            <button
                                className="text-gray-700 border-r border-gray-500 px-2 py-2 text-sm font-medium dark:text-white"
                                onClick={() => {
                                    currentPage * employeePerPage -
                                        employeePerPage <=
                                    0
                                        ? null
                                        : paginateBack();
                                }}
                            >
                                {t("previous")}
                            </button>
                            {pageNumbers.map((number) => (
                                <a
                                    key={number}
                                    onClick={() => {
                                        paginate(number);
                                    }}
                                    href="#"
                                    className={
                                        currentPage === number
                                            ? "text-white bg-blue-700 border-r border-r-gray-500 relative inline-flex items-center px-4 py-2 text-sm font-medium"
                                            : "text-blue-700 border-r border-gray-500 relative inline-flex items-center px-4 py-2 text-sm font-medium"
                                    }
                                >
                                    {number}
                                </a>
                            ))}
                            <button
                                className="text-gray-700 px-4 py-2 text-sm font-medium dark:text-white"
                                onClick={() => {
                                    currentPage * employeePerPage <
                                    totalEmployee
                                        ? paginateFront()
                                        : null;
                                }}
                            >
                                {t("next")}
                            </button>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
