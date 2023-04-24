import {
    faExclamationCircle,
    faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import Moment from "react-moment";
import Popover from "../popover/Popover";

const TableOrigin = ({ data, t }) => {
    const [datas, setDatas] = useState([]);
    const [datas2, setDatas2] = useState([]);
    const [look, setLook] = useState(false);

    const dropRef = useRef(null);

    document.onmousedown = (e) => {
        if (!dropRef.current.contains(e.target)) {
            setLook(false);
        }
    };

    useEffect(() => {
        let isMounted = true;
        const fetchEmployeeMaterials = async () => {
            let idMaterials = data.Matricule;
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
    }, [data.Matricule]);

    useEffect(() => {
        let isMounted = true;
        const fetchEmployeeMaterials = async () => {
            let idMateriels = data.Matricule;
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
    }, [data.Matricule]);

    const showPopover = () => {
        setLook(!look);
    };

    return (
        <>
            <tr className="table-row oddEven">
                <td className="px-3 text-sm">{data.Matricule}</td>
                <td className="px-3 text-sm">{data.Prenom}</td>
                <td className="px-3 text-sm">{data.Genre}</td>
                {datas.map((data, index) => (
                    <td className="px-3 text-sm" key={index}>
                        <span>{index === 0 && data.Nom}</span>
                        <span>{index === 1 && data.Nom}</span>
                        <span>{index === 2 && data.Nom}</span>
                    </td>
                ))}
                <td className="px-3 text-sm">
                    {datas2.map((data, index) => (
                        <div key={index}>
                            <p>{data.Designation}</p>
                        </div>
                    ))}
                </td>

                <td className="px-3 text-sm" ref={dropRef}>
                    {datas.map((data, index) => (
                        <div className="text-center" key={index}>
                            <div>
                                {index === 0
                                    ? data.Etat === "Aucun"
                                        ? t("none")
                                        : data.Etat
                                    : null}
                            </div>
                            <div>
                                {(index === 0 && data.Etat === "Fonctionnel") ||
                                (index === 0 && data.Etat === "Functional") ? (
                                    <FontAwesomeIcon
                                        className="text-green-700 text-lg cursor-pointer"
                                        icon={faCheckCircle}
                                    />
                                ) : null}
                            </div>
                            <div className="relative" onClick={showPopover}>
                                {(index === 0 &&
                                    data.Etat === "Non Fonctionnel") ||
                                (index === 0 &&
                                    data.Etat === "No Functional") ? (
                                    <FontAwesomeIcon
                                        className="text-red-700 text-lg cursor-pointer"
                                        icon={faExclamationCircle}
                                    />
                                ) : null}
                                {index === 0 ? (
                                    <Popover
                                        look={look}
                                        matricule={data.employees_Matricule}
                                    />
                                ) : null}
                            </div>
                        </div>
                    ))}
                </td>
                <td className="px-3 text-sm">
                    <div
                        className={`${data.rapport === 0 ? "block" : "hidden"}`}
                    >
                        {t("none")}
                    </div>
                    <div className={`${data.rapport === 0 && "hidden"}`}>
                        {datas.map((data, index) => (
                            <div className="text-center" key={index}>
                                {index === 0 ? (
                                    <Moment
                                        format="DD/MM/YYYY"
                                        date={data.Date_d_obtention}
                                    />
                                ) : null}
                            </div>
                        ))}
                    </div>
                </td>
            </tr>
        </>
    );
};

export default TableOrigin;
