import './App.css';
import Modal from './components/modal/modal';
import { useState } from "react";

function App() {  
  [position, setPosition] = useState(false)
  const change = () => {
    setPosition(!position)
  }
  return (
    <div className="App">
        <Modal onClick = {change} />
        
    </div>
  );
}

export default App;
