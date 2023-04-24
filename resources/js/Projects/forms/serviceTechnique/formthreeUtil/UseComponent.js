import { useState } from "react";

export default function UseComponent() {
    const [double, setDouble] = useState(false);
    const [hiddenForm, setHiddenform] = useState(false);
    const [send, setSend] = useState(false);

    const getDouble = () => {
        setDouble(true);
    };
    const getDoubl = () => {
        setDouble(false);
    };

    const getHiddenForm = () => {
        setHiddenform(true);
    };
    const getHiddenFormInv = () => {
        setHiddenform(false);
    };

    const getSend = () => {
        setSend(!send);
    };

    // const getSendInv = () => {
    //     setSend(false);
    // };
    return {
        hiddenForm,
        double,
        getHiddenForm,
        getHiddenFormInv,
        // getSendInv,
        send,
        getSend,
        getDouble,
        getDoubl,
    };
}
