import { Stage, Layer } from 'react-konva';
import React from 'react';
import Regulator from './Regulator';
import Kontainer from './Kontainer';
import СontrolUnit from './СontrolUnit';
import GataValve from './GateValve';
import Flag from './Flag';
import IndGataValve from './IndGateValve';



class CanvasHolst extends React.Component {
  render() {
    return (
        <Stage width={window.innerWidth} height={window.innerHeight} >
          <Layer>
            <Regulator />
            <Kontainer />
            <СontrolUnit />
            <IndGataValve />
            <GataValve />
            <Flag />
          </Layer>
        </Stage>

    )
  }
  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }
}


export default (CanvasHolst);

