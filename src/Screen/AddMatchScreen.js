import * as React from "react";
import './UIcss/Screen.css'
import SaveMatchButton from "../Components/SaveMatchButton";
import PlayerCard from "../Components/PlayerCard"
import Lebron from "../assets/lebron.png"
import ClubDropDown from "../Components/ClubDropDown";

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
            <div className="">
                {/*drop down con los clubes que se traen desde el back y poder seleccionar uno y que aparezcan los jugadores de ese equipo*/}
                {/*y un input al lado para cada equipo para ingresar cuantos puntos hicieron*/}
                {/*<ClubDropDown/>*/}
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