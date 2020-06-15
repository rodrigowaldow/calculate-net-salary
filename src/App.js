import React, { Component } from 'react';
import InputFullSalary from './components/fullSalary/InputFullSalary';
import InputReadOnly from './components/readOnly/InputReadOnly';
import { calculateSalaryFrom, formatCurrency, formatPercent, calculatePercentualFrom } from './helpers/salary';
import ProgressBarSalary from './components/progressBar/ProgressBarSalary';


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary: 1000
    }
  }

  handleChangeFullSalary = (newValue) => {
    this.setState({
      fullSalary: newValue,
    });
  }

  render() {
    const { fullSalary } = this.state;
    const { baseINSS, baseIRPF, discountINSS, discountIRPF, netSalary } = calculateSalaryFrom(fullSalary);
    const { percentINSS, percentIRPF, percentNetSalary } = calculatePercentualFrom(fullSalary, discountINSS, discountIRPF, netSalary);
    return (
      <div className="container">
        <h1 style={styles.centeredTitle}>React Salário</h1>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <InputFullSalary value={fullSalary} onChangeValue={this.handleChangeFullSalary} />
            </div>
            <div className="row">
              <InputReadOnly label="Base INSS" value={`${formatCurrency(baseINSS)}`} />
              <InputReadOnly label="Desconto INSS" value={`${formatCurrency(discountINSS)} (${formatPercent(percentINSS)})`} color="#e67e22" />
              <InputReadOnly label="Base IRPF" value={`${formatCurrency(baseIRPF)}`} />
              <InputReadOnly label="Desconto IRPF" value={`${formatCurrency(discountIRPF)} (${formatPercent(percentIRPF)})`} color="#c0392b" />
            </div>
            <div className="row">
              <InputReadOnly label="Salário líquido" value={`${formatCurrency(netSalary)} (${formatPercent(percentNetSalary)})`} color="#16a085" />
            </div>
          </form>
        </div>
        <ProgressBarSalary percentINSS={percentINSS} percentIRPF={percentIRPF} percentNetSalary={percentNetSalary} />
      </div>
    );
  }
}

const styles = {
  centeredTitle: {
    textAlign: 'center',
  }
}