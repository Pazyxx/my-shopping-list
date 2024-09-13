import React from 'react';
import './input-bubble.styles.scss';

const InputBubble = ({ onChange, width, height, placeholder, name, type = "text", value }) => {
    const handleChange = (event) => {
        onChange(name, event); // Pass the name prop along with the event
    };

    return (
        <input
            onChange={handleChange}
            style={{ width, height }}
            className="cart-product-name"
            type={type}
            placeholder={placeholder}
            name={name} // Ensure the name prop is passed here
            value={value}
        />
    );
}

export default InputBubble;