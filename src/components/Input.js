import React from 'react'

const Input = (props) => {
    return (
        <section>
            <form onSubmit={props.handleSubmit}>
                <input 
                    value={props.value} 
                    onChange={props.handleChange} 
                    className={props.className} 
                    autoFocus
                />
                <button>Search</button>
            </form>
        </section>
    )
}

export default Input;