import axios from "axios";
import React, { useEffect, useState } from "react";

const Popover = ({ matricule, look }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        let isMounted = true;

        const Problems = async () => {
            axios.get("problems/" + matricule).then((resp) => {
                if (isMounted);
                {
                    setData(resp.data);
                }
            });
        };

        Problems();

        return () => {
            isMounted = false;
        };
    }, [matricule]);
    return (
        <div className={`absolute -mt-5 ${look ? "scale-100" : "scale-0"} popover`}>
            <div className="my-3">
                <h2 className="text-zinc-100 underline font-bold">
                    Description de(s) problème(s)
                </h2>
                {data.map((item, index) => (
                    <div key={index}>
                        <div>
                            <span className="underline font-semibold text-sky-500">
                                {item.Designation}
                            </span>
                        </div>
                        <p>
                            <span>{item.Description}</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Popover;
