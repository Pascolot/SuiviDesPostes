import React from "react";
import { Switch, Route } from "react-router-dom";
import Apropos from "../../pages/Apropos";
import Dashboard from "../../pages/Dashboard";
import Parametres from "../../pages/Parametres";
import Corbeille2 from "../../pages/serviceTechnique/Corbeille2";
import Aides from "../../pages/Aides";
import Materiel from "../../pages/serviceTechnique/Materiel";
import EmployeMateriel from "../../pages/serviceTechnique/EmployeMateriel";
import Language from "../../pages/Language";

const Paths2 = () => {
    return (
        <Switch>
            {/* ici se trouve le lien pour les differentes composants */}

            <Route exact path="/home" component={Dashboard} />
            <Route exact path="/materiel" component={Materiel} />
            <Route exact path="/employeMateriels" component={EmployeMateriel} />
            <Route exact path="/parametres" component={Parametres} />
            <Route exact path="/apropos" component={Apropos} />
            <Route exact path="/parametres_corbeille" component={Corbeille2} />
            <Route exact path="/parametres_aides" component={Aides} />
            <Route exact path="/parametres_langage" component={Language} />
        </Switch>
    );
};

export default Paths2;
