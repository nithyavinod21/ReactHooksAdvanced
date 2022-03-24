import React,{useRef} from 'react';

const RefComp = () => {
    const textInpRef = useRef(null);
    const buttonClick =() => textInpRef.current.focus();
    return(
        <>
        <input type="text" ref ={textInpRef} />
        <button onClick={buttonClick}>Focus on the Text</button>
        </>
    );
}
export default RefComp