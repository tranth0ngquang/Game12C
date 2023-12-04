import React, { Component } from 'react'
import Child from './Child'

export default class Parents extends Component {

    
    info = {
        name: 'Madara',
        power : [99,100,101,102],
        srcImg: 'https://cdn.popsww.com/blog/sites/2/2022/02/Madara-Uchiha.jpg'
    } 

    showAlert = (name) =>{
        let height = window.innerHeight;
        let width = window.innerWidth;

        alert('chao ' + name + ' ' + height + ' ' + width)

    }
  render() {
    return (
      <div>
        <Child propsInfo ={this.info} propsShow = {this.showAlert}/>
      </div>
    )
  }
}
