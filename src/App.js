import React from "react";
import "./styles.css";

export default function App() {
  return (
    <AppWrapper>
      <DeconstructionOne name='CodeSandbox' surname='Git' />
      <DeconstructionTwo text='random text lucas' color='blue' />
    </AppWrapper>
  );
}

function AppWrapper ({children}) {
  return (
    <div className="App">
      {children}
    </div>
  );
}

function DeconstructionOne ({name, surname}) {
  return <h1>Hello {name} {surname} </h1>;
}

function DeconstructionTwo (props) {

  const { text, color } = props;

  console.log(color);
  const css = `color: ${color};`;
  return <h2>{text}</h2>;
}
