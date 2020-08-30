import React from 'react';
import './styles.css';

import { Button } from 'sancho';

export default function App() {
  return (
    <React.Fragment>
      <AppWrapper>
        <DeconstructionOne name="CodeSandbox" surname="Git" />
        <DeconstructionTwo text="random text lucas" color="blue" />
      </AppWrapper>
      <Buttons />
    </React.Fragment>
  );
}

function AppWrapper({ children }) {
  return <div className="App">{children}</div>;
}

function DeconstructionOne({ name, surname }) {
  return (
    <h1>
      Hello {name} {surname}{' '}
    </h1>
  );
}

function DeconstructionTwo(props) {
  const { text, color } = props;

  console.log(color);
  const css = `color: ${color};`;
  return <h2>{text}</h2>;
}

function Buttons() {
  const functionOnClickHTMLButton1 = function () {
    console.log('clicked on the html button!');
  };

  const functionOnClickHTMLButton2 = () => {
    console.log('clicked on the html button!');
  };

  const buildOnClickFunction = (buttonType) => {
    return () => {
      console.log(buttonType);
    };
  };

  return (
    <React.Fragment>
      <button onClick={functionOnClickHTMLButton2}>NOT Sancho Button !</button>
      <Button>Sancho Button1 !</Button>
      <Button onClick={buildOnClickFunction('Sancho')}>Sancho Button2 !</Button>
    </React.Fragment>
  );
}
