import React from 'react';
import Konva from 'konva';


        const width = window.innerWidth;
        const height = window.innerHeight;

        const Stage = new Konva.Stage({
            container: 'container',
            width: width,
            height: height,
        });


export default Stage;