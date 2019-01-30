import React from 'react';

const form = (props) => (
    <form >
        <label>{props.name}</label>
        <input 
            id={props.id} 
            name={props.name}
            placeholder={props.placeholder}
            type={props.type}
            onChange={props.input}
            />
    </form>
)

export default form