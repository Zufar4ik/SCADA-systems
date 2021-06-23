import { Stage, Layer, Rect, Line, Group, Circle } from 'react-konva';
import React from 'react';
// import Regulator from './Regulator'

class CanvasHolst extends React.Component {
    render() {
        
        return (
            <div>
                <Stage width={window.innerWidth} height={window.innerHeight} >
                    <Layer>

                         {/* ----------- Задвижка ---------- */}

                        <Group draggable={true}>
                            <Rect x={250} y={230} width={100} height={20} fill={'#77dd77'} stroke={'#000000'} strokeWidth={1} />
                            <Rect x={295} y={300} width={10} height={-50} fill={'#77dd77'} stroke={'#000000'} strokeWidth={1} />
                            <Line points={[300, 300, 350, 325, 350, 275]} closed={true} fill={'#77dd77'} stroke={'#000000'} strokeWidth={1}></Line>
                            <Line points={[300, 300, 250, 275, 250, 325]} closed={true} fill={'#77dd77'} stroke={'#000000'} strokeWidth={1}></Line>
                        </Group>

                         {/* ----------- Задвижка независимая ---------- */}

                        <Group draggable={true}>
                            <Line points={[500, 500, 550, 525, 550, 475]} closed={true} fill={'#ffd29e'} stroke={'#000000'} strokeWidth={1}></Line>
                            <Line points={[500, 500, 450, 475, 450, 525]} closed={true} fill={'#ffd29e'} stroke={'#000000'} strokeWidth={1}></Line>
                        </Group>

                         {/* ----------- Регулятор ---------- */}

                        <Group draggable={true}>
                            <Rect x={670} y={350} width={60} height={25} fill={'#77dd77'} stroke={'#000000'} strokeWidth={1} />
                            <Circle x={700} y={300} radius={60} fill={'#77dd77'} stroke={'#000000'} strokeWidth={1}></Circle>
                            <Line points={[700, 240, 700, 360]} stroke={'#ffffff'} strokeWidth={4}></Line>
                        </Group>

                         {/* ----------- (Контейнер) ---------- */}

                        <Group draggable={true}>
                            <Rect x={50} y={100} width={200} height={100} fill={'#2E8B57'} stroke={'#000000'} strokeWidth={1} cornerRadius={[25, 25, 25, 25]}></Rect>
                            <Rect x={75} y={95} width={10} height={110} fill={'#696969'} stroke={'#000000'} strokeWidth={1} ></Rect>
                        </Group>
                        

                    </Layer>
                </Stage>
            </div>
        )
    }
}

export default CanvasHolst;
