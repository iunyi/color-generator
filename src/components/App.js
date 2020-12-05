import React, { useState } from 'react';
import Input from './Input';
import Title from './Title';
import ColorList from './ColorList';
import Values from 'values.js';
import '../stylesheets/App.css';

const App = () => {
	const [color, setColor] = useState('');
	const [error, setError] = useState(false);
	const [colorList, setColorList] = useState(new Values('#f15025').all(10));

	const handleSubmit = (e) => {
		e.preventDefault();

		try {
		let colors = new Values(color).all(10);
		console.log(colors)
		setColorList(colors);
		
		} catch (error) {
		setError(true);
		}
	};

	const handleChange = (e) => {
		const value = e.target.value;
		setColor(value);
	};

  return (
		<div className="App">
			<header>
				<Title />
				<Input 
				value={color} 
				handleSubmit={handleSubmit} 
				handleChange={handleChange} 
				className={`${error && 'error'}`}
				/>
			</header>
			<main>
				<ColorList colorList={colorList} />
			</main>
		</div>
  );
};

export default App;
