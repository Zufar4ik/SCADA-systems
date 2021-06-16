import './App.css';
import Konva from 'konva';
import React from 'react';

class SObject extends React.Component {
  render() {

    var width = window.innerWidth;
    var height = window.innerHeight;
              // сначала создаём контейнер
    var stage = new Konva.Stage({
      container: 'container',  // индификатор div контейнера
      width: width,
      height: height
    });

    // далее создаём слой
    var layer = new Konva.Layer({draggable: true});
    stage.add(layer);

    // создаём фигуру
    var Line = new Konva.Shape({
      sceneFunc: function(context) {
        context.beginPath();
        context.moveTo(20, 0);
        context.lineTo(20, 400);
        context.quadraticCurveTo(200, 200, 200, 200);
        context.closePath();

        // special Konva.js method
        context.fillStrokeShape(this);
      },
      fill: '#77DD77',
});

var Line1 = new Konva.Shape({
  sceneFunc: function(context) {
    context.beginPath();
    context.moveTo(400, 0);
    context.lineTo(400, 400);
    context.quadraticCurveTo(200, 200, 200, 200);
    context.closePath();

    // special Konva.js method
    context.fillStrokeShape(this);
  },
  fill: '#77DD77',
});

    // добавляем круг на слой
    layer.add(Line);
    layer.add(Line1);

      return (
        <div>
          
        </div>
      )
  }
}

 class App extends React.Component {
  render() {

      return (
        <div>
          <SObject/>
        </div>
      )
  }
}

export default App;