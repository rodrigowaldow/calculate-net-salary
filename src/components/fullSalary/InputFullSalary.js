import React, { Component } from 'react'

export default class InputFullSalary extends Component {
  handleInputChange = (event) => {
    const newValue = event.target.value;
    this.props.onChangeValue(newValue);
  }

  render() {
    const { value } = this.props;
    return (
      <div className="input-field col s12">
        <input type="number" value={value} onChange={this.handleInputChange} />
        <label>Salário bruto</label>
      </div>
    )
  }
}
