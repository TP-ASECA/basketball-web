import './App.css';
import NavBar from "./Components/NavBar";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Results from "./Screen/Results.js";
import AddMatchScreen from "./Screen/AddMatchScreen";
import Match from "./Components/Match";

function App() {
  return (
    <>
        <NavBar/>

        <Results></Results>

        {/*<AddMatchScreen></AddMatchScreen>*/}

        {/*<div className="App">*/}
        {/*    <BrowserRouter>*/}
        {/*        <Routes>*/}
        {/*            <Route exact path="/results-matches" element={Results} />*/}
        {/*            <Route path="/match" element={AddMatchScreen}/>*/}
        {/*        </Routes>*/}
        {/*    </BrowserRouter>*/}
        {/*</div>*/}

    </>
  );
}

export default App;
