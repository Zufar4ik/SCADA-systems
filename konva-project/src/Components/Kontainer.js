import React from 'react';
import { Group, Rect } from 'react-konva';


class Kontainer extends React.Component {
    render() {
        return (

            /* ----------- (Контейнер) ---------- */

            <Group draggable={true}>
                <Rect x={50} y={100} width={200} height={100} fill={'#2E8B57'} stroke={'#000000'} strokeWidth={1}
                    cornerRadius={[25, 25, 25, 25]}>
                </Rect>
                <Rect x={75} y={95} width={10} height={110} fill={'#696969'} stroke={'#000000'} strokeWidth={1} >
                </Rect>
            </Group>

        )
    }
}


export default Kontainer;
