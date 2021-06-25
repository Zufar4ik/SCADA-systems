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
                    <Regulator/>
                    <Kontainer/>
                    <СontrolUnit/>
                    <GataValve/>
                    <IndGataValve/>
                    <Flag/>
                </Layer>
            </Stage>

        )
    }
}



export default (CanvasHolst);


// Сделать нормальные размеры


// Большой белый контейнер 

/* <Group draggable={true}>
<Ellipse x={450} y={430} radiusX={125} radiusY={25} fill={'#ffffff'} stroke={'#000000'} strokeWidth={1}></Ellipse>
<Line points={[325, 430, 325, 550]} stroke={'#000000'} strokeWidth={1}></Line>
<Line points={[575, 430, 575, 550]} stroke={'#000000'} strokeWidth={1}></Line>
<Line points={[325, 550, 575, 550]} stroke={'#000000'} strokeWidth={1}  ></Line>
</Group> */