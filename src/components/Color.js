import React from 'react';

const Color = ({ color, index, weight }) => {
    const colorRGB = color.join(',');

    return (
        <div 
            key={index} 
            className="color" 
            style={{backgroundColor:`rgb(${colorRGB})`}}
        >
            <p>{color}</p>
            <p>{weight}%</p>
        </div>
    )
};

export default Color;
