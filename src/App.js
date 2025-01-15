import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Accueil from './Pages/Accueils/Accueil';
import MovieListe from './Compoments/Movies/MoviesListe/MovieListe';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element= { <Accueil/>}></Route>
        <Route path='/MovieListe' element={<MovieListe/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
