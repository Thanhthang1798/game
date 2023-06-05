import { useEffect, useState } from "react";
import helmet from "./../../../../assets/image/game2/helmet.png";
import potion from "./../../../../assets/image/game2/potion.png";
import ring from "./../../../../assets/image/game2/ring.png";
import scroll from "./../../../../assets/image/game2/scroll.png";
import shield from "./../../../../assets/image/game2/shield.png";
import sword from "./../../../../assets/image/game2/sword.png";
import { PropsGame } from "./IGame2";
const easy = [1, 2, 1, 2];
const medium = [1, 2, 3, 4, 1, 2, 3, 4];
const hard = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
const imagesBg = [helmet, potion, ring, scroll, shield, sword];
type CardGame = {
  bg: string;
  number: number;
  isOpen: boolean;
  isTick: boolean;
};

export default function GameFlipping({
  isSuccess,
  setIsSuccess,
  level,
}: PropsGame) {
  const [images, setImages] = useState<CardGame[]>([]);

  function RandomNumber() {
    let idxs: number[] = [...easy];
    if (level === 2) idxs = [...medium];
    else if (level === 3) idxs = [...hard];
    let res: CardGame[] = [];
    let length = idxs.length;
    for (let i = 0; i < length; i++) {
      let index: number = Math.floor(Math.random() * idxs.length);
      var cardGame: CardGame = {
        bg: imagesBg[idxs[index] - 1],
        number: idxs[index],
        isOpen: false,
        isTick: false,
      };
      res.push(cardGame);
      idxs.splice(index, 1);
    }
    return res;
  }

  useEffect(() => {
    if (!isSuccess) setImages(RandomNumber());
  }, [isSuccess, level]);

  function Change(index: number) {
    const updatedCard = [...images];
    if (updatedCard[index].isOpen) return;
    //update item tick
    updatedCard[index].isTick = !updatedCard[index].isTick;

    // handle item tick
    var items = updatedCard.filter((x) => x.isTick && !x.isOpen);
    if (items.length > 2) return;
    if (items.length > 1) {
      if (items[0].number == items[1].number) {
        items[0].isOpen = true;
        items[1].isOpen = true;
      } else {
        setTimeout(() => {
          images.map((item) => {
            item.isTick = false;
          });
          setImages(images);
        }, 1000);
      }
    }
    setImages(updatedCard);
    var opened = images.filter((x) => !x.isOpen);
    if (opened.length == 0) {
      setIsSuccess(true);
    }
  }

  return (
    <>
      <div className="game-body medium">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => Change(index)}
            className="card"
            style={{
              backgroundImage: _.isTick || _.isOpen ? `url(${_.bg})` : "",
              backgroundSize: "cover",
            }}
          >
            {_.number}
          </div>
        ))}
      </div>
    </>
  );
}
