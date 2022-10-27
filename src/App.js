import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import MovieCard from './Composant/MovieCard';
import MovieList from './Composant/MovieList';
import Filtre from './Composant/Filtre';
import DetailsFilm from './Composant/DetailsFilm'
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Filtre/>
          <Routes>
            <Route path='/' element = {<MovieList/>}/>
            <Route path='/movieCard' element = {<MovieCard/>}/>
            <Route path='/detailsFilm/:id' element = {<DetailsFilm/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;
