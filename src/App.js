import fool from './images/TheFoolLogo.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={fool} className="App-logo" alt="logo" />
        <p>
          Hello
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          '¯\_(ツ)_/¯'
        </a>
      </header>
    </div>
  );
}

export default App;
