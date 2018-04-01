//This is an example of stateless component. Means component  which does not uses state. 
//It only consists of functions NOT class

import React from 'react';

function Showclock(props) {
    return <h1>{props.time}</h1>
}

export default Showclock;
