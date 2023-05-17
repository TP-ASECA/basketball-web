import * as React from "react";
import './UIcss/Screen.css'
import SaveMatchButton from "../Components/SaveMatchButton";
import PlayerCard from "../Components/PlayerCard"
import {useEffect, useState} from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import {get, post} from "../utilis/https";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {toast, ToastContainer} from "react-toastify";

const AddMatchScreen = () => {

    const [clubsData, setClubsData] = useState([])
    const [homeClubData, setHomeClubData] = useState(null)
    const [awayClubData, setAwayClubData] = useState(null)
    const [homePlayersData,setHomePlayersData] = useState(null)
    const [awayPlayersData,setAwayPlayersData] = useState(null)
    const [mvpId, setMvpId] = useState()
    const [date, setDate] = useState()

    const [homeTeamScores, setHomeTeamScores] = useState([])
    const [awayTeamScores, setAwayTeamScores] = useState([])

    useEffect(() => {
        setHomeTeamScores([])
    }, [homeClubData?.id])

    useEffect(() => {
        setAwayTeamScores([])
    }, [awayClubData?.id])
    const updateTeamScores = (newScore, teamScores) => {
        return teamScores?.filter(it => it.playerId !== newScore.playerId).concat(newScore);
    }

    const calculateTeamScore = (teamScores) => {
        return teamScores?.filter(it => !!it.points).map(it => it.points).reduce((prev, next) => Number(prev) + Number(next), 0) || 0
    }

    const getClubs = async () => {
        return await get(
            "team",
            {}
        );
    };

    const createMatch = async () => {
        await post(
            "match/add",
            {
                gameDate: date,
                homeTeamId: homeClubData.id,
                awayTeamId: awayClubData.id,
                homeTeamPlayersMatchStats: homeTeamScores.filter(it => !!it.points),
                awayTeamPlayersMatchStats: awayTeamScores.filter(it => !!it.points),
                mvpId: mvpId,
            }
        ).then(() => window.location.href = "/")
    }


    const getHomePlayers = async () => {
        return await get(
            "player?teamId=" + homeClubData.id,
            {}
        );
    }

    const getAwayPlayers = async () => {
        return await get(
            "player?teamId=" + awayClubData.id,
            {}
        );
    }

    useEffect(() => {
        return () => {
            getClubs().then(r => setClubsData(r.content))
        };
    }, []);

    useEffect(() => {
        if (homeClubData !== null){
            getHomePlayers().then(r => setHomePlayersData(r.content))
        }
    }, [homeClubData]);


    useEffect(() => {
        if (awayClubData !== null){
            getAwayPlayers().then(r => setAwayPlayersData(r.content))
        }
    }, [awayClubData]);

    const options = () => {
        if (clubsData !== []) {
            return (
                clubsData && clubsData.map((clubData) =>
                    (
                        { label: clubData.name , id: clubData.id }
                    ))
            );
        }
    }

    return (
        <div className="container">
            <div className="header-container">
                <div className="title-container">
                    <h1 className="header-title">
                        Add Match
                    </h1>
                </div>
                <div className="button-container">
                    <SaveMatchButton onClick={createMatch}/>
                </div>
            </div>
            <div style={{marginBottom: 20}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker className="date-picker" label={"Select match date"} onChange={setDate} value={date}/>
                </LocalizationProvider>
            </div>
            <div className="add-results-and-clubs-container">
                <div className="autocomplete-container">
                    <Autocomplete
                        className="HomeTeamSelect"
                        disablePortal
                        value={homeClubData}
                        id="combo-box-demo"
                        options={options()}
                        sx={{ width: "auto" }}
                        renderInput={(params) => <TextField {...params} label="Home Team"/>}
                        onChange={ (event, newValue) => {setHomeClubData(newValue);} }
                    />
                </div>
                <div className="input-results-container">
                    <input readOnly className="result-input" id="homeResult" value={calculateTeamScore(homeTeamScores)}/>
                    <input readOnly className='result-input' id="awayResult" value={calculateTeamScore(awayTeamScores)}/>
                </div>
                <div className="autocomplete-container">
                    <Autocomplete
                        className="AwayTeamSelect"
                        disablePortal
                        value={awayClubData}
                        id="combo-box-demo"
                        options={options()}
                        sx={{ width: 'auto' }}
                        renderInput={(params) => <TextField {...params} label="Away Team"/>}
                        onChange={ (event, newValue) => {setAwayClubData(newValue);} }
                    />
                </div>
            </div>
            <div className="teams-container">
                <div className="team-container">
                    <div className="players-container">
                        {homePlayersData?.map(player => {
                            return(
                                <PlayerCard
                                    key={player.id}
                                    onMvpClick={() => setMvpId(player.id)}
                                    isMvp={mvpId === player.id}
                                    id={player.id}
                                    name={player.name}
                                    number={player.number}
                                    onScoreChange={(newScore) => setHomeTeamScores(updateTeamScores(newScore, homeTeamScores))}
                                />
                        )
                        })}
                    </div>
                </div>
                <div className="team-container">
                    <div className="players-container">
                        {awayPlayersData?.map(player => {
                            return(
                                <PlayerCard
                                    key={player.id}
                                    onMvpClick={() => setMvpId(player.id)}
                                    isAwayTeam
                                    isMvp={mvpId === player.id}
                                    id={player.id}
                                    name={player.name}
                                    number={player.number}
                                    onScoreChange={(newScore) => setAwayTeamScores(updateTeamScores(newScore, awayTeamScores))}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default AddMatchScreen;