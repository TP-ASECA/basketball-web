import './App.css';
import NavBar from "./Components/NavBar";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LastMatches from "./Screen/LastMatches";
import Match from "./Screen/Match";

function App() {
  return (
    <>
        <NavBar/>

        <LastMatches></LastMatches>

        {/*<Match></Match>*/}

        {/*<div className="App">*/}
        {/*    <BrowserRouter>*/}
        {/*        <Routes>*/}
        {/*            <Route exact path="/last-matches" element={LastMatches} />*/}
        {/*            <Route path="/match" element={Match}/>*/}
        {/*        </Routes>*/}
        {/*    </BrowserRouter>*/}
        {/*</div>*/}

    </>
  );
}

export default App;
