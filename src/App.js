import fool from './images/TheFoolLogo.jpg'
import './App.css';
import menu from './components/menu/menu.js';
import about from './components/about/about.js';
import order from './components/order/order.js';
import contact from './components/contact/contact.js';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={menu}/>
        <Route path="/order" element={order}/>
        <Route path="/about" element={about}/>
        <Route path="/contact" element={contact}/>
      </Routes>
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
    
    </BrowserRouter>
    );
}

export default App;
