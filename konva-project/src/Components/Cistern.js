import React from 'react';
import { Group, Rect, Ellipse } from 'react-konva';




class Cistern extends React.Component {



    render() {
        return (

            /* ----------- Регулятор ---------- */

            <Group draggable={true}>
                <Rect x={325} y={430} width={250} height={125} fill="white" stroke={'#00000'} strokeWidth={1}></Rect>
                <Ellipse x={450} y={554} radiusX={125} radiusY={25} fill={'#ffffff'} stroke={'#000000'} strokeWidth={1}></Ellipse>
                <Ellipse x={450} y={430} radiusX={125} radiusY={25} fill={'#ffffff'} stroke={'#000000'} strokeWidth={1}></Ellipse>
            </Group>

        )
    }
}


export default Cistern;
