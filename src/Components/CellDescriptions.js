import StarIcon from "@mui/icons-material/Star";
import * as React from "react";
import './UIcss/CellDescriptions.css'
const CellDescriptions = ({isAwayTeam}) => {
    return(
        <div className={"cell-descriptions-container"} style={{flexDirection: isAwayTeam ? "row-reverse" : "row"}}>
            <h4 className={"cell-title"}>Rebounds</h4>
            <h4 className={"cell-title"}>Faults</h4>
            <h4 className={"cell-title"}>Score</h4>
        </div>
    )
}

export default CellDescriptions

