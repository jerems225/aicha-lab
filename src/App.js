import './App.css';
import { Route, Routes } from 'react-router-dom';
import Accueil from './Pages/Accueils/Accueil';
import MovieList from './Compoments/Movies/MoviesListe/MovieListe';
import About from './Pages/About/About';
import MoviePlayer from './Compoments/Movies/Movie/MoviePlayer/MoviePlayer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element= { <Accueil/>}></Route>
        <Route path='/MovieListe' element={<MovieList/>}></Route>
        <Route path="/movie/:movieId" element={<MoviePlayer />} />
        <Route path='/About' element={<About/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
