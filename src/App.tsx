import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Form } from 'react-bootstrap';
import { FirstQuestionSet } from './form-components/FirstQuestionSet';
import AiText from './components/AiText';

function App() {
  return (
    <div className="App">
      <h1>Connections AI</h1>
      <FirstQuestionSet></FirstQuestionSet>
      <h2>Your Advice</h2>
      
    </div>
  );
}
export default App;
