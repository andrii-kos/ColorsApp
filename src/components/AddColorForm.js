import React, { Component } from "react";

import '../styles/AddColorForm.css'


export default class AddColorForm extends Component {

  submit = (event) => {
    const { _title, _color } = this.refs
    const { onNewColor } = this.props
    event.preventDefault()
    onNewColor( _title.value, _color.value )
    _title.value = ''
    _color.value = '#000000'
    _title.focus()
  }

  render() {
    return (
          <form 
            className="light-color p-5 mt-5" 
            onSubmit={this.submit}>
            <div className="row d-flex justify-content-center">
              <div className="col-sm-4 py-1">
                <input 
                  ref="_title"
                  className="form-control h-100" 
                  placeholder="Color Title"
                  type="text"
                  required
                />
              </div>

              <div className="col-sm-4 py-1">      
                <input 
                  ref="_color"
                  className="form-control h-100"
                  type="color"
                  required
                />
              </div>  

              <div className="col-sm-2 py-1">
                <button 
                  className="btn btn-default w-100">Add
                </button> 
              </div>
            </div>
          </form> 
      
    )
  }
}
