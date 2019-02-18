import React from 'react'
import StarRating from '../components/StarRating'
import '../styles/Color.css'


const Color = ({ title, id, color, rating=0, onRate=f=>f, onRemove=f=>f}) => 
  <div className="col-sm-6 mt-5 card-item">
  <div className="light-color">
    <div className="title d-flex justify-content-between align-items-center p-3">
      <h4 className="font-weight-bold m-0">
        {title}
      </h4>
      <button 
        className="btn" 
        onClick={onRemove}>
        X
      </button>
    </div>
    <div 
      className="color" 
      style={{backgroundColor: color}}>
    </div>
    <StarRating 
      starsSelected={rating} 
      id={id} 
      onRate={onRate} />
  </div>
    
  </div>

export default Color