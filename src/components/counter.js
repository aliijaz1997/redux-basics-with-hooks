import React, { useState } from 'react';

function Counter() {
    const [counter, setCounter] = useState(0);
    const [input, setInput] = useState(0)
    return (
        <div >
            value of the counter is : {counter}
            <br />
            <button onClick={(() => {
                setCounter(counter + 1)
            })}>Add</button>

            <button onClick={(() => {
                setCounter(counter - 1)
            })}>Subtract</button>

            <input type="text" onChange={((e) => {
                setInput(e.target.value)
            })} />

            <button onClick={(() => {
                setCounter(counter + Number(input))
            })}>Submit</button>
        </div>


    );
}

export default Counter;
