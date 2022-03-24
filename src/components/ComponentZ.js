import React ,{useContext} from 'react';
import {TopLevelContext} from "../App";

export const ComponentZ = () => {

 const topLevelData = useContext(TopLevelContext) ;   
  return (
    <div>
        <h1>Data from the Appp Component</h1>

        <h3>{topLevelData}</h3>

    </div>
  )
}
