import {Component} from 'react'
import './index.css'

class Clock extends Component {
  state = {date: new Date()}

  componentDidMount() {
    console.log('mounted')
    this.timerId = setInterval(() => {
      this.runningClock()
    }, 1000)
  }

  componentWillUnmount() {
    console.log('unmounted')
    clearInterval(this.timerId)
  }

  runningClock = () => {
    console.log('running clock')
    this.setState({
      date: new Date(),
    })
  }

  render() {
    const {date} = this.state
    return (
      <div className="clock-container">
        <h1 className="heading">{date.toLocaleTimeString()}</h1>
      </div>
    )
  }
}
export default Clock
