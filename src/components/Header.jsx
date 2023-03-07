import { Component } from "react";
import CounterButton from "./CounterButtom";
class Header extends Component {
  shouldComponentUpdate(nextProps, sextState) {
    return false;
  }

  render() {
    return (
      <div>
        <h1 className="f1">RoboFriends</h1>
        <CounterButton />
      </div>
    );
  }
}
export default Header;
