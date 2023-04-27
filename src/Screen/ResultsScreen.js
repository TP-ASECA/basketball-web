import * as React from "react";
import AddMatchButton from "../Components/AddMatchButton";
import './UIcss/Screen.css'
import Match from "../Components/Match";
import NbaLogo from "../Utilities/NbaLogo.png"
import InfiniteScroll from "react-infinite-scroll-component";
import {useState} from "react";

const ResultsScreen = () => {

    const [matchData, setMatchData] = useState(null);

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
                <div className="button-container">
                    <AddMatchButton/>
                </div>
            </div>
            <div className="results-container">
                <InfiniteScroll dataLength={6}>
                    <Match
                        localClubLogo={localClubLogo}
                        visitClubLogo={visitClubLogo}
                        localClubName={localClubName}
                        visitClubName={visitClubName}
                        localTeamResult={localTeamPoints}
                        visitTeamResult={visitTeamPoints}
                    />
                </InfiniteScroll>
            </div>
        </div>
    );
};

export default ResultsScreen;