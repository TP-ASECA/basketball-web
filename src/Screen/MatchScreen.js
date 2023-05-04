import * as React from "react";
import './UIcss/Screen.css'
import {useNavigate, useParams} from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MatchCard from "../Components/MatchCard";
import {useEffect, useState} from "react";
import NbaLogo from "../assets/NbaLogo.png";
import PlayerCard from "../Components/PlayerCard";
import Lebron from "../assets/lebron.png";

const MatchScreen = () => {

    let params = useParams()
    const navigate = useNavigate()

    const [matchData, setMatchData] = useState(null)
    const [matchId, setMatchId] = useState("")

    // useEffect(()=>{
    //     get("/getMatch",{}).then(r => {
    //         setMatchData(r)
    //     })
    // },[])

    const localClubLogo = NbaLogo
    const visitClubLogo = NbaLogo
    const localClubName = "LA Lakers"
    const visitClubName = "Golden State Warriors"
    const localTeamPoints = "101"
    const visitTeamPoints = "95"

    useEffect(() => {
        return () => {
            if (params.matchId !== "" && params.matchId !== undefined){
                setMatchId(params.matchId)
            }
        };
    }, [params.matchId]);


    return (
        <div className="container">
            <div className="header-container">
                    <ArrowBackIcon onClick={() => navigate('/')} style={{fontSize:'32px', marginTop:'20px', marginBottom:'10px', cursor:'pointer'}}/>
            </div>
            <div className="match-container">
                <MatchCard
                    // matchId={matchId}
                    // localClubLogo={localClubLogo}
                    // visitClubLogo={visitClubLogo}
                    // localClubName={localClubName}
                    // visitClubName={visitClubName}
                    // localTeamPoints={localTeamPoints}
                    // visitTeamPoints={visitTeamPoints}
                />
            </div>
            <div className="teams-container">
                <div className="team-container">
                    <div className="players-container">
                        <PlayerCard
                            name={"Lebron James"}
                            photo={Lebron}
                        />
                        <label className="team-points">
                            2
                        </label>
                        <PlayerCard
                            isMvp
                            name={"Lebron James"}
                            photo={Lebron}
                        />
                        <label className="team-points">
                            2
                        </label>
                    </div>
                </div>
                <div className="team-container">
                    <div className="players-container">
                        <PlayerCard
                            name={"Lebron James"}
                            photo={Lebron}
                        />
                        <label className="team-points">
                            2
                        </label>
                        <PlayerCard
                            isMvp
                            name={"Lebron James"}
                            photo={Lebron}
                        />
                        <label className="team-points">
                            2
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatchScreen;