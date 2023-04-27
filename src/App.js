import './App.css';
import {Routes, Route} from "react-router-dom";
import NavBar from "./Components/NavBar";
import ResultsScreen from "./Screen/ResultsScreen.js";
import AddMatchScreen from "./Screen/AddMatchScreen";
import MatchScreen from "./Screen/MatchScreen";

function App() {
  return (
    <>
        <NavBar/>
        <div className="App">
            <Routes>
                <Route path="/" element={<ResultsScreen/>}/>
                <Route path="/addMatch" element={<AddMatchScreen/>}/>
                <Route path="/match" element={<MatchScreen/>}/>
            </Routes>
        </div>
    </>
  );
}

export default App;
