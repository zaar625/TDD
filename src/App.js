import './App.css';
import { useState } from 'react';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const newButtoncolor = buttonColor === 'red' ? 'blue' : 'red'

  return (
   <div>
    <button style={{backgroundColor:buttonColor}} onClick={() => setButtonColor(newButtoncolor)}>Change to {newButtoncolor}</button>
  </div>
  );
}

export default App;
