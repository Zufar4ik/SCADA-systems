import React from 'react';
import { Group, Rect } from 'react-konva';


class СontrolUnit extends React.Component {
    render() {
        return (

            /* ----------- (Блок) ---------- */

            <Group draggable>
                <Rect width={125} height={200} fill="green" stroke="black" strokeWidth="3" />
                <Rect width={25} height={25} fill="#4F874F" stroke="black" strokeWidth="2" />
                <Rect x={25} width={25} height={25} fill="#4F874F" stroke="black" strokeWidth="2" />
                <Rect x={50} width={25} height={25} fill="#4F874F" stroke="black" strokeWidth="2" />
                <Rect x={75} width={25} height={25} fill="#4F874F" stroke="black" strokeWidth="2" />
                <Rect x={100} width={25} height={25} fill="#4F874F" stroke="black" strokeWidth="2" />
                <Rect y={75} width={125} height={25} fill="#4F874F" stroke="black" strokeWidth="2" />
                <Rect y={75} width={125} height={25} fill="#4F874F" stroke="black" strokeWidth="3" />
                <Rect y={75} width={50} height={50} stroke="black" strokeWidth="3" />
                <Rect x={50} y={75} width={75} height={50} stroke="black" strokeWidth="3" />
            </Group>
        )
    }
}


export default СontrolUnit;
