import React, { Component } from 'react'

class CountDown extends Component {

  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div>
        <h2>Time Remaining:</h2>

        <div className="digit">
            <label htmlFor='hours'>Hours</label><br/>
            <input
                readOnly
                name='hours'
                type='number'
                value={this.props.timeRemaining.hours}/>
        </div>

        <div className="digit">
            <label htmlFor='minutes'>Minutes</label><br/>
            <input
                readOnly
                name='minutes'
                type='number'
                value={this.props.timeRemaining.minutes}/>
        </div>

        <div className="digit">
            <label htmlFor='seconds'>Seconds</label><br/>
            <input
                readOnly
                name='seconds'
                type='number'
                value={this.props.timeRemaining.seconds}/>
        </div>

          <button onClick={this.props.clearTimer}>Clear Timer</button>

      </div>
    )
  }
}

export default CountDown