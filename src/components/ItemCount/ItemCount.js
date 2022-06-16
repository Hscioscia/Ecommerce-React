import React, { useState } from 'react';
import '../ItemCount/ItemCount.css';

const ItemCount = () => { 

    const  [counter, setCounter] = useState(0);

    const counterUp = () =>{
    setCounter(counter + 1)
}

    const counterDown = () =>{
    setCounter(counter -1)
}

    return(
    <div className='counterC'>
        <p>Contador: {counter}</p>
        <div className='btnSection'>
        <button onClick={counterUp}>+</button>
        <button onClick={counterDown}>-</button>
        </div>
    </div>
 
)};

export default ItemCount;