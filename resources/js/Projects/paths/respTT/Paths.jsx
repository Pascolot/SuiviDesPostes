import React from "react";
import { Switch, Route } from "react-router-dom";
import Apropos from "../../pages/Apropos";
import Dashboard from "../../pages/Dashboard";
import Listes from "../../pages/respTT/listes/Listes";
import Parametres from "../../pages/Parametres";
import Corbeille from "../../pages/respTT/listes/Corbeille";
import Aides from "../../pages/Aides";
import CreateEmploye from "../../pages/respTT/listes/CreateEmploye";
import Language from "../../pages/Language";

const Paths = () => {
    return (
        <Switch>
            {/* ici se trouve le lien pour les differentes composants */}

            <Route exact path="/home" component={Dashboard} />
            <Route exact path="/liste" component={Listes} />
            <Route exact path="/create" component={CreateEmploye} />
            <Route exact path="/parametres" component={Parametres} />
            <Route exact path="/apropos" component={Apropos} />
            <Route exact path="/parametres_corbeille" component={Corbeille} />
            <Route exact path="/parametres_aides" component={Aides} />
            <Route exact path="/parametres_langage" component={Language} />
        </Switch>
    );
};

export default Paths;
