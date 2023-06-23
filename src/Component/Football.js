import React, {Component} from 'react';
function Football(){
    const shoot=()=>{
        alert("great shot!");
    }
    return(
        <button onclick={shoot}>Take the shot!</button>
    );
}
export default Football;