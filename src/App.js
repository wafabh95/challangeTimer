import React, { useEffect, useState } from 'react';
import './App.css';
import Times from './components/Times';

function App() {
  const [timeMs, setTimeMs] = useState(0)
  const [inter, setInter] = useState(false)

useEffect(() => {

  const interval = setInterval(() => { inter &&
    setTimeMs(timeMs + 1000);
  }, 1000);
return ()=>clearInterval(interval);
  
  
}, );
 const start = () => {
  if (!inter){
      setInter(true)
  } else {
      setInter(false)
  }   
  }
  const reset = () => {
    setTimeMs(0)
    setInter(false)
}   
  return (
    <div className="">
      <div className='buttons'>
                <Times ms={timeMs} />
                <input type='button' value={inter ? 'Pause' : 'Start'} className='startButton' onClick={start} />
                <input type='button' value='Reset' className='resetButton' onClick={reset} />
            </div>
    </div>
  );
}
export default App;
