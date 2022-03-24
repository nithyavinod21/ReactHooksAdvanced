import React,{useState} from 'react';
import { useTitle } from './CustomHook';
const Title2 = () => {
  const [record, setRecord] = useState(0);
  useTitle(record);
  return (
    <div>
      <h2>From Title 2 Component</h2>
      <button onClick={()=>setRecord(record - 1)}>Decrease Count</button>
    </div>
  );
}

export default Title2;
