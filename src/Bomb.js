import React from 'react';

export default class Bomb extends React.Component {
  state = { count: 0, text: 'tick', maxCount: 8 };

  render() {
    return (
      <div>
        <p>{this.state.text}</p>
      </div>
    )
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 })
      if(this.state.count >= this.state.maxCount){
        this.setState({text: 'BOOOM!'});
      }
      else if(this.state.count % 2 === 0){
        this.setState({text: 'tick'});
      } else{
        this.setState({text: 'tock'});
      }
    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }
}
