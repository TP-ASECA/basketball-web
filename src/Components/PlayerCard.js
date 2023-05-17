import * as React from "react";
import './UIcss/Player.css'
import StarIcon from '@mui/icons-material/Star';
import {useEffect, useState} from "react";

const PlayerCard = ({
    id,
    name,
    isMvp,
    onScoreChange,
    isAwayTeam,
    onMvpClick,
    fixedScore,
}) => {
    const [score, setScore] = useState()

    useEffect(() => {
        onScoreChange && onScoreChange({playerId: id, points: score})
    }, [score])

    return (
        <div className="player-data-container" style={{flexDirection: isAwayTeam ? "row-reverse" : "row"}}>
            {
                isMvp ? <StarIcon style={{fill: "gold"}} /> : <StarIcon style={{fill: "grey"}} id={id+"-Star"} onClick={onMvpClick}/>
            }
            <h3 className="player-name">
                {name}
            </h3>
            <input id={id} className="score-input" type={"number"} onChange={(e) => setScore(e.target.value)} value={fixedScore ? fixedScore : score} disabled={!!fixedScore}/>
        </div>
    );
};

export default PlayerCard;