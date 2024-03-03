import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Form } from 'react-bootstrap';
import { FirstQuestionSet } from './form-components/FirstQuestionSet';


function App() {
  return (
    <div className="App">
      <img src= "https://thumbs.dreamstime.com/b/word-welcome-many-languages-sign-word-welcome-many-languages-sign-224727308.jpg" alt= "Picture" 
      width = {1600} 
      height = {300}/>
      <h1>Connections AI</h1>
      <FirstQuestionSet></FirstQuestionSet>
      
      
    </div>
  );
}
export default App;
