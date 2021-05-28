import React from 'react';


const TownDropDown = (props) =>{
    return (
        <div>
            <label for="town">Town : </label>
            <select name="town" id="town" onChange={props.changing}>
            {
                props.arrayStates.map(function(eState,indexState){
                    
                    
                    if(indexState==props.changedState){
                        return eState.city.map((eCity,indexCity)=>{
                            
                            if(indexCity==props.changedCity){
                            return eCity.landmarks.map((eTown,indexTown)=>{
                                return <option value={indexTown}>{eTown.name}</option>

                            })
                           
                            }    
                            
                        })
                    
                    }
                })

            }            
            </select>
         </div>
    )
}

export default TownDropDown;