import { Component } from "react";

class CounterButton extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  shouldComponentUpdate(nextProps, sextState) {
    return true;
  }

  updateCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <button id="counter" onClick={this.updateCount}>
          Count:{this.state.count}
        </button>
      </div>
    );
  }
}
export default CounterButton;
