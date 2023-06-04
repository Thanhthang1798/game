import React, { ReactNode } from "react";
import { Props } from "./IGame1";

export default function Step1({ handleClick }: Props) {
  return (
    <div className="step1">
      <button onClick={() => handleClick(2)} className="btn button-game">
        {" "}
        Chơi ngay{" "}
      </button>
    </div>
  );
}
