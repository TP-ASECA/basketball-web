import * as React from "react";
import './UIcss/AddMatchButton.css'

const SaveMatchButton = ({onClick}) => {
    return (
        <button className='add-match-button' id="saveMatchButton" onClick={onClick}>Save Match</button>
    );
};

export default SaveMatchButton;