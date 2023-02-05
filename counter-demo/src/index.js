import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

let root = ReactDOM.createRoot(document.getElementById('root'));
let counter = 0;

// functional component
let CounterComponent = () => {
  return <p>{counter}</p>;
}

let renderCounter = () => {
  counter++;
  const el =  (
    <div>
      <TitleComponent />
      <CounterComponent />
    </div>
  )
  root.render(el);
}

setInterval(renderCounter, 1000);

// class component
class TitleComponent extends React.Component {
  render() {
    return <h1>Counter Demo</h1>
  }
}
