import React from 'react';

function Dinner(props){
    
    return(
        <div>
<h1>Today we are Learning {props.libName}</h1>
<h1>We have learned how to make {props.Learn}</h1>
<h1>We have also learned how to pass {props.Learn1}</h1>
<h1>Happy {props.Code}</h1>
</div>
    )
}
export default Dinner;