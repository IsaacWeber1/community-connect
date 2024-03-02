import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Form } from 'react-bootstrap';
import { FirstQuestionSet } from './form-components/FirstQuestionSet'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <FirstQuestionSet></FirstQuestionSet>
    </div>
  );
}
export default App;
