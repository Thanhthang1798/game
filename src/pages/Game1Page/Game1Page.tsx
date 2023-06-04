import { useState } from "react";
import Step1 from "../../components/modules/games/game1/Step1";
import Step2 from "../../components/modules/games/game1/Step2";
import Step3 from "../../components/modules/games/game1/Step3";
import "./Game1.css";
export default function Game1Page() {
  const [stepGame, setStepGame] = useState(1);

  const updateStepGame = (num: number) => {
    console.log(num);
    setStepGame(num);
  };

  return (
    <div>
      <div id="game">
        {stepGame === 1 && <Step1 handleClick={updateStepGame}></Step1>}
        {stepGame === 2 && <Step2 handleClick={updateStepGame}></Step2>}
        {stepGame === 3 && <Step3 handleClick={updateStepGame}></Step3>}
      </div>
    </div>
  );
}
