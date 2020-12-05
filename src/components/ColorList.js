import React from 'react';
import Color from './Color';

const ColorList = ({ colorList }) => {
    const colorListJSX = colorList.map((color, index) => {
        return (
            <Color 
                color={color.rgb} 
                key={index} 
                weight={color.weight}
            />
        )
    });

    return colorListJSX
};

export default ColorList;
