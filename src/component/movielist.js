import React from 'react';
import '../style.css';
import Star from './rating';


const Movielist = (props) => {

    return (
        <div className="movies-list">
        {props.count.map(el => { 
            return(
        <div className="movie-card">

               <img className="image" src={el.img} alt="image"/>
               <div className="more"> <h3>{el.title}</h3></div>
                <Star rating={el.rate}/>
                 
            </div>

            )
        }
            )}

            </div> 
)
}


export default Movielist;

