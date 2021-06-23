import React from 'react';
import { Stage, Layer, Rect, Line, Group, Circle } from 'react-konva';


class Regulator extends React.Component {
    render() {
        return (
            <div>
                <Stage>
                    <Layer>
                        <Group draggable={true}>
                            <Rect x={675} y={325} width={50} height={25} fill={'#77dd77'} stroke={'#000000'} strokeWidth={1} />
                            <Circle x={700} y={300} radius={40} fill={'#77dd77'} stroke={'#000000'} strokeWidth={1}></Circle>
                            <Line points={[700, 260, 700, 340]} stroke={'#ffffff'} strokeWidth={4}></Line>
                        </Group>
                    </Layer>
                </Stage>
            </div>
        )
    }
}


export default Regulator;
