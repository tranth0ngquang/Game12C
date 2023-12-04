import React, { Component } from 'react'
import EXCPhoneModal from './EXCPhoneModal'
import EXCPhoneList from './EXCPhoneList'

export default class EXCPhoneRedux extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className="mb-5">Phone Shop</h1>
        <EXCPhoneModal/>
        <EXCPhoneList/>
      </div>
    )
  }
}
