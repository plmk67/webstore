import React from 'react';

const form = (props) => (
    <form >
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