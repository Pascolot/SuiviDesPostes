import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import UseComponent from "../../../forms/serviceTechnique/formthreeUtil/UseComponent";
import SousFormModal from "./SousFormModal";

const FormModal = ({
    matricule,
    nomUC,
    nomECR,
    nomOND,
    nb_Alim,
    id1,
    id2,
    id3,
    id4,
    id5,
    id6,
    id7,
    id8,
    t,
}) => {
    const [valueRef, setValueRef] = useState(null);
    const [valueRef1, setValueRef1] = useState(null);
    const [valueRef2, setValueRef2] = useState(null);

    const ref = useRef();
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();

    const [value, setValue] = useState({
        uc: "",
        ecr1: "",
        ecr2: "",
        ond: "",
    });
    const [input, setInput] = useState({
        N_UC: nomUC,
        N_ECR1: nomECR.slice(0, 8),
        N_ECR2: nomECR.slice(9, 17),
        N_OND: nomOND,
    });
    const { uc, ecr1, ecr2, ond } = input;

    const inputChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value }); // ...json
    };

    const handleSelect = (ev) => {
        const event = ev.target.options;
        for (let i = 0; i < event.length; i++) {
            if (event[i].selected) {
                setValue({ ...value, [ev.target.name]: event[i].value });
                if (event[i].value == "Marque") {
                    alert("marque n'est pas une valeur");
                    setValue("");
                }
            }
        }
    };

    const {
        getSend: getSend,
        send: send,
        double: double1,
        getDouble: getDouble1,
        getDoubl: getDoubl1,
    } = UseComponent();

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            setValueRef(ref.current.textContent);
            setValueRef1(ref1.current.textContent);
            setValueRef2(ref2.current.textContent);
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        let reference = ref3.current.textContent;
        getSend();
        axios.post("updateListMaterials", {
            UC: valueRef,
            ECR: valueRef1,
            OND: valueRef2,
            ...input,
            ...value,
            reference,
            id1,
            id2,
            id3,
        });
    };

    return (
        <form
            className="w-full flex flex-col justify-center items-center"
            onSubmit={handleSubmit}
        >
            <p
                className="text-gray-500 font-bold text-lg text-center"
                ref={ref3}
            >
                {matricule}
            </p>
            <div className="mt-2">
                <label ref={ref} className="labelForm2" htmlFor="UC">
                    {t("uc")}
                </label>
                <input
                    className="inputForm2"
                    name="N_UC"
                    autoComplete="off"
                    onChange={inputChange}
                    value={uc}
                    type="text"
                    id="UC"
                    placeholder="Unite centrale"
                    defaultValue={nomUC}
                />
                <select name="uc" onChange={handleSelect} className="ml-2">
                    <option value={t("mark")}>{t("mark")}</option>
                    <option value="Fitsuju">Fitsuju</option>
                    <option value="Hp">Hp</option>
                    <option value="Gigabyte">Gigabyte</option>
                    <option value="Dell">Dell</option>
                    <option value="Acer">Acer</option>
                </select>
            </div>
            <div className="mt-2">
                <label className="labelForm2">
                    <span ref={ref1}>{t("screen")}</span>{" "}
                    <span onClick={getDoubl1} className="cursor-pointer ml-4">
                        Simple
                    </span>{" "}
                    {"/"}
                    <span onClick={getDouble1} className="cursor-pointer">
                        Double
                    </span>
                </label>
                <input
                    className="inputForm2"
                    type="text"
                    autoComplete="off"
                    name="N_ECR1"
                    onChange={inputChange}
                    value={ecr1}
                    //   nizarainay ilay nom an'ilay ecran nitambra mba anavahana ny ecr1 sy ecr2
                    defaultValue={nomECR.slice(0, 8)}
                    placeholder="Ecran 1"
                />
                <select name="ecr1" onChange={handleSelect} className="ml-2">
                    <option value={t("mark")}>{t("mark")}</option>
                    <option value="Fitsuju">Fitsuju</option>
                    <option value="Hp">Hp</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Dell">Dell</option>
                    <option value="Lg">Lg</option>
                    <option value="Acer">Acer</option>
                </select>
                <div
                    className={`${double1 ? "flex flex-wrap mt-4" : "hidden"}`}
                >
                    {/* Mila amboarina ilay no nom ecran double */}
                    <input
                        className="inputForm2"
                        autoComplete="off"
                        type="text"
                        name="N_ECR2"
                        onChange={inputChange}
                        value={ecr2}
                        defaultValue={nomECR.slice(9, 17)}
                        placeholder="Ecran 2"
                    />
                    <select
                        name="ecr2"
                        className="ml-2"
                        onChange={handleSelect}
                    >
                        <option value={t("mark")}>{t("mark")}</option>
                        <option value="Fitsuju">Fitsuju</option>
                        <option value="Hp">Hp</option>
                        <option value="Samsung">Samsung</option>
                        <option value="Dell">Dell</option>
                        <option value="Lg">Lg</option>
                        <option value="Acer">Acer</option>
                    </select>
                </div>
            </div>
            <div className="mt-2">
                <label
                    ref={ref2}
                    className="flex ml-1.5 mb-1 font-medium text-sm text-gray-700"
                    htmlFor="OND"
                >
                    {t("invert")}
                </label>
                <input
                    autoComplete="off"
                    name="N_OND"
                    type="text"
                    className="inputForm2 ml-2"
                    onChange={inputChange}
                    value={ond}
                    defaultValue={nomOND}
                    id="OND"
                    placeholder="Onduleur"
                />
                <select name="ond" onChange={handleSelect} className="ml-2">
                    <option value={t("mark")}>{t("mark")}</option>
                    <option value="Pronlink">Pronlink</option>
                    <option value="Eaton">Eaton</option>
                    <option value="Tecnoware">Tecnoware</option>
                </select>
            </div>
            <SousFormModal
                nb_Alim={nb_Alim}
                getSend={getSend}
                double={double1}
                send={send}
                id4={id4}
                id5={id5}
                id6={id6}
                id7={id7}
                id8={id8}
                t={t}
            />
            <div className="mt-2 w-full flex justify-end">
                <input
                    className="btn2 m-4 cursor-pointer"
                    type="submit"
                    value={t("save")}
                />
            </div>
        </form>
    );
};

export default FormModal;
