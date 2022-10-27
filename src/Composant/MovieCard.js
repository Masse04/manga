//import OnePiece from '../Image/One piece.jpg';
//import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
const MovieCard = ({film}) => {
    return (
        
        <div className="manga">{
            film.map(el => (
            <div>
                <Link to = {`/detailsFilm/${film.findIndex(i => i.title === el.title)}`} state = {el} style = {{textDecoration : 'none', color : 'black'}}>
                    <div className = "image">
                        <img src ={el.photo} alt = "manga" className = "photo"/>
                    </div>
                    <div className = "paragraphe">
                        <div>
                            <h5>{el.title}</h5>
                            <h5>{el.rate}</h5>
                        </div>
                        <p>{el.description.substring(0,93)}</p>
                        <button className='btn btn-primary'>Watch Now <i className="fa-solid fa-eye"></i></button>
                    </div> 
                </Link>
            </div>
           )) }
        </div>
        
    )
}
/*MovieCard.defaultProps = {
    item : {
        title : 'Titre du Manga',
        photo : OnePiece,
        description : 'masse est ',
        rate : 9
    }
}
MovieCard.propTypes = {
    item : propTypes.object
}*/
export default MovieCard ;
