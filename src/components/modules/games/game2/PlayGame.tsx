import GameFlipping from "./GameFlipping";
import { PropsPlayGame } from "./IGame2";

export default function PlayGame({ isPlay, setPlay }: PropsPlayGame) {
  return (
    <>
      {isPlay ? (
        <GameFlipping />
      ) : (
        <button className="play" onClick={() => setPlay(!isPlay)}>
          Play Now
        </button>
      )}
    </>
  );
}
