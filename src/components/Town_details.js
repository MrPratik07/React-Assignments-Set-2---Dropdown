import React from 'react';


const TownDetails=(props)=>{
    return(
        <div id="town-name">
                <div id="town-title">
                        {props.arrayStates[props.changedState].city[props.changedCity].landmarks[props.changedTown].name}
                </div>
                <div id="town-description">
                {props.arrayStates[props.changedState].city[props.changedCity].landmarks[props.changedTown].description}
                </div>
        </div>
    )
}


export default TownDetails;