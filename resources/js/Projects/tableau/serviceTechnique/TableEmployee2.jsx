import axios from "axios";
import React, { useEffect, useState } from "react";
import Button2 from "./button/Button2";

const TableEmployee2 = ({ data }) => {
    const [datas, setDatas] = useState([]);
    const [datas2, setDatas2] = useState([]);

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

    return (
        <>
            <tr className="bg-slate-200 even:bg-slate-500 even:text-white text-slate-700">
                <td>{data.Matricule}</td>
                <td>{data.Prenom}</td>
                <td>{data.Genre}</td>
                <td>{data.Poste_occupe}</td>
                <td>
                    {datas.map((data, index) => (
                        <span key={index}>{index === 0 && data.Nom} </span>
                    ))}
                </td>

                <td>
                    {datas.map((data, index) => (
                        <span key={index}>{index === 1 && data.Nom}</span>
                    ))}
                </td>

                <td>
                    {datas.map((data, index) => (
                        <span key={index}>{index === 2 && data.Nom}</span>
                    ))}
                </td>

                <td>
                    {datas2.map((data, index) => (
                        <div key={index}>
                            <span>{data.Designation}</span>
                        </div>
                    ))}
                </td>

                <td>
                    <Button2 Matricule={data.Matricule} />
                </td>
            </tr>
        </>
    );
};

export default TableEmployee2;
