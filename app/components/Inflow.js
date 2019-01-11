import React, { Component } from 'react';

class Inflow extends Component {
  render() {
    return (
        <tr>
          <td>{this.props.inflow.name}</td>
          <td>{this.props.inflow.cpf}</td>
          <td>{this.props.inflow.payment}</td>
          <td>{this.props.inflow.date}</td>
          <td>{this.props.inflow.value}</td>
        </tr>
    );
  }
}

export default Inflow;
