import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const TableRapport = ({ data, show, hide, t }) => {
    const [datas, setDatas] = useState([]);
    const [datas2, setDatas2] = useState([]);
    const [valueDate, setValueDate] = useState(null);
    const [etat, setEtat] = useState(null);
    let ladate = new Date();

    let history = useHistory();

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

    const handleChange = (e) => {
        if (
            e.target.value === "Fonctionnel" ||
            e.target.value === "Functional"
        ) {
            setEtat(e.target.value);
            hide();
        } else {
            setEtat(e.target.value);
            show();
        }
    };

    const sending = () => {
        if(etat == null){
            alert("Vous devez choisir l'état des materiéls")
            return;
        }
        if(valueDate == null){
            alert("Vous devez ajouter une date")
            return;
        }
        axios
            .post("updateEmployeeMateriels", {
                etat: etat,
                date: valueDate,
                idEmployee: data.Matricule,
            })
            .then(() => {
                toast.success(t("added"));
                setTimeout(() => {
                    history.push("/home");
                }, 2000);
            });
    };

    return (
        <>
            <table className="w-full max-w-full">
                <thead>
                    <tr className="text-lg h-10 text-slate-500 uppercase bg-main-bg border-b-2 border-gray-500">
                        <th
                            className="bordering dark:text-slate-700"
                            colSpan="3"
                        >
                            {t("owners")}
                        </th>
                        <th
                            className="bordering dark:text-slate-700"
                            colSpan="4"
                        >
                            {t("materials")}
                        </th>
                        <th
                            className="bordering dark:text-slate-700"
                            colSpan="2"
                        >
                            {t("about")}
                        </th>
                    </tr>
                    <tr className="font-semibold text-slate-100 bg-slate-400 border-b-2 border-gray-500">
                        <th className="bordering">{t("num_mat")}</th>
                        <th className="bordering">{t("first_name")}</th>
                        <th className="bordering">{t("gender")}</th>
                        <th className="bordering">{t("uc")}</th>
                        <th className="bordering">{t("screen")}</th>
                        <th className="bordering">{t("invert")}</th>
                        <th className="bordering">{t("tools")}</th>
                        <th className="bordering">{t("state")}</th>
                        <th className="bordering">{t("date")}</th>
                    </tr>
                </thead>
                <tbody className="text-slate-700 text-center">
                    <tr className="table-row">
                        <td className="bordering">{data.Matricule}</td>
                        <td className="bordering">{data.Prenom}</td>
                        <td className="bordering">{data.Genre}</td>
                        {datas.map((data, index) => (
                            <td className="bordering" key={index}>
                                <span>{index === 0 && data.Nom}</span>
                                <span>{index === 1 && data.Nom}</span>
                                <span>{index === 2 && data.Nom}</span>
                            </td>
                        ))}
                        <td className="bordering">
                            {datas2.map((data, index) => (
                                <div key={index}>
                                    <p>{data.Designation}</p>
                                </div>
                            ))}
                        </td>

                        <td className="bordering">
                            <form className=" mx-4">
                                <div className="flex justify-between">
                                    <p>
                                        <span>{t("fonction")}</span>
                                    </p>
                                    <div className="ml-4 py-0.5">
                                        <input
                                            className="cursor-pointer"
                                            disabled={
                                                data.rapport === 1
                                                    ? true
                                                    : false
                                            }
                                            onChange={handleChange}
                                            type="radio"
                                            value={t("fonction")}
                                            name="etat"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p>
                                        <span> {t("fonction_no")}</span>
                                    </p>
                                    <div>
                                        <input
                                            className="cursor-pointer"
                                            disabled={
                                                data.rapport === 1
                                                    ? true
                                                    : false
                                            }
                                            onChange={handleChange}
                                            type="radio"
                                            value={t("fonction_no")}
                                            name="etat"
                                        />
                                    </div>
                                </div>
                            </form>
                        </td>
                        <td className="bordering">
                            <form>
                                <input
                                    onChange={(e) =>
                                        setValueDate(e.target.value)
                                    }
                                    disabled={data.rapport === 1 ? true : false}
                                    className="dark:text-gray-500 focus:outline-none rounded focus:border-2 focus:border-blue-500 cursor-pointer"
                                    type="date"
                                    min="2020-05-01"
                                    max={
                                        ladate.getFullYear() +
                                        "-" +
                                        (ladate.getMonth() + 1 > 10
                                            ? ladate.getMonth() + 1
                                            : "0" + (ladate.getMonth() + 1)) +
                                        "-" +
                                        (ladate.getDate() > 10
                                            ? ladate.getDate()
                                            : "0" + ladate.getDate())
                                    }
                                    name="date"
                                    id="date"
                                />
                            </form>
                        </td>
                    </tr>
                </tbody>
                <tfoot className="table-row-group">
                    <tr className="font-semibold text-slate-100 bg-slate-400 border-t-2 border-gray-500">
                        <th className="bordering">{t("num_mat")}</th>
                        <th className="bordering">{t("first_name")}</th>
                        <th className="bordering">{t("gender")}</th>
                        <th className="bordering">{t("uc")}</th>
                        <th className="bordering">{t("screen")}</th>
                        <th className="bordering">{t("invert")}</th>
                        <th className="bordering">{t("tools")}</th>
                        <th className="bordering">{t("state")}</th>
                        <th className="bordering">{t("date")}</th>
                    </tr>
                </tfoot>
            </table>
            <div className="w-full mt-2 flex justify-end">
                <button className="btn2 cursor-pointer" onClick={sending}>
                    {t("save")}
                </button>
            </div>
        </>
    );
};

export default TableRapport;
