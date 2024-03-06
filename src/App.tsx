import React from 'react';
import headerImg from './Background.jpg';
import './App.css';
//import { Form } from 'react-bootstrap';
import { FirstQuestionSet } from './Components/FirstQuestionSet';
//import { Header } from 'react-bootstrap/lib/Navbar';

function App() {
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
        <FirstQuestionSet></FirstQuestionSet>
      </div>
    </>
  );
}
export default App;
