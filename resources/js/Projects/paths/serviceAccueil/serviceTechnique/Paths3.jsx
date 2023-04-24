import React from "react";
import { Switch, Route } from "react-router-dom";
import Aides from "../../../pages/Aides";
import Apropos from "../../../pages/Apropos";
import Corbeille3 from "../../../pages/serviceAccueil/Corbeille3";
import Dashboard from "../../../pages/Dashboard";
import Parametres from "../../../pages/Parametres";
import EmployeMateriel2 from "../../../pages/serviceAccueil/EmployeMateriel";
import CompteRendu from "../../../pages/serviceAccueil/CompteRendu";
import Problems from "../../../pages/serviceAccueil/Problems";
import Language from "../../../pages/Language";

const Paths3 = () => {
    return (
        <Switch>
            {/* ici se trouve le lien pour les differentes composants */}

            <Route exact path="/home" component={Dashboard} />
            <Route exact path="/compterendu" component={CompteRendu} />
            <Route
                exact
                path="/employeMateriels"
                component={EmployeMateriel2}
            />
            <Route exact path="/parametres" component={Parametres} />
            <Route exact path="/apropos" component={Apropos} />
            <Route exact path="/parametres_corbeille" component={Corbeille3} />
            <Route exact path="/parametres_aides" component={Aides} />
            <Route exact path="/problems" component={Problems} />
            <Route exact path="/parametres_langage" component={Language} />
        </Switch>
    );
};

export default Paths3;
