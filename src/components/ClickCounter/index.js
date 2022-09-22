import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  counterClick = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="contain-container">
          <h1 className="heading">
            The Button has been clicked <br />{' '}
            <span className="counter-value">{count}</span> times
          </h1>
          <p>Click the button to increase the count</p>
          <div>
            <button onClick={this.counterClick} className="btn" type="button">
              Click Me!
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ClickCounter
