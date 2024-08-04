import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrementCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="main-heading">
          The Button has been clicked{' '}
          <span className="span-element">{count}</span> times
        </h1>
        <p className="paragraph">click the button to increase the count</p>
        <div className="btn-container">
          <button
            type="button"
            className="click-button"
            onClick={this.onIncrementCount}
          >
            Click me!
          </button>
        </div>
      </div>
    )
  }
}
export default ClickCounter
