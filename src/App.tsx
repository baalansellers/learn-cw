import React, { useEffect, useState } from "react";
import "./App.css";
import TimerNode from "./components/TimerNode/TimerNode";

const OFFSET_MAX = 1000;
const TIMER_SPEED = 0.5;

const App = () => {
  const [isPaused, setIsPaused] = useState(true);
  const [offset, setOffset] = useState(0);

  const handleSetClick = () => {
    setIsPaused(true);
    setOffset(0);
    setIsPaused(false);
  };

  useEffect(() => {
    if (!isPaused && offset < OFFSET_MAX) {
      const timerId = setTimeout(() => {
        if (!isPaused) {
          const newOffset = offset + TIMER_SPEED;

          setOffset(newOffset);

          //Fire callback when timer ends
          // if (newOffset >= OFFSET_MAX) {
          //   props.onTimerEnds();
          // }
        }
      }, 10);

      return () => clearTimeout(timerId);
    }
  }, [offset, isPaused]);

  return (
    <div className="tree-container">
      <div className="tree-row one">
        <div className="tree-node">
          <button onClick={handleSetClick}>Start</button>
        </div>
      </div>
      <div className="tree-row two">
        <div className="tree-node">
          <TimerNode position={offset} character="E" className="node e" />
        </div>
        <div className="tree-node">
          <TimerNode position={offset} character="T" className="node" />
        </div>
      </div>
      <div className="tree-row three">
        <div className="tree-node">
          <TimerNode position={offset} character="I" className="node i" />
        </div>
        <div className="tree-node">
          <TimerNode position={offset} character="A" className="node" />
        </div>
        <div className="tree-node">
          <TimerNode position={offset} character="N" className="node" />
        </div>
        <div className="tree-node">
          <TimerNode position={offset} character="M" className="node" />
        </div>
      </div>
      <div className="tree-row four">
        <div className="tree-node">
          <TimerNode position={offset} character="S" className="node" />
        </div>
        <div className="tree-node">
          <TimerNode position={offset} character="U" className="node" />
        </div>
        <div className="tree-node">
          <TimerNode position={offset} character="R" className="node" />
        </div>
        <div className="tree-node">
          <TimerNode position={offset} character="W" className="node" />
        </div>
        <div className="tree-node">
          <TimerNode position={offset} character="D" className="node" />
        </div>
        <div className="tree-node">
          <TimerNode position={offset} character="K" className="node" />
        </div>
        <div className="tree-node">
          <TimerNode position={offset} character="G" className="node" />
        </div>
        <div className="tree-node">
          <TimerNode position={offset} character="O" className="node" />
        </div>
      </div>
      <div className="tree-row five">
        <div className="tree-node">
          <TimerNode position={offset} character="H" className="node" />
        </div>
        <div className="tree-node">
          <TimerNode position={offset} character="V" className="node" />
        </div>
        <div className="tree-node">
          <TimerNode position={offset} character="F" className="node" />
        </div>
        <div className="tree-node">
          <TimerNode position={offset} character="" className="node" />
        </div>
        <div className="tree-node">
          <TimerNode position={offset} character="L" className="node" />
        </div>
        <div className="tree-node">
          <TimerNode position={offset} character="" className="node" />
        </div>
        <div className="tree-node">
          <TimerNode position={offset} character="P" className="node" />
        </div>
        <div className="tree-node">
          <TimerNode position={offset} character="J" className="node" />
        </div>
        <div className="tree-node">
          <TimerNode position={offset} character="B" className="node" />
        </div>
        <div className="tree-node">
          <TimerNode position={offset} character="X" className="node" />
        </div>
        <div className="tree-node">
          <TimerNode position={offset} character="C" className="node" />
        </div>
        <div className="tree-node">
          <TimerNode position={offset} character="Y" className="node" />
        </div>
        <div className="tree-node">
          <TimerNode position={offset} character="Z" className="node" />
        </div>
        <div className="tree-node">
          <TimerNode position={offset} character="Q" className="node" />
        </div>
        <div className="tree-node">
          <TimerNode position={offset} character="" className="node" />
        </div>
        <div className="tree-node">
          <TimerNode position={offset} character="" className="node" />
        </div>
      </div>
    </div>
  );
};

export default App;
