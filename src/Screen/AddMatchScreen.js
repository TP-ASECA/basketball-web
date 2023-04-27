import * as React from "react";
import './UIcss/Results.css'
import SaveMatchButton from "../Components/SaveMatchButton";

const AddMatchScreen = () => {
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

export default AddMatchScreen;