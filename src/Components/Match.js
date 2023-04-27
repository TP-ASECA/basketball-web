import * as React from "react";
import Team from "./Team";
import Result from "./Result";
import './UIcss/Match.css'

const Match = (props) => {
    return (
        <div className="match-container">
            <div className="local-team-container">
                <Team clubLogo={props.localClubLogo} clubName={props.localClubName} isLocal={true}/>
            </div>
            <div className="result-container">
                <Result localTeamPoints={props.localTeamPoints} visitTeamPoints={props.visitTeamPoints}/>
            </div>
            <div className="visit-team-container">
                <Team clubLogo={props.visitClubLogo} clubName={props.visitClubName} isLocal={false}/>
            </div>
        </div>
    );
};

export default Match;