import React, { Component } from 'react'

export default class InputReadOnly extends Component {
  render() {
    const { label, value, color = 'black' } = this.props;
    return (
      <div className="input-field col s3">
        <input disabled type="text" style={{ color: `${color}`, fontWeight: 'bold' }} value={value} />
        <label>{label}</label>
      </div>
    )
  }
}
