import axios from "axios";
import React, { useEffect, useState } from "react";

const FormFour = ({ matricule, t }) => {
    const [datas, setDatas] = useState([]);
    const [datas2, setDatas2] = useState([]);

    useEffect(() => {
        let isMounted = true;

        const fetchEmployeeMaterials = async () => {
            let isMounted = true;

            let idMaterials = matricule;
            const res2 = await axios.get(
                "employeeMaterialsList/" + idMaterials
            );
            if (isMounted) {
                setDatas(res2.data);
            }
        };
        fetchEmployeeMaterials();

        return () => {
            isMounted = false;
        };
    }, [matricule]);

    useEffect(() => {
        let isMounted = true;

        const fetchEmployeeMaterials = async () => {
            let idMateriels = matricule;
            const res3 = await axios.get(
                "employeeMaterielsList/" + idMateriels
            );
            if (isMounted) {
                setDatas2(res3.data);
            }
        };
        fetchEmployeeMaterials();

        return () => {
            isMounted = false;
        };
    }, [matricule]);

    return (
        <div className=" font-serif text-slate-100 dark:text-gray-500">
            {datas.map((data, index) => (
                <div key={index}>
                    <div className="m-2">
                        <p>
                            <span className="font-semibold dark:text-blue-500 text-slate-50">
                                {index === 0 && t("uc") + ": "}
                            </span>
                            <span className="text-gray-300 dark:text-slate-700">
                                {index === 0 && data.Nom}
                            </span>
                        </p>
                        <p>
                            <span className="font-semibold dark:text-blue-500 text-slate-50">
                                {index === 0 && t("mark") + ": "}
                            </span>
                            <span className="text-gray-300 dark:text-slate-700">
                                {index === 0 && data.Marque}
                            </span>
                        </p>
                        <p>
                            <span className="font-semibold dark:text-blue-500 text-slate-50">
                                {index === 0 && t("number")}
                            </span>
                            <span className="text-gray-300 dark:text-slate-700">
                                {index === 0 && data.Nombre}
                            </span>
                        </p>
                    </div>

                    <div className="m-2">
                        <p>
                            <span className="font-semibold dark:text-blue-500 text-slate-50">
                                {index === 1 && t("screen") + ": "}
                            </span>
                            <span className="text-gray-300 dark:text-slate-700">
                                {index === 1 && data.Nom}
                            </span>
                        </p>
                        <p>
                            <span className="font-semibold dark:text-blue-500 text-slate-50">
                                {index === 1 && t("mark") + ": "}
                            </span>
                            <span className="text-gray-300 dark:text-slate-700">
                                {index === 1 && data.Marque}
                            </span>
                        </p>
                        <p>
                            <span className="font-semibold dark:text-blue-500 text-slate-50">
                                {index === 1 && t("number")}
                            </span>
                            <span className="text-gray-300 dark:text-slate-700">
                                {index === 1 && data.Nombre}
                            </span>
                        </p>
                    </div>

                    <div className="m-2">
                        <p>
                            <span className="font-semibold dark:text-blue-500 text-slate-50">
                                {index === 2 && t("invert") + ": "}
                            </span>
                            <span className="text-gray-300 dark:text-slate-700">
                                {index === 2 && data.Nom}
                            </span>
                        </p>
                        <p>
                            <span className="font-semibold dark:text-blue-500 text-slate-50">
                                {index === 2 && t("mark") + ": "}
                            </span>
                            <span className="text-gray-300 dark:text-slate-700">
                                {index === 2 && data.Marque}
                            </span>
                        </p>
                        <p>
                            <span className="font-semibold dark:text-blue-500 text-slate-50">
                                {index === 2 && t("number")}
                            </span>
                            <span className="text-gray-300 dark:text-slate-700">
                                {index === 2 && data.Nombre}
                            </span>
                        </p>
                    </div>
                </div>
            ))}

            {datas2.map((data, index) => (
                <div className="m-2" key={index}>
                    <div className="flex">
                        <p>
                            <span className="font-semibold dark:text-blue-700 text-slate-300">
                                {index === 0 && data.Designation}
                            </span>
                        </p>
                        <p className="ml-2">
                            <span className="font-semibold dark:text-blue-500 text-slate-50">
                                {index === 0 && t("mark") + ": "}
                            </span>
                            <span className="text-gray-300 dark:text-slate-700">
                                {index === 0 && data.Marque}
                            </span>
                        </p>
                        <p className="ml-2">
                            <span className="font-semibold dark:text-blue-500 text-slate-50">
                                {index === 0 && t("number")}
                            </span>
                            <span className="text-gray-300 dark:text-slate-700">
                                {index === 0 && data.Nombre}
                            </span>
                        </p>
                    </div>

                    <div className="flex">
                        <p>
                            <span className="font-semibold dark:text-blue-700 text-slate-300">
                                {index === 1 && data.Designation}
                            </span>
                        </p>
                        <p className="ml-2">
                            <span className="font-semibold dark:text-blue-500 text-slate-50">
                                {index === 1 && t("mark") + ": "}
                            </span>
                            <span className="text-gray-300 dark:text-slate-700">
                                {index === 1 && data.Marque}
                            </span>
                        </p>
                        <p className="ml-2">
                            <span className="font-semibold dark:text-blue-500 text-slate-50">
                                {index === 1 && t("number")}
                            </span>
                            <span className="text-gray-300 dark:text-slate-700">
                                {index === 1 && data.Nombre}
                            </span>
                        </p>
                    </div>

                    <div className="flex">
                        <p>
                            <span className="font-semibold dark:text-blue-700 text-slate-300">
                                {index === 2 && data.Designation}
                            </span>
                        </p>
                        <p className="ml-2">
                            <span className="font-semibold dark:text-blue-500 text-slate-50">
                                {index === 2 && t("operator") + ": "}
                            </span>
                            <span className="text-gray-300 dark:text-slate-700">
                                {index === 2 && data.Marque}
                            </span>
                        </p>
                        <p className="ml-2">
                            <span className="font-semibold dark:text-blue-500 text-slate-50">
                                {index === 2 && t("number")}
                            </span>
                            <span className="text-gray-300 dark:text-slate-700">
                                {index === 2 && data.Nombre}
                            </span>
                        </p>
                    </div>

                    <div className="flex">
                        <p>
                            <span className="font-semibold dark:text-blue-700 text-slate-300">
                                {index === 3 && data.Designation}
                            </span>
                        </p>
                        <p className="ml-2">
                            <span className="font-semibold dark:text-blue-500 text-slate-50">
                                {index === 3 && t("number")}
                            </span>
                            <span className="text-gray-300 dark:text-slate-700">
                                {index === 3 && data.Nombre}
                            </span>
                        </p>
                    </div>
                    <div className="flex">
                        <p>
                            <span className="font-semibold dark:text-blue-700 text-slate-300">
                                {index === 4 && data.Designation}
                            </span>
                        </p>
                        <p className="ml-2">
                            <span className="font-semibold dark:text-blue-500 text-slate-50">
                                {index === 4 && t("number")}
                            </span>
                            <span className="text-gray-300 dark:text-slate-700">
                                {index === 4 && data.Nombre}
                            </span>
                        </p>
                    </div>

                    <div className="flex">
                        <p>
                            <span className="font-semibold dark:text-blue-700 text-slate-300">
                                {index === 5 && data.Designation}
                            </span>
                        </p>
                        <p className="ml-2">
                            <span className="font-semibold dark:text-blue-500 text-slate-50">
                                {index === 5 && t("number")}
                            </span>
                            <span className="text-gray-300 dark:text-slate-700">
                                {index === 5 && data.Nombre}
                            </span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FormFour;
