import React from 'react';
import {useSelector} from 'react-redux';


export const DisplayStore = () => {

    const counter = useSelector(state => state.counter)
    return (
       <div>
           Value from store is = {counter}
       </div> 
    )
}