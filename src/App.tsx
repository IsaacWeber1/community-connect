import React, { useState } from 'react';
import { Budget } from './Components/Budget';
import headerImg from './Background.jpg';
import './App.css';
//import { Form } from 'react-bootstrap';
import { Questions } from './Components/Questions';
//import { Header } from 'react-bootstrap/lib/Navbar';

function App() {
  //const [categories, setCategoties] = useState<string>;

  return (
    <>
      <header>
        <div className='App-header'>
          <img src={headerImg} alt="App Logo" style={{
            position: "relative",
            width: "50%"
          }}/>
        </div>
      </header>
      <div className="App">
        <Questions></Questions>
        {/*<Budget></Budget>*/}
      </div>
    </>
  );
}
export default App;
