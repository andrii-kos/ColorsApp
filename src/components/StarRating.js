import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Star from '../components/Star'

export default class StarRating extends Component {

  static propTypes = {
    totalStars: PropTypes.number,
    starsSelected: PropTypes.number,
    onRate: PropTypes.func
  }
  static defaultProps = {
    totalStars: 5,
    starsSelected: 0
  }

  state = { 
    starsHovered: 0 
  }
  

  render() {
    const {totalStars, starsSelected, onRate} = this.props
    const {starsHovered} = this.state

    return (
      <div className="row p-2">
        <div className="col-sm-12 d-flex justify-content-center">
          {[...Array(totalStars)].map((n, i) => 
            <Star 
              key={i} 

              selected={i<starsSelected}
              hovered={i<starsHovered}

              onClick={() => onRate(i+1)}
              onMouseOver={() => this.setState({starsHovered: i+1})}
              onMouseLeave={() => this.setState({starsHovered: 0})}
            />
          )}
        </div>
          <div className="col-sm-12 text-center">
            {starsSelected} of {totalStars} 
          </div>
      
      </div>
      )
  }
}
