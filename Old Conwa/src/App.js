import './App.css';
import Konva from 'konva';
import React from 'react';
import GateValve from './Components/GateValve.js';
import IndGateValve from './Components/IndGateValve';
import Regulator from './Components/Regulator';
import GateValve90 from './Components/GateValve90.js';


 class App extends React.Component {
  render() {

      return (
        <div>
          <GateValve/>
          <GateValve90/>
          <IndGateValve/>
          <Regulator/>
        </div>
      )
  }
}

export default App;