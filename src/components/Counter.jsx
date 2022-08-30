import React, { useState } from 'react';

const Counter = () => {

    const [counterTest, setCounterTest] = useState(0);

    const handleClickTest = () => {
        setCounterTest(counterTest + 1);
    }

    return (
        <div className='mt-2'>
            <button onClick={handleClickTest}>Ceci est un bouton avec un compteur</button>
            <span className='ms-2'>{counterTest}</span>
        </div>
    );
};

export default Counter;