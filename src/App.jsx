import { useState } from "react";
import Card from "./Component/Card-components";
import SerchBox from "./Component/Serch-Box-components";
import { ROBOTS } from "./Assets/ROBOTFRIENDS";
import "./App.css";

const App = () => {
  const [robots, setRobots] = useState(ROBOTS);
  const sechHeandler = (event) => {
    const sherch = event.target.value.toLowerCase();
    const newRobots = ROBOTS.filter((robot) =>
      robot.name.toLowerCase().includes(sherch)
    );
    setRobots(newRobots);
  };
  return (
    <div className="tc">
      <h1>ROBOT FRIRENDS</h1>
      <SerchBox onSherch={sechHeandler} />
      <div>
        {robots.map((robots) => (
          <Card key={robots.id} robots={robots} />
        ))}
      </div>
    </div>
  );
};

export default App;
