import { useState } from "react";
import Box from "@mui/material/Box";
import "./Game2.css";
import PickLevel from "../../components/modules/games/game2/PickLevel";
import PlayGame from "../../components/modules/games/game2/PlayGame";

export default function Game2Page(): JSX.Element {
  const [level, setLevel] = useState(0);
  const [isPlay, setIsPlay] = useState(false);

  const updateLevel = (num: number) => {
    console.log(num);
    setLevel(num);
  };

  return (
    <div id="game2">
      <Box
        sx={{
          fontFamily: "cursive",
          fontWeight: 700,
          fontSize: "3rem",
          lineHeight: "100px",
          color: "#F7FC12",
          textShadow: "0px 2.94838px 5.89675px #C2040F",
        }}
      >
        Welcome to the picture flip game
      </Box>
      <PickLevel level={level} pickLevel={updateLevel}></PickLevel>
      <div className="box-game">
        {level > 0 && (
          <PlayGame
            isPlay={isPlay}
            level={level}
            setPlay={setIsPlay}
          ></PlayGame>
        )}
      </div>
    </div>
  );
}
