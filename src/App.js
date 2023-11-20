import './App.css';
import CoinList from './components/CoinList';
import Coin from './components/Coin';
import LandingPage from './components/LandingPage' 
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';
import image from './dark1.jpg'

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} exact/>
        <Route path="/coins" element={<CoinList/>} exact/>
        <Route path="/coin/:id" element={<Coin/>} exact/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
