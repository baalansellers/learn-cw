import React from 'react';
import Line from './Line';
import ReactDOM from 'react-dom';

test('renders Line component', () => {
  const div = document.createElement('div');
  const pt1 = React.createRef<SVGSVGElement>();
  const pt2 = React.createRef<SVGSVGElement>();
  ReactDOM.render(<Line from={pt1} to={pt2} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
