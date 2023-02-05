import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class GreetClassComponent extends React.Component {
  render() {
    return <p>Hi there {this.props.name}!</p>
  }
}

let root = ReactDOM.createRoot(document.getElementById('root'));

let GreetFuncComponent = (props) => {
  return <p>Hello {props.name}!</p>;
}

const el = (
  <div>
    <GreetFuncComponent name="John Funk" />
    <GreetClassComponent name="Jane Classy" />
  </div>
)
root.render(el);

