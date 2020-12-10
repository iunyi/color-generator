import React, { useState } from 'react';
import Input from './Input';
import Title from './Title';
import ColorList from './ColorList';
import Values from 'values.js';
import '../stylesheets/App.scss';

const App = () => {
	const [color, setColor] = useState('');
	const [error, setError] = useState(false);
	const [colorList, setColorList] = useState(new Values('#00A6A6').all(10));

	const handleSubmit = (e) => {
		e.preventDefault();

		const input = document.querySelector('input');
		const value = input.value;

		if (value) {
			input.classList.remove('error');
			input.classList.add('default');
			setError(false)

		} else if (!value ) {
			input.classList.remove('default');
			input.classList.add('error');
			setError(true);
		}

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
		const input = document.querySelector('input');

		if (!value || value) {
			input.classList.remove('error');
			input.classList.add('default');
			setError(false)
			value.fontcolor('pink');
		}

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
				className={`${error ? 'error' : 'default'}`}
				error={error}
				/>
			</header>
			<main>
				<section className="color-list">
					<ColorList colorList={colorList} />
				</section>
			</main>
		</div>
  );
};

export default App;
