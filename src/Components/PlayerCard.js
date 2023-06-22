import * as React from "react";
import './UIcss/Player.css'
import StarIcon from '@mui/icons-material/Star';
import {useEffect, useState} from "react";

const PlayerCard = ({
    id,
    name,
    isMvp,
    onStatChange,
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
        onStatChange && onStatChange({playerId: id, points: score, rebounds: rebounds, faults: faults})
    }, [score, rebounds, faults])

    return (
        <div className="player-data-container" style={{flexDirection: isAwayTeam ? "row-reverse" : "row"}}>
            {
                isMvp ? <StarIcon style={{fill: "gold"}} /> : <StarIcon style={{fill: "grey"}} id={id+"-Star"} onClick={onMvpClick}/>
            }
            <h3 className="player-name">
                {name}
            </h3>
            <div className={'inputs-container'} style={{flexDirection: isAwayTeam ? "row-reverse" : "row"}}>
                <input id={id} className="score-input-secondary" type={"number"} onChange={(e) => setRebounds(e.target.value)} value={fixedRebounds ? fixedRebounds : rebounds} disabled={!!fixedRebounds}/>
                <input id={id} className="score-input-secondary" type={"number"} onChange={(e) => setFaults(e.target.value)} value={fixedFaults ? fixedFaults : faults} disabled={!!fixedFaults}/>
                <input id={id} className="score-input" type={"number"} onChange={(e) => setScore(e.target.value)} value={fixedScore ? fixedScore : score} disabled={!!fixedScore}/>
            </div>
        </div>
    );
};

export default PlayerCard;