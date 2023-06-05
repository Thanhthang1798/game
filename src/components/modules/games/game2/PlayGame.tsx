import { useEffect, useState } from "react";
import GameFlipping from "./GameFlipping";
import { PropsPlayGame } from "./IGame2";

export default function PlayGame({ isPlay, setPlay, level }: PropsPlayGame) {
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setPlay(false);
    setIsSuccess(false);
  }, [level]);

  function eventClick() {
    // first playgame
    if (!isPlay && !isSuccess) {
      setPlay(true);
    } else if (isPlay && isSuccess) {
      // replaygame
      setPlay(true);
      setIsSuccess(false);
    }
  }

  return (
    <>
      <div className="placebtn">
        {(!isPlay || isSuccess) && (
          <button className="play" onClick={eventClick}>
            {isSuccess ? "Re" : ""}Play Now
          </button>
        )}
      </div>
      {isPlay && (
        <GameFlipping
          level={level}
          isSuccess={isSuccess}
          setIsSuccess={setIsSuccess}
        />
      )}
    </>
  );
}
