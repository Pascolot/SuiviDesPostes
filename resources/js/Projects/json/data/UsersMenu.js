import {
    faBellConcierge,
    faPowerOff,
    faWrench,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const UsersMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        content: "Profile",
    },
    {
        icon: <FontAwesomeIcon icon={faWrench} />,
        content: "Reglages",
    },
    {
        icon: <FontAwesomeIcon icon={faBellConcierge} />,
        content: "Notification",
    },
    {
        icon: <FontAwesomeIcon icon={faPowerOff} />,
        content: "Deconnexion",
    },
];
