import * as React from "react";
import AddMatchButton from "../Components/AddMatchButton";
import './UIcss/LastMatches.css'

const LastMatches = () => {
    return (
        <div className="container">
            <div className="title-container">
                <h1 className="title">Last Matches</h1>
            </div>
            <div></div>
            <div className="button-container">
                <AddMatchButton/>
            </div>
        </div>
    );
};

export default LastMatches;