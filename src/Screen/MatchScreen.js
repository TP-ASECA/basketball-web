import * as React from "react";
import './UIcss/Screen.css'
import {useLocation, useNavigate} from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MatchCard from "../Components/MatchCard";
import PlayerCard from "../Components/PlayerCard";

const MatchScreen = () => {

    const navigate = useNavigate()
    const {state: match} = useLocation()
    console.log(match)

    return (
        <div className="container">
            <div className="header-container">
                    <ArrowBackIcon onClick={() => navigate('/')} style={{fontSize:'32px', marginTop:'20px', marginBottom:'10px', cursor:'pointer'}}/>
            </div>
            <div className="match-container">
                <MatchCard
                   match={match}
                />
            </div>
            <div className="teams-container">
                <div className="team-container">
                    <div className="players-container">
                        {match.homeTeamPlayersMatchStats?.map(playerStats => {
                            return(
                                <PlayerCard
                                    key={playerStats.playerId}
                                    isMvp={match.mvp.id === playerStats.playerId}
                                    id={playerStats.playerId}
                                    name={playerStats.player.name}
                                    number={playerStats.player.number}
                                    fixedScore={playerStats.points}
                                />
                            )
                        })}
                    </div>
                </div>
                <div className="team-container">
                    <div className="players-container">
                        {match.awayTeamPlayersMatchStats?.map(playerStats => {
                            return(
                                <PlayerCard
                                    key={playerStats.playerId}
                                    isMvp={match.mvp.id === playerStats.playerId}
                                    id={playerStats.playerId}
                                    name={playerStats.player.name}
                                    number={playerStats.player.number}
                                    fixedScore={playerStats.points}
                                    isAwayTeam
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatchScreen;