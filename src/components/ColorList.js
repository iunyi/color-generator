import React from 'react';
import Color from './Color';

const ColorList = ({ colorList }) => {
	const colorListJSX = colorList.map((color, index) => {
		return (
			<Color 
				index={index} 
				key={index} 
				rgb={color.rgb} 
				hex={color.hex}
				weight={color.weight} 
			/>
		)
	});
	
	return colorListJSX
};

export default ColorList;
