import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

const SousFormModal = ({
    getSend,
    double,
    send,
    nb_Alim,
    id4,
    id5,
    id6,
    id7,
    id8,
    t,
}) => {
    const [value, setValue] = useState(nb_Alim);
    const [value2, setValue2] = useState(null);
    const [value3, setValue3] = useState(null);
    const [value4, setValue4] = useState(null);
    const [value5, setValue5] = useState(null);
    const [value6, setValue6] = useState({
        M_souris: "",
        M_clavier: "",
        M_prise: "",
        M_box_wifi: "",
    });
    const [value7, setValue7] = useState(null);
    const [value8, setValue8] = useState(null);

    const ref = useRef();
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();

    useEffect(() => {
        setValue2(ref.current.textContent);
        setValue3(ref1.current.textContent);
        setValue4(ref2.current.textContent);
        setValue5(ref3.current.textContent);
        setValue8(ref5.current.textContent);
    }, []);

    useEffect(() => {
        setValue7(ref4.current?.textContent);
    }, [double]);

    const handleSelect = (ev) => {
        const event = ev.target.options;
        for (let i = 0; i < event.length; i++) {
            if (event[i].selected) {
                setValue6({ ...value6, [ev.target.name]: event[i].value });
                if (event[i].value == "Marque") {
                    alert("marque n'est pas une valeur");
                    setValue6("");
                }
            }
        }
    };

    useEffect(() => {
        if (send) {
            axios
                .post("updateListMaterials2", {
                    Nb_alim: value,
                    Souris: value2,
                    Clavier: value3,
                    Prise: value4,
                    Alim: value5,
                    Cable: value7,
                    Box_wifi: value8,
                    ...value6,
                    id4,
                    id5,
                    id6,
                    id7,
                    id8,
                })
                .then(() => {
                    getSend();
                    toast.warning(t("updating_materials"));
                    setTimeout(() => {
                        location.reload();
                    }, 3000);
                });
        }
    }, [send]);

    return (
        <div>
            <h1 className="flex underline mt-2 text-gray-500">{t("tools")}</h1>

            <div className="flex flex-wrap items-center justify-around mt-3">
                <div>
                    <label
                        ref={ref}
                        className="font-medium py-1 text-sm text-gray-700"
                    >
                        {t("mouse")}{" "}
                    </label>

                    <select
                        name="M_souris"
                        onChange={handleSelect}
                        className="ml-2"
                    >
                        <option value={t("mark")}>{t("mark")}</option>
                        <option value="Logitech">Logitech</option>
                        <option value="Corsair">Corsair</option>
                        <option value="Pronlink">Pronlink</option>
                        <option value="Hp">Hp</option>
                    </select>
                </div>
                <div>
                    <label
                        ref={ref1}
                        className="ml-4 font-medium py-1 text-sm text-gray-700"
                    >
                        {t("keyboard")}{" "}
                    </label>

                    <select
                        name="M_clavier"
                        onChange={handleSelect}
                        className="ml-2"
                    >
                        <option value={t("mark")}>{t("mark")}</option>
                        <option value="Logitech">Logitech</option>
                        <option value="Corsair">Corsair</option>
                        <option value="Pronlink">Pronlink</option>
                        <option value="Hp">Hp</option>
                    </select>
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-between mt-3">
                <div>
                    <label
                        ref={ref4}
                        className=" font-medium py-1 text-sm text-gray-700"
                    >
                        {double ? (
                            <span>{t("cable_vga-dvi")}</span>
                        ) : (
                            <span>{t("cable_vga")}</span>
                        )}
                    </label>
                </div>
                <div>
                    <label
                        ref={ref5}
                        className=" font-medium py-1 text-sm text-gray-700"
                    >
                        Box wifi
                    </label>
                    <select
                        name="M_box_wifi"
                        className="ml-2"
                        onChange={handleSelect}
                    >
                        <option value="Operateur">{t("operator")}</option>
                        <option value="Telma">Telma</option>
                        <option value="Orange">Orange</option>
                        <option value="Airtel">Airtel</option>
                        <option value="Blueline">Blueline</option>
                    </select>
                </div>
            </div>
            <div className="flex flex-col mt-3 items-start">
                <div className={`${!double && "mb-2"}`}>
                    <label
                        ref={ref2}
                        className="font-medium py-1 text-sm text-gray-700"
                    >
                        {t("multiple")}{" "}
                    </label>
                </div>
                <div>
                    <label
                        ref={ref3}
                        className="font-medium py-1 text-sm text-gray-700"
                    >
                        {t("cable_alim")}
                    </label>

                    <input
                        onChange={(e) => setValue(e.target.value)}
                        className="w-20 ml-2 pl-1 outline-none"
                        type="number"
                        value={value}
                        min="2"
                        max="6"
                        step="1"
                    />
                </div>
            </div>
        </div>
    );
};

export default SousFormModal;
