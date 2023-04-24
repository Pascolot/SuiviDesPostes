import axios from "axios";
import React, { useEffect, useState } from "react";

const InnerCorbeille = ({ matricule, t }) => {
    const [datas, setDatas] = useState([]);
    const [datas2, setDatas2] = useState([]);

    useEffect(() => {
        const fetchEmployeeMaterials = async () => {
            let idMaterials = matricule;
            const res2 = await axios.get(
                "employeeMaterialsList/" + idMaterials
            );
            setDatas(res2.data);
        };
        fetchEmployeeMaterials();
    }, [matricule]);

    useEffect(() => {
        const fetchEmployeeMaterials = async () => {
            let idMateriels = matricule;
            const res3 = await axios.get(
                "employeeMaterielsList/" + idMateriels
            );
            setDatas2(res3.data);
        };
        fetchEmployeeMaterials();
    }, [matricule]);

    return (
        <div>
            <div className="m-2">
                {datas.map((data, index) => (
                    <div key={index}>
                        <span className="text-gray-700">
                            {(index === 0 && t("uc") + " : ") ||
                                (index === 1 && t("screen") + " : ") ||
                                (index === 2 && t("invert") + " : ")}
                        </span>
                        <span>{data.Nom}</span>
                        <span className="ml-4 text-blue-700">
                            {t("mark") + " : "}
                        </span>
                        <span>{data.Marque}</span>
                    </div>
                ))}
            </div>
            <div className="m-2">
                {datas2.map((data, index) => (
                    <div key={index}>
                        <span className="text-gray-700">
                            {data.Designation}
                        </span>
                        <span className="ml-4 text-blue-700">
                            {index === 2
                                ? t("operator") + " : "
                                : t("mark") + " : "}
                        </span>
                        <span>{data.Marque}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InnerCorbeille;
