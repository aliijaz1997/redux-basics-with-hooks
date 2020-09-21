import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
function Counter() {
    // const [counter, setCounter] = useState(0);
    const [input, setInput] = useState(0);
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter)
    return (
        <div >
            value of the counter is : {counter}
            <br />
            <button onClick={(() => {
                // setCounter(counter + 1)
                dispatch({type: "INCREMENT"})
            })}>Add</button>

            <button onClick={(() => {
                // setCounter(counter - 1)
                dispatch({type: "DECREMENT"})
            })}>Subtract</button>

            <input type="text" onChange={((e) => {
                setInput(e.target.value)
            })} />

            <button onClick={(() => {
                // setCounter(counter + Number(input))
                dispatch({type: "FORM", payload: Number(input)})
            })}>Submit</button>
        </div>


    );
}

export default Counter;
