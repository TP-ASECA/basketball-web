import * as React from "react";
import './UIcss/Player.css'

const Result = (props) => {
    return (
        <div className="points-container">
            <div className="team-points-container">
                <h2 className="team-points">
                    {/*{props.localTeamPoints}*/}
                    95
                </h2>
            </div>
            <div className="guion">
                <h1> - </h1>
            </div>
            <div className="team-points-container">
                <h2 className="team-points">
                    {/*{props.visitTeamPoints}*/}
                    101
                </h2>
            </div>
        </div>
    );
};

export default Result;