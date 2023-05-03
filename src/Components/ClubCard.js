import * as React from "react";
import './UIcss/Match.css'

const ClubCard = (props) => {
    return (
        <>
            {
                props.isLocal ?
                    <div className="club-container">
                        <div className="club-logo-container">
                            <img className="club-logo" src={props.clubLogo}/>
                        </div>
                        <div className="local-club-name-container">
                            <label className="title">
                                 {props.clubName}
                            </label>
                        </div>
                    </div>
                    :
                    <div className="club-container">
                        <div className="visit-club-name-container">
                            <label className="title">
                                {props.clubName}
                            </label>
                        </div>
                        <div className="club-logo-container">
                            <img className="club-logo" src={props.clubLogo}/>
                        </div>
                    </div>
            }
        </>
    );
};

export default ClubCard;