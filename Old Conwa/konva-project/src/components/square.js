import '../App.css';
import Konva from 'konva';
import React from 'react';

class Squar extends React.Component{
    render() {
        var width = window.innerWidth;
        var height = window.innerHeight;

        var layer1 = new Konva.layer();

        var circle = new Konva.Circle({ 
            x: width, // задаем координату x 
            y: height, // и координату y 
            radius: 70,// радиус окружности 
            fill: 'blue', // цвет заливки 
            stroke: 'black', // цвет обводки 
            strokeWidth: 1 // ширина обводки 
        });

        layer1.add(circle);

        stage.add(layer1);
    }
}

export default Squar;