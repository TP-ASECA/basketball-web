import * as React from "react";
import './UIcss/AddMatchButton.css'
import {useNavigate} from "react-router-dom";

const AddMatchButton = () => {

    const navigate = useNavigate()

    return (
        <button className='add-match-button' id="addMatchButton" onClick={()=>{navigate('/addMatch')}}>+ Load Match</button>
    );
};

export default AddMatchButton;