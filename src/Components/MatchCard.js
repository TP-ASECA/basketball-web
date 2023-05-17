import * as React from "react";
import ClubCard from "./ClubCard";
import './UIcss/Match.css'
import {useNavigate} from "react-router-dom";

const MatchCard = ({match}) => {

    const navigate = useNavigate();
    const homeTeam = match.homeTeamPlayersMatchStats[0]?.player?.team
    const awayTeam = match.awayTeamPlayersMatchStats[0]?.player?.team

    const navigateToMatchData = () => {
        if (match.id !== undefined && match.id !== ""){
            navigate('/match/' + match.id, {state: match})
        }
    }

    return (
        <div id={match.id} className="match-container" onClick={() => navigateToMatchData()}>
            <div className="local-club-container">
                <ClubCard clubLogo={homeTeam.imageURL} clubName={homeTeam.name} isLocal={true}/>
            </div>
            <div className="result-container">
                <label className="team-points">
                    {match.homeTeamPoints}  -  {match.awayTeamPoints}
                </label>
            </div>
            <div className="visit-club-container">
                <ClubCard clubLogo={awayTeam.imageURL} clubName={awayTeam.name} isLocal={false}/>
            </div>
        </div>
    );
};

export default MatchCard;