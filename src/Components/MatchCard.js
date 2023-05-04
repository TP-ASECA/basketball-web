import * as React from "react";
import ClubCard from "./ClubCard";
import './UIcss/Match.css'
import {useNavigate} from "react-router-dom";

const MatchCard = (props) => {

    const navigate = useNavigate()

    const navigateToMatchData = () => {
        if (props.matchId !== undefined && props.matchId !== ""){
            navigate('/match/' + props.matchId)
        }
    }

    return (
        <div className="match-container" onClick={() => navigateToMatchData()}>
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