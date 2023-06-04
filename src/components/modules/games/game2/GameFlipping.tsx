import { useState } from "react";

export default function GameFlipping() {
  const [images, setImages] = useState(2);

  function Change() {
    setImages(2);
  }

  return (
    <>
      {Array.from({ length: images }).map((_, index) => (
        <div key={index} className="row">
          {Array.from({ length: images }).map((_, indexCol) => (
            <div key={indexCol} className="col">
              {
                <div onClick={Change} className="card">
                  card item
                </div>
              }
            </div>
          ))}
        </div>
      ))}
    </>
  );
}
