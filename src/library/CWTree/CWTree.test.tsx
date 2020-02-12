import React from "react";
import CWTree from "./CWTree";
import ReactDOM from "react-dom";

test("dictionary getter functions without error", () => {
  const TestComponent = (): JSX.Element => {
    const tree = new CWTree(true);
    return <>{tree.dict.toString()}</>;
  };
  const div = document.createElement("div");
  ReactDOM.render(<TestComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("array getter functions without error", () => {
  const TestComponent = (): JSX.Element => {
    const tree = new CWTree(true);
    return <>{tree.array.toString()}</>;
  };
  const div = document.createElement("div");
  ReactDOM.render(<TestComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("dah dit value getters chain functions without error", () => {
  const TestComponent = (): JSX.Element => {
    const tree = new CWTree(true);
    return <>{tree.dah.dit.value}</>;
  };
  const div = document.createElement("div");
  ReactDOM.render(<TestComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
