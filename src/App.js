import React from 'react';
import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import Game from './tictactoe/Game'

function App() {
  return (
    <div className="App">
      <Game/>
    </div>
  );
}

export default App;
