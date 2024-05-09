import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';

function App() {
  return (
    <Router>
      <HomePage />
    </Router>
  );
}

export default App;
