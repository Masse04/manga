import OnePiece from './One piece.jpg';
import propTypes from 'prop-types';
const Movie = (props) => {

    return (
        <div class = "manga2">
            <div class = "image">
                <img src ={props.item.photo} alt = "manga" class = "photo"/>
            </div>
            <div class = "paragraphe">
                <h5>{props.item.title}</h5>
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button>Watch Now <i class="fa-solid fa-eye"></i></button>
            </div>
        </div>
       
    )
}
Movie.defaultProps = {
    item : {
        title : 'Titre du Manga',
        photo : OnePiece
    }
}
Movie.propTypes = {
    item : propTypes.object
}
export default Movie ;
