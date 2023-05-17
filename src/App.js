import './App.css';
import {Routes, Route} from "react-router-dom";
import NavBar from "./Components/NavBar";
import ResultsScreen from "./Screen/ResultsScreen.js";
import AddMatchScreen from "./Screen/AddMatchScreen";
import MatchScreen from "./Screen/MatchScreen";
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <>
        <ToastContainer
            style={{top:'9vh', fontSize: "18px"}}
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            pauseOnHover
        />
        <NavBar/>
        <div className="App">
            <Routes>
                <Route path="/" element={<ResultsScreen/>}/>
                <Route path="/addMatch" element={<AddMatchScreen/>}/>
                <Route path="/match/:matchId" element={<MatchScreen/>}/>
            </Routes>
        </div>
    </>
  );
}

export default App;
