import React from 'react';

const StateDropDown=(props) => {
    return (
        <div>
            <label for="states">States : </label>
            <select name="state" id="state" onChange={props.changing}>
                {props.arrayStates.map(function(eState,indexState)
                {
                    return <option value={indexState}>{eState.name}</option>
                }
                
                )
                }
            </select>
            
        </div>
    )
}

export default StateDropDown;