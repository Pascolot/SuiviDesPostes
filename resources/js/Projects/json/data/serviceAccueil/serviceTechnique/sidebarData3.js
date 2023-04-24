import {
    faAngleDown,
    faAngleRight,
    faDashboard,
    faFileText,
    faGear,
    faInfoCircle,
    faLanguage,
    faQuestionCircle,
    faTrash,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const sidebarData3 = [
    {
        dash_name: "Tableau de board",
        path: "/home",
        icon: <FontAwesomeIcon icon={faDashboard} />,
    },
    {
        dash_name: "Employés et Matériaux",
        path: "/employeMateriels",
        icon: <FontAwesomeIcon icon={faUsers} />,
    },
    {
        dash_name: "Compte rendu",
        path: "/compterendu",
        icon: <FontAwesomeIcon icon={faFileText} />,
    },

    {
        dash_name: "Paramètres",
        path: "/parametres",
        icon: <FontAwesomeIcon icon={faGear} />,
        iconOpened: <FontAwesomeIcon icon={faAngleDown} />,
        iconClosed: <FontAwesomeIcon icon={faAngleRight} />,
        submenu: [
            {
                subDash_name: "Langages",
                subPath: "/parametres_langage",
                icon: <FontAwesomeIcon icon={faLanguage} />,
            },
            {
                subDash_name: "Corbeille",
                subPath: "/parametres_corbeille",
                icon: <FontAwesomeIcon icon={faTrash} />,
            },
            {
                subDash_name: "Aides",
                subPath: "/parametres_aides",
                icon: <FontAwesomeIcon icon={faQuestionCircle} />,
            },
        ],
    },
    {
        dash_name: "À propos",
        path: "/apropos",
        icon: <FontAwesomeIcon icon={faInfoCircle} />,
    },
];
