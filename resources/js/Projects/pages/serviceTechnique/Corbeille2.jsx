import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SousCorbeille2 from "./SousCorbeille2";

const Corbeille2 = () => {
    const [data, setData] = useState([]);
    const [t, i18n] = useTranslation("common");

    useEffect(() => {
        axios.get("corbeille2").then((resp) => {
            setData(resp.data);
        });
    }, []);

    return (
        <>
            <div className="flex flex-wrap justify-around items-center">
                <h1
                    className={`text-center ${
                        data.length === 0 ? "block" : "hidden"
                    }`}
                >
                    {t("empty")}
                </h1>
                {data.map((item, index) => (
                    <SousCorbeille2
                        t={t}
                        item={item}
                        index={index}
                        key={index}
                    />
                ))}
            </div>
        </>
    );
};

export default Corbeille2;
