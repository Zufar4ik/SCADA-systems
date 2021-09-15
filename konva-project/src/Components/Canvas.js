import Regulator from './Regulator';
import Kontainer from './Kontainer';
import СontrolUnit from './СontrolUnit';
import GataValve from './GateValve';
import Flag from './Flag';
import IndGataValve from './IndGateValve';
import React, { } from "react";
import { Stage, Layer, Rect, Circle, Line, Group } from "react-konva";
import Konva from "konva";




class CanvasHolst extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rects: [], circles: [], indrects: [], kontainers: [], controlunits: [], flags: [] };
  }

  render() {
    return (
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        ref="stageReference"
      >
        <Layer>


          {/* Добавление Задвижки */}


          <Rect
            ref="draggableRectReference"
            x={20}
            y={20}
            width={50}
            height={50}
            fill={'green'}
            shadowBlur={5}
            draggable={true}
            onDragEnd={() => {
              var draggableRect = this.refs.draggableRectReference;
              this.setState({
                rects: [
                  ...this.state.rects,
                  {
                    x: draggableRect.getStage().getPointerPosition().x,
                    y: draggableRect.getStage().getPointerPosition().y,
                    draggable: true
                  }
                ]
              });
              draggableRect.position({ x: 20, y: 20 });
              this.refs.stageReference.draw();
            }}
          />

          {/* Добавление Регулятора */}

          <Group ref="draggableCircleReference"
            radius={30}
            fill={'green'}
            shadowBlur={5}
            draggable={true}
            onDragEnd={() => {
              var draggableCircle = this.refs.draggableCircleReference;
              this.setState({
                circles: [
                  ...this.state.circles,
                  {
                    x: draggableCircle.getStage().getPointerPosition().x,
                    y: draggableCircle.getStage().getPointerPosition().y,
                    draggable: true
                  }
                ]
              });
              draggableCircle.position({ x: 0, y: 0 });
              this.refs.stageReference.draw();
            }}
          >
            <Rect x={105} y={70} width={30} height={15} fill={'green'} stroke={'#000000'} strokeWidth={1} shadowBlur={3} />
            <Circle x={120} y={45} radius={30} fill={'green'} stroke={'#000000'} strokeWidth={1} shadowBlur={3}></Circle>
            <Line points={[120, 15, 120, 75]} stroke={'#ffffff'} strokeWidth={4}></Line>
          </Group>

          {/* Добавление Независимой Задвижки */}


          <Rect
            name='IndRect'
            ref="draggableIndRectReference"
            x={170}
            y={20}
            width={50}
            height={50}
            fill={'#ffd29e'}
            shadowBlur={5}
            draggable={true}
            onDragEnd={() => {
              var draggableIndRect = this.refs.draggableIndRectReference;
              this.setState({
                indrects: [
                  ...this.state.indrects,
                  {
                    x: draggableIndRect.getStage().getPointerPosition().x,
                    y: draggableIndRect.getStage().getPointerPosition().y,
                    draggable: true
                  }
                ]
              });
              draggableIndRect.position({ x: 170, y: 20 });
              this.refs.stageReference.draw();
            }}
          />

          {/*  Доделать
          <Group draggable={true}>
            <Line points={[500, 500, 530, 515, 530, 485]} closed={true} fill={'#ffd29e'} stroke={'#000000'} strokeWidth={1}></Line>
            <Line points={[500, 500, 470, 485, 470, 515]} closed={true} fill={'#ffd29e'} stroke={'#000000'} strokeWidth={1}></Line>
          </Group> */}

          {/* Добавление Контейнера */}


          <Rect
            ref="draggableKontainerReference"
            x={250}
            y={20}
            width={80}
            height={50}
            cornerRadius={[10, 10, 10, 10]}
            fill={'#2E8B57'}
            shadowBlur={5}
            draggable={true}
            onDragEnd={() => {
              var draggableKontainer = this.refs.draggableKontainerReference;
              this.setState({
                kontainers: [
                  ...this.state.kontainers,
                  {
                    x: draggableKontainer.getStage().getPointerPosition().x,
                    y: draggableKontainer.getStage().getPointerPosition().y,
                    draggable: true
                  }
                ]
              });
              draggableKontainer.position({ x: 250, y: 20 });
              this.refs.stageReference.draw();
            }}
          />

          {/* Добавление панеля контроля */}

          <Rect
            ref="draggableControlUnitReference"
            x={350}
            y={20}
            width={40}
            height={50}
            fill={'#4F874F'}
            shadowBlur={5}
            draggable={true}
            onDragEnd={() => {
              var draggableControlUnit = this.refs.draggableControlUnitReference;
              this.setState({
                controlunits: [
                  ...this.state.controlunits,
                  {
                    x: draggableControlUnit.getStage().getPointerPosition().x,
                    y: draggableControlUnit.getStage().getPointerPosition().y,
                    draggable: true
                  }
                ]
              });
              draggableControlUnit.position({ x: 350, y: 20 });
              this.refs.stageReference.draw();
            }}
          />


        </Layer>
        <Layer>
          {this.state.rects.map(eachRect => {
            return (
              <GataValve />
            );
          })}
          {this.state.circles.map(eachCircle => {
            return (
              <Regulator />
            )
          })}
          {this.state.indrects.map(eachRect => {
            return (
              <IndGataValve />
            )
          })}
          {this.state.kontainers.map(eachRect => {
            return (
              <Kontainer />
            )
          })}
          {this.state.controlunits.map(eachRect => {
            return (
              <СontrolUnit />
            )
          })}
        </Layer>
      </Stage>
    );
  }
}


// ----------- Пример добавление в react ----------

// const CanvasHolst = () => {
//   const dragUrl = React.useRef();
//   const stageRef = React.useRef();
//   const [images, setImages] = React.useState([]);
//   return (

//     <div>
//       Добавление новых элементов
//       <br />
//       <img
//         src='https://sun9-70.userapi.com/impg/NdOmjOgRB-gqmmNEPcMgkxwVYN86srr8fQlUvw/h9xlXM_eR6Y.jpg?size=181x181&quality=96&sign=95fd3860db21b018cdbda19d79d248a7&type=album'
//         alt='Задвижка'
//         width='125'
//         draggable="true"
//         onDragStart={(e) => {
//           dragUrl.current = e.target.src;
//         }}
//       />

//       <img
//         src='https://sun9-14.userapi.com/impg/J1A4-RJRWML-eoQr_ZjiHxeC9Gl6Cs_htESx2Q/ka04xP5xRbM.jpg?size=186x135&quality=96&sign=5c58d443075158af4cf2a192ba6526d5&type=album'
//         alt='Независимая задвижка'
//         width='125'
//         draggable="true"
//       />

//       <img
//         src='https://sun9-71.userapi.com/impg/BESB7-yrHH00fGfmIFzeSyEnPcjCCCT3CqrdNw/uZUZsAP9LGc.jpg?size=182x188&quality=96&sign=0ef243a841b2a81bfc32f4d3ed5d6d72&type=album'
//         alt='Регулятор'
//         width='125'
//         draggable="true"
//       />

//       <img
//         src='https://sun9-73.userapi.com/impg/FxVuLkaJwFJp3aNM816U-e4NSVLH_wcy6HDN6A/10wG5bjAXNQ.jpg?size=189x277&quality=96&sign=259b23b4e729ef9ba55e169f78596f22&type=album'
//         alt='Панель управления'
//         width='90'
//         draggable="true"
//       />

//       <img
//         src='https://sun7-7.userapi.com/impg/vw3v-fnEeCvu-MuB6ebGq8KQ17GZpAvpBc-XHg/rcVqqFxEEGo.jpg?size=168x243&quality=96&sign=96fcb8bb07a6831ebdd2c2a5e3833000&type=album'
//         alt='Флаг'
//         width='90'
//         draggable="true"
//       />

//       <img
//         src='https://sun9-88.userapi.com/impg/5lBNKBg3swG9rMoo5FjbO3wwGUQ9nDCzC5DgLg/fg2AF5OqYtk.jpg?size=298x162&quality=96&sign=cb0ac04fc911a5f7a176797b29418264&type=album'
//         alt='Контейнер'
//         width='250'
//         draggable="true"
//       />

//       <div
//         onDrop={(e) => {
//           console.log(e)
//           e.preventDefault();
//           stageRef.current.setPointersPositions(e);
//           setImages(
//             images.concat([
//               {
//                 ...stageRef.current.getPointerPosition(),
//                 src: dragUrl.current,
//               },
//             ])
//           );
//         }}
//         onDragOver={(e) => e.preventDefault()
//         }
//       >

//         <Stage
//           width={window.innerWidth}
//           height={window.innerHeight}
//           style={{ border: '1px solid grey' }}
//           ref={stageRef}
//         >
//           <Layer>

//             {images.map(() => {
//               return <GataValve />;
//             })}


//             {images.map((image) => {
//               return <IndGataValve />;
//             })}

//             {images.map((img) => {
//               if (img.alt == 'Регулятор') {
//                 return <Regulator />;
//               }
//               else {
//                 console.log('error')
//               }
//             })}


//             {images.map((image) => {
//               return <СontrolUnit />;
//             })}

//             {images.map((image) => {
//               return <Flag />;x
//             })}

//             {images.map((image) => {
//               return <Kontainer />;
//             })}


//             {images.map((image) => {
//               return <Kontainer />;
//             })}


//           </Layer>
//         </Stage>
//       </div>
//     </div>

//   )
// }

export default (CanvasHolst);
