import "./App.css";
import GetMovieDB from "./GetMovieDB";
import FilmPage from "./Components/FilmPage";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";


function App() {
    return (
        <>

        <div className="App">
      <div>
        <nav className="Nav">
              <Link to="/">Home</Link>
              <Link to="/saved">Saved</Link>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/film" element={<FilmPage/>}/>
          <Route path="/saved"element={""} />
          <Route path="/" element={<GetMovieDB/>} />
        </Routes>
      </div>
        </div>
        </>
    );
}

export default App;
