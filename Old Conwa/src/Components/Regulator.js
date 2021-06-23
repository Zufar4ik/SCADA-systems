import React from 'react';
import Konva from 'konva'
import Stage from './home';


 class Regulator extends React.Component {
    render() {

        
        const stage = Stage;
        
        // Создание и добавление слоя

        const layer = new Konva.Layer();
        Stage.add(layer);



        // ----------- Регулятор ---------------

        const circle = new Konva.Circle({
            x: 700,
            y: 300,
            radius: 90,
            fill: '#77dd77',
            stroke: '#000000',
            strokeWidth: 1
        }) 

        const Rect = new Konva.Rect({
            x: 650,
            y: 350,
            width: 100,
            height: 75,
            fill: '#77dd77',
            stroke: '#000000',
            strokeWidth: 1
        })

        const LineWht = new Konva.Line({    
            points: [700,220, 700,380],
            
            stroke: '#ffffff',
            strokeWidth: 6
        })


        const Regulator = new Konva.Group({
            x: 50,
            y: 10,
            draggable: true
        })



        // Добавление частей фигуры в группу и на слой

        Regulator.add(Rect,circle,LineWht);
        layer.add(Regulator);


        return (
            <div>
            </div>
        );
    }
}


export default Regulator;