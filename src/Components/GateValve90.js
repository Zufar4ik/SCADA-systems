import React from 'react';
import Konva from 'konva'
import Stage from './home';

 class GateValve90 extends React.Component {
    render() {

        
        // Создание и добавление слоя

        const layer = new Konva.Layer();
        Stage.add(layer);

        // -------------- Задвижка ---------------

        const RectHori = new Konva.Rect({
            x: 225,
            y: 196,
            width: 150,
            height: 30,
            fill: '#77dd77',
            stroke: '#000000',
            strokeWidth: 1
            });

        const RectVert = new Konva.Rect({
            x: 290,
            y: 300,
            width: 20,
            height: -75,
            fill: '#77dd77',
            stroke: '#000000',
            strokeWidth: 1
            });

        const Tr1 = new Konva.Line({
            points: [300,300, 375,350, 375,250],
            closed: true,
            stroke: '#000000',
            strokeWidth: 1,
            fill: '#77dd77'
        });

        const Tr2 = new Konva.Line({        
            points: [300,300, 225,250, 225, 350],
            closed: true,
            stroke: '#000000',
            strokeWidth: 1,
            fill: '#77dd77'
        })

        // ------------------------------  


        const Value1 = new Konva.Group({
            x: 300,
            y: 600,
            rotation: -90,
            draggable: true
        })

        Value1.add(RectVert,RectHori,Tr1,Tr2);
        layer.add(Value1);


        return (
            <div>
            </div>
        );
    }
}


export default GateValve90;