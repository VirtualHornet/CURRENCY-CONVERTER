import './App.css';
import Market from './pages/Market';
import ChooseUs from './pages/ChooseUs';
import Home from './pages/Home';
import Join from './pages/Join';



import { Navbar } from './pages/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='app-container'>
        <Home />
        <Market />
        <ChooseUs />
        <Join />
      </div>
      
    
        
    </div>
  );
}

export default App;
