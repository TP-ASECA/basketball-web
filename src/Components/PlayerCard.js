import * as React from "react";
import './UIcss/Player.css'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const PlayerCard = ({
    name,
    photo,
    isMvp,
    score,
}) => {
    console.log(name)
    return (
        <div className="player-data-container">
            {
                isMvp ? <StarIcon style={{fill: "gold"}}/> : <StarIcon style={{fill: "grey"}}/>
            }
            <div className="player-photo">
                <img src={photo} />
            </div>
            <h3 className="player-name">
                {name}
            </h3>
        </div>
    );
};

export default PlayerCard;