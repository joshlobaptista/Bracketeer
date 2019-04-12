import React, { Component } from 'react'
import Players from '../../../components/Players';

class SetupView extends Component {
  render() {
    return (
      <div>
        <h1>Setup Container</h1>
        <Players onChange={this.props.onChange} /> 
      </div>
    )
  }
}

export default SetupView