import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import Button from './components/Button'
import Screen from './components/Screen';
import ClearButton from './components/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [ input, setInput ] = useState('');
  
  const addInput = value => {
    if (input == 'Insert a value') {
      setInput('')
    } else {
      setInput(input + value);
    }
  };

  const result = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      // alert("Please enter values ​​to perform the calculations")
      setInput('Insert a value')
    }
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-container'>
        <img 
        src = { freeCodeCampLogo }
        className = 'freecodecamp-logo'
        alt = 'freeCodeCamp Logo'
        />
      </div>
      <div className='calculator-container'>
        <Screen input = { input }/>
        <div className='line'>
          <Button clickManage = { addInput }>1</Button>
          <Button clickManage = { addInput }>2</Button>
          <Button clickManage = { addInput }>3</Button>
          <Button clickManage = { addInput }>+</Button>
        </div>
        <div className='line'>
          <Button clickManage = { addInput }>4</Button>
          <Button clickManage = { addInput }>5</Button>
          <Button clickManage = { addInput }>6</Button>
          <Button clickManage = { addInput }>-</Button>
        </div>
        <div className='line'>
          <Button clickManage = { addInput }>7</Button>
          <Button clickManage = { addInput }>8</Button>
          <Button clickManage = { addInput }>9</Button>
          <Button clickManage = { addInput }>*</Button>
        </div>
        <div className='line'>
          <Button clickManage = { result }>=</Button>
          <Button clickManage = { addInput }>0</Button>
          <Button clickManage = { addInput }>.</Button>
          <Button clickManage = { addInput }>/</Button>
        </div>
        <div className='line'>
          <ClearButton clearManage = { () => setInput('') }>
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
