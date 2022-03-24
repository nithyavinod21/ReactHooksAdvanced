import React ,{useState} from 'react';
import { useTitle } from './CustomHook';
const Title1 = () => {
  const [record, setRecord] = useState(0);
    useTitle(record);
  return (
    <div>
      <h2>From Title 1 Component</h2>
      <button onClick={()=>setRecord(record + 1)}>Increase Count</button>
    </div>
  );
}

export default Title1;
