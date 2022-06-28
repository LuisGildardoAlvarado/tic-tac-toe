import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import TDLogo from './components/TDLogo';

function App() {

  const [turn, setTurn] = useState("x");
  const [squares, setSquares] = useState(Array(9).fill(null));
  const[score, setScore] = useState({
    x:0,
    o:0,
  });

  const checkForWinner = squares => {
    setTurn(turn ==="x" ? "o" : "x");
  }

  const handleClick= square =>{
    let newSquares = [...squares];
    newSquares.splice(square, 1, turn);
    setSquares(newSquares);
    checkForWinner(newSquares);
  }

  return (
    <div className="App">
      <TDLogo />
      <Board turn={turn} squares={squares} onClick={handleClick}/>
    </div>
  );
}

export default App;
