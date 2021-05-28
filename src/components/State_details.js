import React from 'react';


const StateDetails=(props)=>{
    return(
        <div id="state-name">
                <div id="state-title">
                        {props.arrayStates[props.changedState].name}
                </div>
                <div id="state-description">
                {props.arrayStates[props.changedState].description}
                </div>
        </div>
    )
}


export default StateDetails;