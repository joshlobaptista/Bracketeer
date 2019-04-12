import React, {Component} from 'react'
import SetupView from './views/Setup';

class HomeContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      players: null
    }

    // Bind methods
    this.setPlayers = this.setPlayers.bind(this)
    
  }
  setPlayers({target: {value}}) {
    console.log(value)
    this.setState({players: value})
  }
  render() {
    return (
      <div>
        <h1>Bracket App</h1>
        <SetupView onChange={this.setPlayers} />
      </div>
    )
  }
}

export default HomeContainer