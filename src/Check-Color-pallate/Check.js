import React from 'react';

export const Check = ({ style = {}, color = '#000000', size = '100%', className = '', viewBox = '0 0 24 24' }) => (
	<svg
		width={size}
		style={style}
		height={size}
		viewBox={viewBox}
		xmlns='http://www.w3.org/2000/svg'
		className={`svg-icon ${className || ''}`}
		xmlnsXlink='http://www.w3.org/1999/xlink'
	>
		<path fill={color} d='M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z' />
	</svg>
);
