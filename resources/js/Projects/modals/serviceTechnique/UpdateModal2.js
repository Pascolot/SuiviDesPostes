import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import FormModal from "./modalForms/FormModal";

export default function UpdateModal2({ toggle1, id, isShowingNow1, t }) {
    const [datas, setDatas] = useState([]);
    const [datas2, setDatas2] = useState([]);
    const [irefs, setIrefs] = useState(null);
    const [irefs1, setIrefs1] = useState(null);
    const [irefs2, setIrefs2] = useState(null);
    const [irefs3, setIrefs3] = useState(null);
    const [irefs4, setIrefs4] = useState(null);
    const [irefs5, setIrefs5] = useState(null);
    const [irefs6, setIrefs6] = useState(null);
    const [irefs7, setIrefs7] = useState(null);
    const [irefs8, setIrefs8] = useState(null);
    const [irefs9, setIrefs9] = useState(null);
    const [irefs10, setIrefs10] = useState(null);
    const [iref11, setIrefs11] = useState(null);

    const refs = useRef();
    const refs1 = useRef();
    const refs2 = useRef();
    const refs3 = useRef();
    const refs4 = useRef();
    const refs5 = useRef();
    const refs6 = useRef();
    const refs7 = useRef();
    const refs8 = useRef();
    const refs9 = useRef();
    const refs10 = useRef();
    const refs11 = useRef();

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            setIrefs(refs.current?.textContent);
            setIrefs1(refs1.current?.textContent);
            setIrefs2(refs2.current?.textContent);
            setIrefs3(refs3.current?.textContent);
            setIrefs4(refs4.current?.textContent);
            setIrefs5(refs5.current?.textContent);
        }

        return () => {
            isMounted = false;
        };
    }, [datas]);

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            setIrefs6(refs6.current?.textContent);
            setIrefs7(refs7.current?.textContent);
            setIrefs8(refs8.current?.textContent);
            setIrefs9(refs9.current?.textContent);
            setIrefs10(refs10.current?.textContent);
            setIrefs11(refs11.current?.textContent);
        }

        return () => {
            isMounted = false;
        };
    }, [datas2]);

    useEffect(() => {
        let isMounted = true;

        const fetchEmployeeMaterials = async () => {
            let idMaterials = id;
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
    }, [id]);

    useEffect(() => {
        let isMounted = true;

        const fetchEmployeeMaterials = async () => {
            let idMateriels = id;
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
    }, [id]);

    return (
        <div>
            <div
                className={`fixed ${
                    isShowingNow1 ? "left-0" : "left-full"
                } duration-500 bg-zinc-500 bg-opacity-80 inset-0 z-50 w-screen h-screen flex justify-center items-center`}
            >
                <div
                    id={"Modal"}
                    className="w-96 max-w-lg bg-white shadow-md bg-opacity-90 shadow-gray-700 border-2 border-sky-500 rounded-2xl"
                >
                    <div className="flex justify-between items-center mx-4 my-2">
                        <h1 className="font-bold uppercase text-2xl text-gray-500">
                            {t("updating")}
                        </h1>
                        <button
                            title={t("close")}
                            className="buttonModal"
                            onClick={toggle1}
                        >
                            <span className="closeModal">×</span>
                        </button>
                    </div>
                    <hr className="border-gray-700 mx-4 border-opacity-20" />
                    <div className="text-gray-500 text-lg">
                        {isShowingNow1 && (
                            <FormModal
                                matricule={id}
                                nomUC={irefs}
                                nomECR={irefs1}
                                nomOND={irefs2}
                                nb_Alim={irefs6}
                                id1={irefs3}
                                id2={irefs4}
                                id3={irefs5}
                                id4={irefs7}
                                id5={irefs8}
                                id6={irefs9}
                                id7={irefs10}
                                id8={iref11}
                                t={t}
                            />
                        )}
                        <div className="hidden" ref={refs}>
                            {datas.map((item, index) => (
                                <span key={index}>
                                    {index === 0 && item.Nom}
                                </span>
                            ))}
                        </div>
                        <div className="hidden" ref={refs1}>
                            {datas.map((item, index) => (
                                <span key={index}>
                                    {index === 1 && item.Nom}
                                </span>
                            ))}
                        </div>
                        <div className="hidden" ref={refs2}>
                            {datas.map((item, index) => (
                                <span key={index}>
                                    {index === 2 && item.Nom}
                                </span>
                            ))}
                        </div>
                        <div className="hidden" ref={refs3}>
                            {datas.map((item, index) => (
                                <span key={index}>
                                    {index === 0 && item.id}
                                </span>
                            ))}
                        </div>
                        <div className="hidden" ref={refs4}>
                            {datas.map((item, index) => (
                                <span key={index}>
                                    {index === 1 && item.id}
                                </span>
                            ))}
                        </div>
                        <div className="hidden" ref={refs5}>
                            {datas.map((item, index) => (
                                <span key={index}>
                                    {index === 2 && item.id}
                                </span>
                            ))}
                        </div>
                        <div className="hidden" ref={refs6}>
                            {datas2.map((item, index) => (
                                <span key={index}>
                                    {index === 5 && item.Nombre}
                                </span>
                            ))}
                        </div>
                        <div className="hidden" ref={refs7}>
                            {datas2.map((item, index) => (
                                <span key={index}>
                                    {index === 0 && item.id}
                                </span>
                            ))}
                        </div>
                        <div className="hidden" ref={refs8}>
                            {datas2.map((item, index) => (
                                <span key={index}>
                                    {index === 1 && item.id}
                                </span>
                            ))}
                        </div>
                        <div className="hidden" ref={refs9}>
                            {datas2.map((item, index) => (
                                <span key={index}>
                                    {index === 2 && item.id}
                                </span>
                            ))}
                        </div>
                        <div className="hidden" ref={refs10}>
                            {datas2.map((item, index) => (
                                <span key={index}>
                                    {index === 4 && item.id}
                                </span>
                            ))}
                        </div>
                        <div className="hidden" ref={refs11}>
                            {datas2.map((item, index) => (
                                <span key={index}>
                                    {index === 5 && item.id}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
