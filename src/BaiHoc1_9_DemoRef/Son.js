import React, { Component } from 'react'

export default class Son extends Component {

  state = {
    title : 'Quang'
  }

  changeTitle = () =>{
    this.setState({
      title : 'Đz'
    })
  }
  render() {
    return (
      <div>
        <h1>Hello {this.state.title}</h1>
      </div>
    )
  }
}
