import React, { Component } from "react";

export default class Child extends Component {


    renderPower = () =>{
        let {power} = this.props.propsInfo;
        return  power.map((item,index)=>{
            return <button onClick={()=>{this.props.propsShow(item)}}  key={index} className="btn btn-success m-2">{item}</button>
        })
    }
  render() {


    let {name,power,srcImg} = this.props.propsInfo
    return (
      <div>
        <div className="card text-start">
          <img className="card-img-top" src={srcImg} style={{width:'50%'}} alt="Title" />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text">{this.renderPower()}</p>
          </div>
        </div>
      </div>
    );
  }
}
