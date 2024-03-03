import React from 'react';
import headerImg from './Background.jpg';
import './App.css';
import { Form } from 'react-bootstrap';
import { FirstQuestionSet } from './form-components/FirstQuestionSet';
import { Header } from 'react-bootstrap/lib/Navbar';

function App() {
  return (
    <>
      <header>
        <div className='App-header'>
          <img src={headerImg} alt="App Logo" style={{
            position: "relative"
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
