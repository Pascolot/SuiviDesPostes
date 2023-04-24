import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Problems = () => {
    const [employee, setEmployee] = useState([]);
    const [materials, setMaterials] = useState([]);
    const [materials2, setMaterials2] = useState([]);
    const [loading, setLoading] = useState(false);
    const [description, setDescription] = useState("");
    const [t, i18n] = useTranslation("common");
    const [value, setValue] = useState({
        matricule: "",
        designation: "",
    });

    let history = useHistory();

    const { matricule, designation } = value;

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("problems", {
                ...value,
                description: description,
            })
            .then(() => {
                toast.success(t("success"));
                setTimeout(() => {
                    history.push("/compterendu");
                }, 3000);
            });
    };

    useEffect(() => {
        let isMounted = true;
        const fetchEmployee = async () => {
            if (isMounted) {
                setLoading(true);
            }
            const res = await axios.get("employeeListAll");
            if (isMounted) {
                setLoading(false);
                setEmployee(res.data);
            }
        };
        fetchEmployee();
    }, []);

    useEffect(() => {
        let isMounted = true;
        const fetchMaterials = async () => {
            if (isMounted) {
                setLoading(true);
            }
            const res = await axios.get("materialsList");
            if (isMounted) {
                setLoading(false);
                setMaterials(res.data);
            }
        };
        fetchMaterials();
    }, []);

    useEffect(() => {
        let isMounted = true;
        const fetchMaterials2 = async () => {
            if (isMounted) {
                setLoading(true);
            }
            const res = await axios.get("materialsList2");
            if (isMounted) {
                setLoading(false);
                setMaterials2(res.data);
            }
        };
        fetchMaterials2();
    }, []);

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

    if (loading) {
        return <h2 className="text-red-700">{t("loading")}</h2>;
    }

    return (
        <div>
            <ToastContainer />
            <div className="w-full max-h-screen flex justify-center items-center">
                <div className="contentPblm">
                    <h1 className="text-white mt-4 font-bold uppercase text-xl underline text-center">
                        {t("descr_pblm")}
                    </h1>
                    <form className="mt-4" onSubmit={handleSubmit}>
                        <div>
                            <label
                                className="w-4/5 ml-4 block dark:text-white"
                                htmlFor="matricule"
                            >
                                {t("num_mat_pblm")}
                            </label>
                            <input
                                className="mx-4 my-2 pl-1 rounded outline-none"
                                type="text"
                                name="matricule"
                                id="matricule"
                                autoComplete="off"
                                value={matricule}
                                onChange={(e) =>
                                    setValue({
                                        ...value,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                            />
                            <select onChange={handleSelect} name="matricule">
                                <option value="">Matricule</option>
                                {employee.map((item, index) => (
                                    <option key={index} value={item.Matricule}>
                                        {item.Matricule}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label
                                className="w-4/5 ml-4 block dark:text-white"
                                htmlFor="designation"
                            >
                                {t("design_mate")}
                            </label>
                            <input
                                onChange={(e) =>
                                    setValue({
                                        ...value,
                                        [e.target.name]: e.target.value,
                                    })
                                }
                                className="mx-4 my-2 pl-1 rounded outline-none"
                                type="text"
                                name="designation"
                                id="designation"
                                value={designation}
                                autoComplete="off"
                            />
                            <select
                                onChange={handleSelect}
                                className="w-32"
                                name="designation"
                            >
                                <option value="">{t("designation")}</option>
                                {materials.map((item, index) => (
                                    <option
                                        key={index}
                                        value={item.Designation}
                                    >
                                        {item.Designation}
                                    </option>
                                ))}

                                {materials2.map((item, index) => (
                                    <option
                                        key={index}
                                        value={item.Designation}
                                    >
                                        {item.Designation}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label
                                className="w-4/5 ml-4 block dark:text-white"
                                htmlFor="description"
                            >
                                {t("description")}
                            </label>
                            <textarea
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-4/5 mx-4 my-2 block pl-1"
                                name="description"
                                id="description"
                                cols="30"
                                rows="5"
                            ></textarea>
                        </div>

                        <div className="m-4">
                            <input
                                type="submit"
                                value={t("submit")}
                                className="btn2 cursor-pointer"
                            />
                        </div>
                    </form>
                </div>
            </div>
            <div className="m-4">
                <Link
                    className="text-blue-700 font-light underline cursor-pointer"
                    to="/compterendu"
                >
                    {t("back")}
                </Link>
            </div>
        </div>
    );
};

export default Problems;
