import * as React from "react";
import AddMatchButton from "../Components/AddMatchButton";
import './UIcss/Screen.css'
import MatchCard from "../Components/MatchCard";
import NbaLogo from "../assets/NbaLogo.png"
import {useEffect, useState} from "react";
import {get} from "../utilis/https";
import {useLocation} from "react-router-dom";

const ResultsScreen = () => {

    const [matchesCardsData, setMatchesCardsData] = useState([]);

    useEffect(()=>{
        get("match",{}).then(r => {
            console.log(r.content)
            setMatchesCardsData(r.content)
        })
    },[])


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
                {
                    matchesCardsData.length ?
                    matchesCardsData.map(m => (
                        <MatchCard
                            match={m}
                        />)
                    ):
                        <label className="team-points">
                            NO MATCHES
                        </label>
                }
            </div>
        </div>
    );
};

export default ResultsScreen;