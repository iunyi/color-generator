import React, { useState } from 'react';
import Input from './Input';
import ColorList from './ColorList';
import Values from 'values.js';
import '../stylesheets/App.css';

const App = () => {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);
      
    } catch (error) {
      setError(true);
    }
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setColor(value);
  }

  return (
    <div className="App">
      <header>
        <h1>Color Generator</h1>
        <Input 
          value={color} 
          handleSubmit={handleSubmit} 
          handleChange={handleChange} 
          className={`${error && 'error'}`}
        />
      </header>
      <main>
        <ColorList />
      </main>
    </div>
  );
}

export default App;
