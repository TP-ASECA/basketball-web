import * as React from "react";
import './UIcss/Screen.css'
import {useLocation, useNavigate, useParams} from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MatchCard from "../Components/MatchCard";
import {useEffect, useState} from "react";
import NbaLogo from "../assets/NbaLogo.png";
import PlayerCard from "../Components/PlayerCard";
import Lebron from "../assets/lebron.png";

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
                        <PlayerCard
                            name={"Lebron James"}
                            photo={Lebron}
                        />
                        <label className="team-points">
                            2
                        </label>
                        <PlayerCard
                            isMvp
                            name={"Lebron James"}
                            photo={Lebron}
                        />
                        <label className="team-points">
                            2
                        </label>
                    </div>
                </div>
                <div className="team-container">
                    <div className="players-container">
                        <PlayerCard
                            name={"Lebron James"}
                            photo={Lebron}
                        />
                        <label className="team-points">
                            2
                        </label>
                        <PlayerCard
                            isMvp
                            name={"Lebron James"}
                            photo={Lebron}
                        />
                        <label className="team-points">
                            2
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatchScreen;