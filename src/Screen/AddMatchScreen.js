import * as React from "react";
import './UIcss/Screen.css'
import SaveMatchButton from "../Components/SaveMatchButton";
import AddMatchButton from "../Components/AddMatchButton";
import Match from "../Components/Match";

const AddMatchScreen = () => {
    return (
        <div className="container">
            <div className="header-container">
                <div className="title-container">
                    <h1 className="header-title">
                        Add Match
                    </h1>
                </div>
                <div className="button-container">
                    <SaveMatchButton/>
                </div>
            </div>
            <div className="match-container">

            </div>
            <div className="players-container">

            </div>
        </div>
    );
};

export default AddMatchScreen;