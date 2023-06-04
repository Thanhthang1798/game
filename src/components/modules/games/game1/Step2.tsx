import pipe from "../../../../assets/image/game1/pipe.png";
import gift from "../../../../assets/image/game1/gift.png";
import { Props } from "./IGame1";

export default function Step2({ handleClick }: Props) {
  function openGift(postion: number) {
    console.log(postion);
    handleClick(3);
  }

  return (
    <div className="step2">
      <div className="title">
        <h1>Catch 1 gift box</h1>
      </div>
      <div className="game-land">
        <div className="gift-and-pipe">
          {Array.from({ length: 3 }).map((_, index) => (
            <div className="item" key={index}>
              <div className="gift" onClick={() => openGift(index)}>
                <img src={gift} />
              </div>
              <div className="pipe">
                <img src={pipe} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
