import './App.css';
import Homepage from './components/Homepage/Homepage';
import Menubar from './components/Menubar/Menubar';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Menubar />
      <Homepage />
    </div>
  );
}

export default App;
