import * as React from "react";
import AddMatchButton from "../Components/AddMatchButton";
import './UIcss/Screen.css'
import MatchCard from "../Components/MatchCard";
import NbaLogo from "../assets/NbaLogo.png"
import {useEffect, useState} from "react";
import {get} from "../utilis/https";

const ResultsScreen = () => {

    const [matchesCardsData, setMatchesCardsData] = useState([]);

    useEffect(()=>{
        get("match",{}).then(r => {
            setMatchesCardsData(r.data)
        })
    },[])

    const getMatchesCards = () => {
        if (matchesCardsData !== []) {
            return (
                matchesCardsData.map((matchCard) =>
                    (
                        <MatchCard
                            matchId={matchCard.id}
                            localClubLogo={matchCard.home}
                            visitClubLogo={visitClubLogo}
                            localClubName={localClubName}
                            visitClubName={visitClubName}
                            localTeamPoints={localTeamPoints}
                            visitTeamPoints={visitTeamPoints}
                        />
                    ))
            );
        }
    }

    const localClubLogo = NbaLogo
    const visitClubLogo = NbaLogo
    const localClubName = "LA Lakers"
    const visitClubName = "Golden State Warriors"
    const localTeamPoints = "101"
    const visitTeamPoints = "95"
    const matchId = "soyLakersVsGoldenStateWarriors"
    const matchId2 = "soyOtroId"

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
                <MatchCard
                    matchId={matchId}
                    localClubLogo={localClubLogo}
                    visitClubLogo={visitClubLogo}
                    localClubName={localClubName}
                    visitClubName={visitClubName}
                    localTeamPoints={localTeamPoints}
                    visitTeamPoints={visitTeamPoints}
                />
            </div>
        </div>
    );
};

export default ResultsScreen;