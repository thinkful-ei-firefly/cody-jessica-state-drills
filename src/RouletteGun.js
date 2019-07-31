import React from 'react';


export default class RouletteGun extends React.Component {
    constructor(props) {
        super(props);
        this.state={chamber: null, spinningTheChamber: false};
    }

    handleRoulette = () => {
        this.setState({spinningTheChamber: true});
        window.setTimeout( () => {
            this.setState({chamber: Math.ceil(Math.random()*8)});
            this.setState({spinningTheChamber: false});
        },
            2000
            );
        
    }


    displayText() {
        if (this.state.spinningTheChamber === true) {
            return 'spinning the chamber and pulling the trigger! ...';
        } else if (this.state.chamber === this.props.bulletInChamber) {
            return 'BANG!!!!';
        } else {
            return 'You\'re safe!';
        }
    }
    



  render () {
      return (
    <main className='App'>
      <div>
          <p>{this.displayText()}</p>
          <button onClick={this.handleRoulette}>Pull the trigger!</button>
      </div>
    </main>
  );}
}

