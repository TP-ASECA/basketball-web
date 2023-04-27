import * as React from "react";
import AddMatchButton from "../Components/AddMatchButton";
import './UIcss/Results.css'
import Match from "../Components/Match";
import NbaLogo from "../Utilities/NbaLogo.png"
import {useState} from "react";

const Results = () => {

    const localClubLogo = NbaLogo
    const visitClubLogo = NbaLogo
    const localClubName = "LA Lakers"
    const visitClubName = "Golden State Warriors"
    const localTeamPoints = "101"
    const visitTeamPoints = "95"

    return (
        <div className="container">
            <div className="header-container">
                <div className="title-container">
                    <h1 className="header-title">
                        Last Matches
                    </h1>
                </div>
                <div></div>
                <div className="button-container">
                    <AddMatchButton/>
                </div>
            </div>
            <div className="results-container">
                <Match
                    localClubLogo={localClubLogo}
                    visitClubLogo={visitClubLogo}
                    localClubName={localClubName}
                    visitClubName={visitClubName}
                    localTeamResult={localTeamPoints}
                    visitTeamResult={visitTeamPoints}
                />

            </div>
        </div>
    );
};

export default Results;