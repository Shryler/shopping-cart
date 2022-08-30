import React, { useState } from 'react';

const OnChange = () => {

    const [newText, setNewText] = useState("");

    const handleChange = (value) => {
        setNewText(value);
    }

    return (
        <div className='mt-2'>
            <input type="text" onChange={(e) => handleChange(e.target.value)}/>
            <span className='ms-2 px-1 bg-dark text-light'>{newText}</span>
        </div>
    );
};

export default OnChange;