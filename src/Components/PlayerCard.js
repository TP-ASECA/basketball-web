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
    fixedRebounds,
    fixedFaults,
}) => {

    const [score, setScore] = useState()
    const [rebounds, setRebounds] = useState()
    const [faults, setFaults] = useState()

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
            <input id={id} className="score-input" type={"number"} onChange={(e) => setRebounds(e.target.value)}/>
            <input id={id} className="score-input" type={"number"} onChange={(e) => setFaults(e.target.value)}/>
        </div>
    );
};

export default PlayerCard;