import React, { Component } from 'react'
import calculateTime from './calculateTime'

export class Clock extends Component {
  constructor(props) {
    super();
    this.timezone = props.timezone;
    this.time = calculateTime(this.props.timezone);
    this.state = {
      hours: '',
      minutes: '', 
      seconds: ''
    };
    this.onRemove = props.onRemove;
  }

  setTime() {
    this.time = calculateTime(this.timezone);
    this.setState({
      hours: this.time.hours,
      minutes: this.time.minutes, 
      seconds: this.time.seconds 
    })
  }

  componentDidMount() {
    console.log('добавлены часы');
    this.setTime();
    this.timer = setInterval(() => {
      this.setTime();
    }, 100)
  }

  componentWillUnmount() {
    console.log('часы удалены');
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="clock-item col-sm-4 card text-center border-0">
        <div>
          <button className="btn close" onClick={() => this.onRemove(this.props.id)}><span aria-hidden="true">&times;</span></button>
        </div>
        
        <h5 className="title">{this.props.title}</h5>
        <h3 className="clock">
          <span id="hours">{this.state.hours}</span>:
          <span>{this.state.minutes}</span>:
          <span>{this.state.seconds}</span>
        </h3>
        
      </div>
    )
  }
}

export default Clock
