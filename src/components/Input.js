import React from 'react';

const Input = ({ handleSubmit, value, handleChange, className, error }) => {
  return (
    <section className="input">
      <form onSubmit={handleSubmit}>
        <input 
          value={value} 
          onChange={handleChange} 
          className={value === '' ?  'default' : className} 
          style={{color: `${error === true ? '#a5a5a5' : value}`}}
          autoFocus
        />
        <button><i class="fas fa-search"></i></button>
      </form>
    </section>
  )
};

export default Input;