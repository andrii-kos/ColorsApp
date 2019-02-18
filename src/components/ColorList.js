import React from 'react'
import Color from '../components/Color'


const ColorList = ({ colors=[], onRemove=f=>f, onRate=f=>f }) => 
      <div className="row">
        { (colors.length === 0) 
          ? <div className="col-sm-12">
              <h2 className="mt-5">No colors listed </h2>
            </div> 
          : colors.map(color =>
              <Color 
                onRemove={() => onRemove(color.id)} 
                onRate={(rating) => onRate(rating, color.id)} 
                key={color.id} 
                {...color}
              />
            )
        }
      </div> 

export default ColorList