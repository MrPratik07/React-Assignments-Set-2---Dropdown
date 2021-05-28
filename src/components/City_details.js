import React from 'react';


const CityDetails=(props)=>{
    return(
        <div id="city-name">
                <div id="city-title">
                        {props.arrayStates[props.changedState].city[props.changedCity].name}
                </div>
                <div id="city-description">
                {props.arrayStates[props.changedState].city[props.changedCity].description}
                </div>
        </div>
    )
}


export default CityDetails;