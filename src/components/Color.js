import React, { useState, useEffect } from 'react';

const Color = ({ index, rgb, hex, weight }) => {
	const lightOrDark = index > 10 && 'color-light';
	const grayOrGrayer = index > 14 && 'color-gray';
	const colorRGB = `rgb(${rgb.join(',')})`;
	const colorHEX = `#${hex}`;

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
			className={`color ${lightOrDark}`}
			style={{backgroundColor: colorRGB}} 
			onClick={handleClick}
		>
			{ 
				isCopied ? 
					<p className={`color_copy-message ${grayOrGrayer}`}>Copied to clipboard</p> 
					:
					(<>
						<p>{colorHEX}</p>
						<p>{weight}%</p>
					</>)
			}
		</article>
	)
};

export default Color;
