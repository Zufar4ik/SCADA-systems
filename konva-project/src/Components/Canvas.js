import { Stage, Layer } from 'react-konva';
import React from 'react';
import Regulator from './Regulator';
import Kontainer from './Kontainer';
import СontrolUnit from './СontrolUnit';
import GataValve from './GateValve';
import Flag from './Flag';
import IndGataValve from './IndGateValve';
import Cistern from './Cistern';



// ----------- Пример добавление в react ----------

const CanvasHolst = () => {
  const dragUrl = React.useRef();
  const stageRef = React.useRef();
  const [images, setImages] = React.useState([]);
  return (
    <div>
      Добавление новых элементов
      <br />
      <img
        src='https://sun9-70.userapi.com/impg/NdOmjOgRB-gqmmNEPcMgkxwVYN86srr8fQlUvw/h9xlXM_eR6Y.jpg?size=181x181&quality=96&sign=95fd3860db21b018cdbda19d79d248a7&type=album'
        alt='Задвижка'
        width='125'
        draggable="true"
        onDragStart={(e) => {
          dragUrl.current = e.target.src;
        }}
      />

      <img
        src='https://sun9-14.userapi.com/impg/J1A4-RJRWML-eoQr_ZjiHxeC9Gl6Cs_htESx2Q/ka04xP5xRbM.jpg?size=186x135&quality=96&sign=5c58d443075158af4cf2a192ba6526d5&type=album'
        alt='Независимая задвижка'
        width='125'
        draggable="true"
        onDragStart={(e) => {
          dragUrl.current = e.target.src;
        }}
      />

      <img
        src='https://sun9-71.userapi.com/impg/BESB7-yrHH00fGfmIFzeSyEnPcjCCCT3CqrdNw/uZUZsAP9LGc.jpg?size=182x188&quality=96&sign=0ef243a841b2a81bfc32f4d3ed5d6d72&type=album'
        alt='Регулятор'
        width='125'
        draggable="true"
        onDragStart={(e) => {
          dragUrl.current = e.target.src;
        }}
      />

      <img
        src='https://sun9-73.userapi.com/impg/FxVuLkaJwFJp3aNM816U-e4NSVLH_wcy6HDN6A/10wG5bjAXNQ.jpg?size=189x277&quality=96&sign=259b23b4e729ef9ba55e169f78596f22&type=album'
        alt='Панель управления'
        width='90'
        draggable="true"
        onDragStart={(e) => {
          dragUrl.current = e.target.src;
        }}
      />

      <img
        src='https://sun7-7.userapi.com/impg/vw3v-fnEeCvu-MuB6ebGq8KQ17GZpAvpBc-XHg/rcVqqFxEEGo.jpg?size=168x243&quality=96&sign=96fcb8bb07a6831ebdd2c2a5e3833000&type=album'
        alt='Флаг'
        width='90'
        draggable="true"
        onDragStart={(e) => {
          dragUrl.current = e.target.src;
        }}
      />

      <img
        src='https://sun9-88.userapi.com/impg/5lBNKBg3swG9rMoo5FjbO3wwGUQ9nDCzC5DgLg/fg2AF5OqYtk.jpg?size=298x162&quality=96&sign=cb0ac04fc911a5f7a176797b29418264&type=album'
        alt='Контейнер'
        width='250'
        draggable="true"
        onDragStart={(e) => {
          dragUrl.current = e.target.src;
        }}
      />

      <div
        onDrop={(e) => {
          e.preventDefault();
          stageRef.current.setPointersPositions(e);
          setImages(
            images.concat([
              {
                ...stageRef.current.getPointerPosition(),
                src: dragUrl.current,
              },
            ])
          );
        }}
        onDragOver={(e) => e.preventDefault()}
      >
        <Stage 
          width={window.innerWidth}
          height={window.innerHeight}
          style={{ border: '1px solid grey' }}
          ref={stageRef}
        >
          <Layer>
            {images.map((image) => {
              return <GataValve />;
            })}

            {images.map((image) => {
              return <IndGataValve />;
            })}

            {images.map((image) => {
              return <Regulator />;
            })}

            {images.map((image) => {
              return <СontrolUnit />;
            })}

            {images.map((image) => {
              return <Flag />;
            })}

            {images.map((image) => {
              return <Kontainer />;
            })}

            <Cistern />
          </Layer>
        </Stage>
      </div>
    </div>

  )
}

export default (CanvasHolst);

//  ------------- Фигуры ------------------

// class CanvasHolst extends React.Component {

//   render() {
//     return (


//       <div>
//         <Stage width={window.innerWidth} height={window.innerHeight} >
//           <Layer>
            // <Regulator />
            // <Kontainer />
            // <СontrolUnit />
            // <IndGataValve />
            // <GataValve />
            // <Flag />
//           </Layer>
//         </Stage>
//       </div>

//     )
//   }
// }


// export default (CanvasHolst);