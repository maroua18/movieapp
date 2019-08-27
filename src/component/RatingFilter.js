import React from 'react';
import Rating from './rating';
const RatingFilter = ({onChange, count}) => (
   <div className="rating-filter">
       <Rating  count={count} onChangeRating={(newRating) =>{ onChange(newRating) }} />   </div>
)
export default RatingFilter;


