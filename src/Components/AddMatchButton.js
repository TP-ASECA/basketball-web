import * as React from "react";
import './UIcss/AddMatchButton.css'

const AddMatchButton = () => {
    return (
        <a href="/match">
            <button className='add-match-button'>+ Load Match</button>
        </a>
    );
};

export default AddMatchButton;