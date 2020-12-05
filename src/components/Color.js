import React from 'react';
import '../stylesheets/components/color.scss';

const Color = ({ index, rgb, hex, weight }) => {
	const darkOrLight = index > 10 && 'color-light';
	const colorRGB = `rgb(${rgb.join(',')})`;
	const colorHEX = `#${hex}`

	return (
		<article 
			key={index} 
			index={index} 
			className={`color ${darkOrLight}`}
			style={{backgroundColor: colorRGB}}
		>
			<p>{colorHEX}</p>
			<p>{weight}%</p>
		</article>
	)
};

export default Color;
