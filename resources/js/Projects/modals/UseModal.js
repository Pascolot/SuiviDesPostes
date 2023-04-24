import { useState } from "react";

export default function UseModal() {
    const [isShowing, setIsShowing] = useState(false);
    const [isShowing1, setIsShowing1] = useState(false);
    const [isShowing2, setIsShowing2] = useState(false);
    const [isShowing3, setIsShowing3] = useState(false);

    const toggle = () => {
        setIsShowing(!isShowing);
    };
    const toggle1 = () => {
        setIsShowing1(!isShowing1);
    };
    const toggle2 = () => {
        setIsShowing2(!isShowing2);
    };
    const toggle3 = () => {
        setIsShowing3(!isShowing3);
    };

    return {
        isShowing,
        isShowing1,
        isShowing2,
        isShowing3,
        toggle,
        toggle1,
        toggle2,
        toggle3,
    };
}
