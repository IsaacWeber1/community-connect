import React from 'react';
import logo from './logo2.jpg';
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
        <div>
        <img src= "https://thumbs.dreamstime.com/b/word-welcome-many-languages-sign-word-welcome-many-languages-sign-224727308.jpg" alt= "Picture" 
        width = {1600} 
        height = {300}/>
        </div>
      </header>
      <div className="App" style={{ marginLeft: '40px' }}>
        <FirstQuestionSet></FirstQuestionSet>
      </div>
    </>
  );
}
export default App;
