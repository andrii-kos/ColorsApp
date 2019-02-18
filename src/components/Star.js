import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Star.css'

const Star = ({ selected=false, 
                hovered=false, 
                onClick=f=>f, 
                onMouseOver=f=>f,
                onMouseLeave=f=>f }) => 
  <div
    className={
          selected ? 'star text-center star-selected' 
        : hovered ? 'star text-center star-hovered'
        : 'star text-center'
    }
    
    onClick={onClick}
    onMouseOver={onMouseOver}
    onMouseLeave={onMouseLeave}>
  </div>


  Star.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func,
  }

  export default Star