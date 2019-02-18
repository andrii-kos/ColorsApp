import React, { Component } from "react";
import ReactDOM from "react-dom";

import v4 from 'uuid'

import AddColorForm from '../components/AddColorForm'
import ColorList from '../components/ColorList'

export default class App extends Component {

  state = {
    colors: [
      {
        id: v4(),
        title: 'Favorite',
        color: '#ffffcc',
        ratting: 3
      }
    ],
  }

  addColor = (title, color) => {
    const colors = [
      ...this.state.colors,
      {
        id: v4(),
        title,
        color,
        rating: 0
      }
    ]
    this.setState({colors})
  }

  removeColor = (id) => {
    const colors = this.state.colors.filter(color => 
      color.id !== id)
    this.setState({colors})
  }

  rateColor = (rating, id) => {
    const colors = this.state.colors.map(color => 
      (color.id !== id) ? color : 
        {
          ...color,
          rating
        }
      )
    this.setState({colors})
  }

  render() {
    const { removeColor, rateColor, addColor } = this
    const { colors } = this.state
    return (
      <div className="container-fluid">
        <AddColorForm 
          onNewColor={addColor}/>
        <ColorList 
          onRemove={removeColor} 
          onRate={rateColor} 
          colors={colors} />
      </div>
      )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
  )