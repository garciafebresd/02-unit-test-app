import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value = 10}) => {

    const [counter, setCounter] = useState( 1 );

    const handleAdd = () => {
        setCounter(counter + 1);
        // setCounter( (c) => c + 1 );
    }

    const handleSustract = () => setCounter(counter - 1);

    const handleReset = () => setCounter(value);

    return (
        <>
         <h1>CounterApp</h1>
         <h2>{ counter }</h2>
         <button onClick={ handleAdd }>Contador +1</button>
         <button onClick={ handleReset }>Reset</button>
         <button onClick={ handleSustract }>Subtract -1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;
