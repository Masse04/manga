import React from 'react'
import { useParams,useLocation } from 'react-router-dom';

const DetailsFilm = () => {
    const id = useParams();
    const location = useLocation();
    console.log(location);
  return (
    <div className='detailsFilm'> 
        <div className='tof'><img src={location.state.photo} alt='manga' className='natal'/></div>
        <div className='texte'>
            <div className='title'>
                <h4>{location.state.title}</h4>
                <h4><i className = "fa-solid fa-star" style = {{color : 'yellow'}}></i>{location.state.rate}/10</h4>
            </div>
            <p className='para'>{location.state.description}</p>
            <div className='genre'>
                <p><i className='btn btn-primary'>Animation</i></p>
                <p><i className='btn btn-primary'>Action</i></p>
                <p><i className='btn btn-primary'>Drama</i></p>
            </div>
            <div>
                <h5>Actors</h5>
                <div>
                    <p>Griffin Puatu</p>
                    <p>Yu Hayashi</p>
                    <p>Yuuki Shin</p>
                </div>
            </div>
            <button className='btn btn-primary'>Watch Now <i className="fa-solid fa-eye"></i></button>
        </div>
    </div>
  )
}
export default DetailsFilm ;