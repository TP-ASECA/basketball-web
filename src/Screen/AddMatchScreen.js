import * as React from "react";
import './UIcss/Screen.css'
import SaveMatchButton from "../Components/SaveMatchButton";
import PlayerCard from "../Components/PlayerCard"
import Lebron from "../assets/lebron.png"
import {useEffect, useState} from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import {get} from "../utilis/https";

const AddMatchScreen = () => {

    const [clubsData, setClubsData] = useState([])
    const [homeClubData, setHomeClubData] = useState(null)
    const [awayClubData, setAwayClubData] = useState(null)
    const [homePlayersData,setHomePlayersData] = useState(null)
    const [awayPlayersData,setAwayPlayersData] = useState(null)

    console.log(homePlayersData)
    console.log(awayPlayersData)
    console.log(homeClubData)
    console.log(awayClubData)

    const getClubs = async () => {
        const response = await get(
            "team",
            {}
        );
        return response;
    };

    const getHomePlayers = async () => {
        const response = await get(
            "player?teamId=" + homeClubData.id,
            {}
        );
        return response;
    }

    const getAwayPlayers = async () => {
        const response = await get(
            "player?teamId=" + awayClubData.id,
            {}
        );
        return response;
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
                    <SaveMatchButton/>
                </div>
            </div>
            <div className="add-results-and-clubs-container">
                <div className="autocomplete-container">
                    <Autocomplete
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
                    <input className="result-input"/>
                    <input className='result-input'/>
                </div>
                <div className="autocomplete-container">
                    <Autocomplete
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
                        <PlayerCard 
                            name={"Lebron James"}
                            photo={Lebron}
                        />
                        <input className="player-score-input" type={"number"}/>
                        <PlayerCard 
                            isMvp
                            name={"Lebron James"}
                            photo={Lebron}
                        />
                        <input className="player-score-input" type={"number"}/>
                    </div>
                </div>
                <div className="team-container">
                    <div className="players-container">
                        <PlayerCard 
                            name={"Lebron James"}
                            photo={Lebron}
                        />
                        <input className="player-score-input" type={"number"}/>
                        <PlayerCard 
                            isMvp
                            name={"Lebron James"}
                            photo={Lebron}
                        />
                        <input className="player-score-input" type={"number"}/>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default AddMatchScreen;