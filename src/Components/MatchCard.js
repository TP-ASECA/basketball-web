import * as React from "react";
import ClubCard from "./ClubCard";
import './UIcss/Match.css'

const MatchCard = (props) => {
    return (
        <div className="match-container">
            <div className="local-club-container">
                <ClubCard clubLogo={props.localClubLogo} clubName={props.localClubName} isLocal={true}/>
            </div>
            <div className="result-container">
                <label className="team-points">
                    {props.localTeamPoints}  -  {props.visitTeamPoints}
                </label>
            </div>
            <div className="visit-club-container">
                <ClubCard clubLogo={props.visitClubLogo} clubName={props.visitClubName} isLocal={false}/>
            </div>
        </div>
    );
};

export default MatchCard;