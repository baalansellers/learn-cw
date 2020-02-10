import React, { useState, useEffect } from "react";

export interface LineProps {
  from: React.RefObject<SVGSVGElement>;
  to: React.RefObject<SVGSVGElement>;
  dash?: boolean;
}

const Line = (props: LineProps): JSX.Element => {
  const [start, setStart] = useState({ x: 0, y: 0 });
  const [end, setEnd] = useState({ x: 0, y: 0 });
  const showDash = props.dash ? props.dash : false;

  useEffect(() => {
    const timerId = setInterval(() => {
      //Wait till both elements finish rendering
      if (props.from.current && props.to.current) {
        clearTimeout(timerId);

        const fromRect = props.from.current.getBoundingClientRect();
        const toRect = props.to.current.getBoundingClientRect();

        setStart({
          x: fromRect.x + fromRect.width / 2,
          y: fromRect.y + fromRect.height / 2
        });

        setEnd({
          x: toRect.x + toRect.width / 2,
          y: toRect.y + toRect.height / 2
        });
      }
    }, 5);
  }, [props.from, props.to]);

  return (
    <svg
      version="1.1"
      baseProfile="full"
      height="100vh"
      width="100vw"
      style={{
        position: "absolute",
        zIndex: -1,
        top: 0,
        left: 0
      }}
    >
      <line
        x1={start.x}
        y1={start.y}
        x2={end.x}
        y2={end.y}
        style={{
          stroke: "#6C3E98",
          strokeWidth: "0.4em",
          strokeDasharray: `${showDash ? "18" : "4"}`
        }}
      />
    </svg>
  );
};

export default Line;
