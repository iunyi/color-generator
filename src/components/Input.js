import React from 'react'

const Input = ({handleSubmit, value, handleChange, className}) => {
    return (
        <section className="input">
            <form onSubmit={handleSubmit}>
                <input 
                    value={value} 
                    onChange={handleChange} 
                    className={className} 
                    autoFocus
                />
                <button>Search</button>
            </form>
        </section>
    )
}

export default Input;