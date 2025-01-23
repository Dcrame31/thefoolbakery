import fool from './images/TheFoolLogo.jpg'
import './App.css';
import Menu from './components/menu/menu.js';
import About from './components/about/about.js';
import Order from './components/order/order.js';
import Contact from './components/contact/contact.js';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import navbar from './components/navigation/navigation.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
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
