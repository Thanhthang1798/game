import { PropsLevel } from "./IGame2";

const levelGame = [
  {
    levelId: 1,
    name: "Easy",
  },
  {
    levelId: 2,
    name: "Medium",
  },
  {
    levelId: 3,
    name: "Hard",
  },
];
export default function PickLevel({ level, pickLevel }: PropsLevel) {
  return (
    <>
      <div>
        {" "}
        {level > 0
          ? "You picked level " +
            levelGame.find((x) => x.levelId === level)?.name
          : "Xin mời bạn chọn level chơi game"}{" "}
      </div>
      <div className="pick-level">
        <div>
          {levelGame.map((item, index) => (
            <button key={index} onClick={() => pickLevel(item.levelId)}>
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
