import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import SousFormThree from "./formthreeUtil/SousFormThree";
import UseComponent from "./formthreeUtil/UseComponent";

const FormThree = ({ matricule, t }) => {
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
        N_UC: "",
        N_ECR1: "",
        N_ECR2: "",
        N_OND: "",
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

        return () => {
            isMounted = false;
        };
    }, []);

    const handleSubmit = (ev) => {
        ev.preventDefault();

        let reference = ref3.current.textContent;
        getSend();
        axios.post("listMaterials", {
            UC: valueRef,
            ECR: valueRef1,
            OND: valueRef2,
            ...input,
            ...value,
            reference,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="m-2">
            <div className="w-full flex justify-center items-center">
                <p className="badge2" ref={ref3}>
                    {matricule}
                </p>
            </div>
            <div className="mt-2">
                <label
                    ref={ref}
                    className="block font-medium py-1 text-sm text-gray-700"
                    htmlFor="UC"
                >
                    {t("uc")}{" "}
                </label>
                <input
                    className="pl-1 outline-none rounded duration-500 focus:ring-2 focus:ring-blue-500"
                    name="N_UC"
                    autoComplete="off"
                    onChange={inputChange}
                    value={uc}
                    type="text"
                    id="UC"
                    maxLength="7"
                    required
                    pattern="^[01](?:[ _.-]?(\d{1})){3}-UC$"
                    placeholder="Unite centrale"
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
                <label className="block font-medium py-1 text-sm text-gray-700">
                    <span ref={ref1}>{t("screen")}</span>{" "}
                    <span
                        onClick={getDoubl1}
                        className="cursor-pointer ml-4 hover:text-blue-500"
                    >
                        Simple
                    </span>{" "}
                    {"/"}{" "}
                    <span
                        onClick={getDouble1}
                        className="cursor-pointer hover:text-blue-500"
                    >
                        Double
                    </span>
                </label>
                <input
                    className="pl-1 outline-none rounded duration-500 focus:ring-2 focus:ring-blue-500"
                    type="text"
                    autoComplete="off"
                    name="N_ECR1"
                    onChange={inputChange}
                    value={ecr1}
                    maxLength="8"
                    required
                    pattern="^[01](?:[ _.-]?(\d{1})){3}-ECR$"
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
                    <input
                         className={`pl-1 outline-none rounded ${double1 && "duration-500 focus:ring-2 focus:ring-blue-500"} `}
                        autoComplete="off"
                        type="text"
                        name="N_ECR2"
                        onChange={inputChange}
                        value={ecr2}
                        maxLength="8"
                        pattern="^[01](?:[ _.-]?(\d{1})){3}-ECR$"
                        required={double1 ? true : false}
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
                    className="block font-medium py-1 text-sm text-gray-700"
                    htmlFor="OND"
                >
                    {t("invert")}
                </label>
                <input
                    autoComplete="off"
                    name="N_OND"
                    type="text"
                    className="pl-1 outline-none rounded duration-500 focus:ring-2 focus:ring-blue-500"
                    onChange={inputChange}
                    value={ond}
                    maxLength="8"
                    required
                    pattern="^0(?:[ _.-]?(\d{1})){3}-OND$"
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
            <SousFormThree
                reference={ref3}
                double={double1}
                getSend={getSend}
                send={send}
            />
            <div className="mt-2">
                <input
                    className="btn2 m-4 cursor-pointer"
                    type="submit"
                    value={t("submit")}
                />
            </div>
        </form>
    );
};

export default FormThree;
