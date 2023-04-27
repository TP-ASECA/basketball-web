import * as React from "react";
import './UIcss/Match.css'

const Team = (props) => {
    return (
        <>
            {
                props.isLocal ?
                    <div className="team-container">
                        <div className="club-logo-container">
                            <img className="club-logo" src={props.clubLogo}/>
                        </div>
                        <div className="club-name-container">
                            <h1 className="title">
                                 {props.clubName}
                            </h1>
                        </div>
                    </div>
                    :
                    <div className="team-container">
                        <div className="club-name-container">
                            <h1 className="title">
                                {props.clubName}
                            </h1>
                        </div>
                        <div className="club-logo-container">
                            <img className="club-logo" src={props.clubLogo}/>
                        </div>
                    </div>
            }
        </>
    );
};

export default Team;