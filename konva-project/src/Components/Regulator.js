import React from 'react';
import { Group, Line, Rect, Circle } from 'react-konva';


class Regulator extends React.Component {
    render() {
        return (

            /* ----------- Регулятор ---------- */

            <Group draggable={true}>
                <Rect x={670} y={350} width={60} height={25} fill={'green'} stroke={'#000000'} strokeWidth={1} />
                <Circle x={700} y={300} radius={60} fill={'green'} stroke={'#000000'} strokeWidth={1}></Circle>
                <Line points={[700, 240, 700, 360]} stroke={'#ffffff'} strokeWidth={4}></Line>
            </Group>

        )
    }
}


export default Regulator;
