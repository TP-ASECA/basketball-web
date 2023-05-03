import * as React from "react";
import './UIcss/Screen.css'
import SaveMatchButton from "../Components/SaveMatchButton";
import AddMatchButton from "../Components/AddMatchButton";
import Match from "../Components/Match";
import PlayerCard from "../Components/PlayerCard"
import Lebron from "../assets/lebron.png"
import { Input } from "@mui/base";

const AddMatchScreen = () => {
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
            <div className="match-container">

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
                        <PlayerCard 
                            name={"Lebron James"}
                            photo={Lebron}
                        />
                        <input className="player-score-input" type={"number"}/>
                        <PlayerCard 
                            name={"Lebron James"}
                            photo={Lebron}
                        />
                        <input className="player-score-input" type={"number"}/>
                        <PlayerCard 
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
                        <PlayerCard 
                            name={"Lebron James"}
                            photo={Lebron}
                        />
                        <input className="player-score-input" type={"number"}/>
                        <PlayerCard 
                            name={"Lebron James"}
                            photo={Lebron}
                        />
                        <input className="player-score-input" type={"number"}/>
                        <PlayerCard 
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