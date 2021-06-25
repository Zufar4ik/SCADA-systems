import React from 'react';
import { Group, Line } from 'react-konva';


class IndGataValve extends React.Component {
    render() {
        return (

            /* ----------- Задвижка независимая ---------- */

            <Group draggable={true}>
                <Line points={[500, 500, 550, 525, 550, 475]} closed={true} fill={'#ffd29e'} stroke={'#000000'} strokeWidth={1}></Line>
                <Line points={[500, 500, 450, 475, 450, 525]} closed={true} fill={'#ffd29e'} stroke={'#000000'} strokeWidth={1}></Line>
            </Group>
        )
    }
}


export default IndGataValve;
