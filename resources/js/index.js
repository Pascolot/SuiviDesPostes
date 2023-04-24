import React from "react";
import ReactDOM from "react-dom";
import Layout from "./Projects/layouts/respTT/Layout";
import Layout2 from "./Projects/layouts/serviceTechnique/Layout2";
import Layout3 from "./Projects/layouts/serviceAccueil/Layout3";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import fr from "./Projects/traduction/json/fr/fr.json";
import en from "./Projects/traduction/json/en/en.json";

i18next.init({
    interpolation: { escapeValue: false }, // React already does escaping
    lng: localStorage.lang === "Fr" ? "fr" : "en", // teny ampiasaina
    resources: {
        fr: {
            common: fr, // ireo karazana teny izay atao anaty common
        },
        en: {
            common: en,
        },
    },
});

if (document.getElementById("app")) {
    const element = document.getElementById("app");
    ReactDOM.render(
        <React.StrictMode>
            <I18nextProvider i18n={i18next}>
                <Layout />
            </I18nextProvider>
        </React.StrictMode>,
        element
    );
}

if (document.getElementById("app2")) {
    const element = document.getElementById("app2");
    ReactDOM.render(
        <React.StrictMode>
            <I18nextProvider i18n={i18next}>
                <Layout2 />
            </I18nextProvider>
        </React.StrictMode>,
        element
    );
}

if (document.getElementById("app3")) {
    const element = document.getElementById("app3");
    ReactDOM.render(
        <React.StrictMode>
            <I18nextProvider i18n={i18next}>
                <Layout3 />
            </I18nextProvider>
        </React.StrictMode>,
        element
    );
}
