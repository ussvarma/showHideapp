// Write your code

import {Component} from 'react'
import './index.css'

class App extends Component {
  state = {HideFirstName: true, HideSecondName: true}

  renderAuthButton1 = () => {
    const {HideFirstName} = this.state
    if (HideFirstName === false) {
      return <h1>Joe</h1>
    }
    return null
  }

  renderAuthButton2 = () => {
    const {HideSecondName} = this.state
    if (HideSecondName === false) {
      return <h1>Jonas</h1>
    }
    return null
  }

  render() {
    return (
      <div className="container1">
        <div className="box1">
          <h1>Show/hide first name</h1>
          {this.renderAuthButton1()}
        </div>
        <div className="box2">
          <h1>Show/hide last name</h1>
          {this.renderAuthButton2()}
        </div>
      </div>
    )
  }
}

export default App
