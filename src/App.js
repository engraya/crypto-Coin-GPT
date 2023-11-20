import './App.css';
import CoinList from './components/CoinList';
import Coin from './components/Coin';
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<CoinList/>} exact/>
        <Route path="/coin/:id" element={<Coin/>} exact/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
