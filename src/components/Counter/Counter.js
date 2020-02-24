import React from 'react';


class Counter extends React.Component {
    constructor(properties) {
      super(properties)
      this.counter = 0;
    }
   
    handLeIncrementClick = e => {
      e.preventDefault();
      let counter = this.counter++;
      // console.log(counter);
      this.setState({counter: counter++})
  }
  handLeDecrementClick = e => {
    e.preventDefault();
    // let counter = e.target.value;
    let counter = this.counter--;
    // console.log(counter);
    this.setState({counter: counter++})
  }
  
  render() {
    return (
      <section>
        <h3>{this.counter}</h3>
        <button className="button1" onClick={this.handLeIncrementClick}>click for Increment</button>
        <button className="button2" onClick={this.handLeDecrementClick}>click for Decrement</button>
      </section>
    )
  }
  }

export default Counter;