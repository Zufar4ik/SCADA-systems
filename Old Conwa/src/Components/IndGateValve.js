import React from 'react';
import Konva from 'konva'
import Stage from './home';

 class IndGateValve extends React.Component {
    render() {

        
        const stage = Stage;
        
        // Создание и добавление слоя

        const layer = new Konva.Layer();
        stage.add(layer);

 
        // ----------- Независимые задвижки ---------------

        const Tr3 = new Konva.Line({    
            points: [500,500, 575,550, 575,450],
            closed: true,
            stroke: '#000000',
            strokeWidth: 1,
            fill: '#ffd29e'
        });

        const Tr4 = new Konva.Line({    
            points: [500,500, 425,450, 425, 550],
            closed: true,
            stroke: '#000000',
            strokeWidth: 1,
            fill: '#ffd29e'
        })

        // ------------------------------  


        // Добавление объектов на слой

        const Value2 = new Konva.Group({
            x: 0,
            y: 0,
            draggable: true
        })

        // Добавление частей фигуры в группу и на слой

        Value2.add(Tr3,Tr4);
        layer.add(Value2);
 


        return (
            <div>
            </div>
        );
    }
}


export default IndGateValve;