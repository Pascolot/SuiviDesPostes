import axios from "axios";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { UsersMenu } from "../json/data/UsersMenu";

const Dropdown = () => {
    let history = useHistory();
    const [t, i18n] = useTranslation("common");

    const handleClick = (index) => {
        if (index === 3) {
            axios.post("logout").then(() => {
                setTimeout(() => {
                    history.push("/login");
                    location.reload();
                }, 1000);
            });
        }
    };

    return (
        <div>
            {UsersMenu.map((menu, index) => (
                <div
                    onClick={() => handleClick(index)}
                    className={`flex ${
                        index === 3 && "text-red-700 dark:text-blue-700"
                    } $items-center text-gray-700 w-full hover:bg-blue-600 hover:rounded hover:bg-opacity-50 py-3 px-3`}
                    key={index}
                >
                    <span>{menu.icon}</span>
                    <span className="ml-2">
                        {i18n.language === "en"
                            ? index === 1
                                ? "Settings"
                                : null || index === 3
                                ? "Log out"
                                : menu.content
                            : menu.content}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Dropdown;
