import { useState, useEffect } from "react";
import Card from "./Component/Card-components";
import SerchBox from "./Component/Serch-Box-components";
import "./App.css";

const App = () => {
  const [sherchRobot, setSerchRobots] = useState("");
  const [robots, setRobots] = useState([]);
  const [filterRobots, ssetFilterRobots] = useState(robots);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);
  useEffect(() => {
    const newSrechRobot = robots.filter((robot) =>
      robot.name.toLocaleLowerCase().includes(sherchRobot)
    );
    ssetFilterRobots(newSrechRobot);
  }, [robots, sherchRobot]);

  const sechHeandler = (event) => {
    const sherch = event.target.value.toLowerCase();
    setSerchRobots(sherch);
  };
  const RobotsDisplay = () => {
    return (
      <div className="tc">
        <h1>ROBOT FRIRENDS</h1>
        <SerchBox onSherch={sechHeandler} />
        <div>
          {filterRobots.map((robots) => (
            <Card key={robots.id} robots={robots} />
          ))}
        </div>
      </div>
    );
  };

  return <>{robots ? <RobotsDisplay /> : <p>Loading...</p>}</>;
};

export default App;
