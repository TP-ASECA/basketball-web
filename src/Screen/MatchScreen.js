import * as React from "react";
import './UIcss/Screen.css'
import {useLocation, useNavigate} from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MatchCard from "../Components/MatchCard";
import PlayerCard from "../Components/PlayerCard";
import CellDescriptions from "../Components/CellDescriptions";

const MatchScreen = () => {

    const navigate = useNavigate()
    const {state: match} = useLocation()

    console.log(match)

    return (
        <div className="container">
            <div className="header-container">
                    <ArrowBackIcon onClick={() => navigate('/')} id="arrowId" style={{fontSize:'32px', marginTop:'20px', marginBottom:'10px', cursor:'pointer'}}/>
            </div>
            <div className="match-container">
                <MatchCard
                   match={match}
                />
            </div>
            <div className="teams-container">
                <div className="team-container">
                    <div className="players-container">
                        <CellDescriptions />
                        {match.homeTeamPlayersMatchStats?.map(playerStats => {
                            return(
                                <PlayerCard
                                    key={playerStats.playerId}
                                    isMvp={match.mvp.id === playerStats.playerId}
                                    id={playerStats.playerId}
                                    name={playerStats.player.name}
                                    number={playerStats.player.number}
                                    fixedScore={playerStats.points}
                                    fixedRebounds={playerStats.rebounds}
                                    fixedFaults={playerStats.faults}
                                />
                            )
                        })}
                    </div>
                </div>
                <div className="team-container">
                    <div className="players-container">
                        <CellDescriptions isAwayTeam/>
                        {match.awayTeamPlayersMatchStats?.map(playerStats => {
                            return(
                                <PlayerCard
                                    key={playerStats.playerId}
                                    isMvp={match.mvp.id === playerStats.playerId}
                                    id={playerStats.playerId}
                                    name={playerStats.player.name}
                                    number={playerStats.player.number}
                                    fixedScore={playerStats.points}
                                    fixedFaults={playerStats.faults}
                                    fixedRebounds={playerStats.rebounds}
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