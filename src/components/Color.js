import React, { useState, useEffect } from 'react';
import '../stylesheets/components/color.scss';

const Color = ({ index, rgb, hex, weight }) => {
	const darkOrLight = index > 10 && 'color-light';
	const colorRGB = `rgb(${rgb.join(',')})`;
	const colorHEX = `#${hex}`

	const [isCopied, setIsCopied] = useState(false);

	const timeout = () => {
		setTimeout(() => { setIsCopied(false) }, 500);
	}

	useEffect(timeout, [isCopied]);

	const handleClick = () => {
		setIsCopied(true);
		navigator.clipboard.writeText(colorHEX);
	};

	return (
		<article 
			key={index} 
			index={index} 
			className={`color ${darkOrLight}`}
			style={{backgroundColor: colorRGB}} 
			onClick={handleClick}
		>
			<p>{colorHEX}</p>
			<p>{weight}%</p>
			{ isCopied && <p className="color_copy-message">Copied to clipboard</p> }
		</article>
	)
};

export default Color;
