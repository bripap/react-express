import { useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [stateVar, setStateVar] = useState("");
  
  useEffect(() => {
    fetch("/users")
    .then(response => response.text())
    .then(data => {
      console.log(data);
      setStateVar(data);
    })
}, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Data from API: {stateVar}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
