import './App.css';
import { useState } from 'react';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisabled] = useState(false);

  const newButtoncolor = buttonColor === 'red' ? 'blue' : 'red'

  return (
   <div>
    <button style={{backgroundColor:buttonColor}} 
      disabled={disabled}
      onClick={() => setButtonColor(newButtoncolor)}>Change to {newButtoncolor}
    </button>

    
    <input 
    type='checkbox'
    id='disable-button-checkBox'
    defaultChecked={disabled}
    onChange={(e)=>setDisabled(e.target.checked)}
    />
    <label htmlFor='disable-button-checkBox'>Disable button</label>
  </div>
  );
}

export default App;
