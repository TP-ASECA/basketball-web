import * as React from "react";
import './UIcss/Player.css'
import MVPstar from "./MVPstar";

const Player = (props) => {
    return (
        <div className="player-data-container">
            <MVPstar isMvp={props.isMvp}></MVPstar>
            <img className="player-photo">
                {/*{props.playerPhoto}*/}
            </img>
            <h3 className="player-name">
                {/*{props.playerName}*/}
            </h3>
        </div>
    );
};

export default Player;