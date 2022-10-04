import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Composant/Navbar';
import Movie from './Composant/Movie';
import OnePiece from './Composant/One piece.jpg';
import Naruto from './Composant/naruto.jpg';
import Bleach from './Composant/bleach.jpg';
import Hunter from './Composant/hunter.jpg';
import DragonBall from './Composant/dragonball.jpg';
import Boruto from './Composant/boruto.jpg';
import Titans from './Composant/titans.jpg';
import Baki from './Composant/baki.jpg';

function App() {
  let film = [
    {title : 'One Peace', photo : OnePiece},
    {title : 'Naruto' , photo : Naruto},
    {title : 'Bleach', photo : Bleach},
    {title : 'Hunter', photo : Hunter},
    {title : 'Dragon ball Z', photo : DragonBall},
    {title : 'Boruto', photo : Boruto},
    {title : 'Attaque des Titans', photo : Titans},
    {title : 'Baki', photo : Baki}
];
  return (
    <div className="App">
      
        <Navbar/>
        <div className ="manga">
          {
        film.map(element => (
        <Movie item = {element}/>
        )) }
        </div>

    </div>
  );
}

export default App;
