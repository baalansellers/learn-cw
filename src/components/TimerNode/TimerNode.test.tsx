import React from "react";
import TimerNode from "./TimerNode";
import ReactDOM from "react-dom";

test("renders TimerNode component", () => {
  const div = document.createElement("div");
  const pt1 = React.createRef<SVGSVGElement>();
  ReactDOM.render(
    <TimerNode position={1} character="A" className="node" ref={pt1} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
