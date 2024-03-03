import React from 'react';
import logo from 'C:\\Users\\isaac\\OneDrive\\Desktop\\Code\\Git\\community-connect\\src\\logo2.jpg';
import './App.css';
import { Form } from 'react-bootstrap';
import { FirstQuestionSet } from './form-components/FirstQuestionSet';
import { Header } from 'react-bootstrap/lib/Navbar';

function App() {
  return (
    <>
      <header>
        <div className='App-header'>
          <h1 className='App-heading1'>Explorer</h1>
          <h3>^placeholder</h3>
          <img src={logo} alt="App Logo" style={{
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
