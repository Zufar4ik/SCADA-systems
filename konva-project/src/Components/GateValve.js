import React from 'react';
import { Group, Line, Rect } from 'react-konva';


const blockJson = require('../data/coordinates.json');

class GataValve extends React.Component {
    render() {
        return (
            /* ----------- Задвижка ---------- */
            <Group draggable x={blockJson.gatevalve.position.x} y={blockJson.gatevalve.position.y}> 
                <Rect x={250} y={230} width={100} height={20} fill={'green'} stroke={'#000000'} strokeWidth={1} />
                <Rect x={295} y={300} width={10} height={-50} fill={'green'} stroke={'#000000'} strokeWidth={1} />
                <Line points={[300, 300, 350, 325, 350, 275]} closed={true} fill={'green'} stroke={'#000000'} strokeWidth={1}></Line>
                <Line points={[300, 300, 250, 275, 250, 325]} closed={true} fill={'green'} stroke={'#000000'} strokeWidth={1}></Line>
            </Group>
        )
    }
}


export default GataValve;




