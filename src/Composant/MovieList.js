import {useState} from 'react'
import OnePiece from '../Image/One piece.jpg';
import Naruto from '../Image/naruto.jpg';
import Bleach from '../Image/bleach.jpg';
import Hunter from '../Image/hunter.jpg';
import DragonBall from '../Image/dragonball.jpg';
import Boruto from '../Image/boruto.jpg';
import Titans from '../Image/titans.jpg';
import Baki from '../Image/baki.jpg';
import DemonSlayer from '../Image/demon slayer.jpg';
import SlamDunk from '../Image/slam dunk.jpg';
import React from 'react';
import MovieCard from './MovieCard';
const MovieList = () => {
    const [Film,setFilm] = useState([
        {title : 'One Peace', description : 'Il fut un temps où Gold Roger était le plus grand de tous les pirates, le "Roi des Pirates" était son surnom. A sa mort, son trésor d\'une valeur inestimable connu sous le nom de "One Piece" fut caché quelque part sur "Grand Line". De nombreux pirates sont partis à la recherche de ce trésor mais tous sont morts avant même de l\'atteindre. Monkey D. Luffy rêve de retrouver ce trésor légendaire et de devenir le nouveau "Roi des Pirates". Après avoir mangé un fruit du démon, il possède un pouvoir lui permettant de réaliser son rêve. Il lui faut maintenant trouver un équipage pour partir à l\'aventure !', rate : 9, photo : OnePiece},
        {title : 'Naruto' , description : 'Dans le village de Konoha vit Naruto, un jeune garçon détesté et craint des villageois, du fait qu\'il détient en lui Kyuubi (démon renard à neuf queues) d\'une incroyable force, qui a tué un grand nombre de personnes. Le ninja le plus puissant de Konoha à l\'époque, Minato Namikaze, a réussi à sceller ce démon dans le corps de Naruto. C\'est ainsi que douze ans plus tard, Naruto rêve de devenir le plus grand Hokage de Konoha afin que tous le reconnaissent à sa juste valeur. Mais la route pour devenir Hokage est très longue.', rate : 9, photo : Naruto},
        {title : 'Bleach', description : 'Adolescent de quinze ans, Ichigo Kurosaki possède un don particulier : celui de voir les esprits. Un jour, il croise la route d\'une belle Shinigami (un être spirituel) en train de pourchasser une "âme perdue", un esprit maléfique qui hante notre monde et n\'arrive pas à trouver le repos. Mise en difficulté par son ennemi, la jeune fille décide alors de prêter une partie de ses pouvoirs à Ichigo, mais ce dernier hérite finalement de toute la puissance du Shinigami. Contraint d\'assumer son nouveau statut, Ichigo va devoir gérer ses deux vies : celle de lycéen ordinaire, et celle de chasseur de démons...', rate : 6, photo : Bleach},
        {title : 'Hunter', description : 'Le jeune Gon vit sur une petite île avec sa tante. Abandonné par son père qui est un Hunter, à la fois un aventurier et un chasseur de primes, Gon décide à l\'âge de 12 ans de partir pour devenir un Hunter. Cela ne sera pas chose aisée, il devra passer une suite de tests et examens en compagnie de milliers d\'autres prétendants au titre de Hunter. Il sera aidé par de nouvelles connaissances qui aspirent au même but que lui tel que Kurapika, Leorio et Killua.', rate : 7, photo : Hunter},
        {title : 'Dragon ball Z', description : 'Cinq ans après le mariage de Son Gokû, Raditz, un mystérieux guerrier de l\'espace, arrive sur Terre. Il apprend à Son Gôku qu\'il ne reste plus que quatre survivant sur leur planète et que ce dernier avait été envoyé sur terre pour la détruire...', rate : 5, photo : DragonBall},
        {title : 'Boruto', description : 'Boruto est le fils de Naruto Uzumaki, le septième Hokage du village de Konoha, et célèbre ninja. Ayant toujours vécu dans l\'ombre de son père, le garçon est décidé à le surpasser. Mais son entrée à l\'académie des ninjas de Konoha va lui apprendre que devenir le meilleur ninja est plus difficile qu\'il ne l\'aurait cru.', rate : 8, photo : Boruto},
        {title : 'L\'Attaque des Titans', description : 'Dans un monde ravagé par des titans mangeurs d’homme depuis plus d’un siècle, les rares survivants de l’Humanité n’ont d’autre choix pour survivre que de se barricader dans une cité-forteresse. Le jeune Eren, témoin de la mort de sa mère dévorée par un titan, n’a qu’un rêve : entrer dans le corps d’élite chargé de découvrir l’origine des Titans et les annihiler jusqu’au dernier…', rate : 7, photo : Titans},
        {title : 'Baki', description : 'Cinq assassins sanguinaires s\'évadent de prison et prennent Tokyo d\'assaut. Le champion d\'arts martiaux Baki Hanma et quatre combattants d\'élite devront les affronter. Tous les coups sont permis. Le combat sera féroce et sans pitié. Prêts pour un bain de sang ?', rate : 4, photo : Baki}
    ]);
    let titre,descript,rating,tof ;
  return (
    <div className = 'film'> 
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Filter movie by title" aria-label="Search" onChange={(e)=>{setFilm([...Film.filter(el => (el.title.includes(e.target.value)))])}}/>
                        <button className="btn btn-outline-success" type="submit" style={{width :  '8rem'}}>Filter</button>
                    </form>
        <div className = "manga2">
            <MovieCard film = {Film}/>
        </div>
        <div>
            <form className='add'>
                <label className='titre'>
                    <input type= 'text' placeholder = 'le titre' onChange={(e)=> {titre = e.target.value}}/>
                </label >
                <br/>
                <label className='descript'>
                    <textarea onChange={(e)=> {descript = e.target.value}}/>
                </label>
                <br/>
                <label className='rating'>
                    <input type= 'number' onChange={(e)=> {rating = e.target.value}}/>
                </label>
                <br/>
                <label className='tof'>
                    <input type= 'file' onChange={(e)=> {tof = e.target.files}}/>
                </label>
            </form>
        <button className='btn btn-primary' onClick={()=> {
            setFilm([...Film,{title : titre,description : descript,rate : rating ,photo : tof}]);
        }}><i className = "fa-duotone fa-plus"></i></button>
        </div>
    </div>
  )
}
export default MovieList;