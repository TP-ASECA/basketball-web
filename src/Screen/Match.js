import * as React from "react";
import './UIcss/LastMatches.css'
import AddMatchButton from "../Components/AddMatchButton";
import SaveMatchButton from "../Components/SaveMatchButton";

const Match = (props) => {  //aca le paso la prop de si esta viendo los datos del partido o si estas creando uno y dependiendo de eso depende como se ve la misma pagina
    return (
        <div className="container">
            <div className="title-container">
                <h1 className="title">Add Match</h1>
            </div>
            <div></div>
            <div className="button-container">
                <SaveMatchButton/>
            </div>
        </div>
    );
};

export default Match;