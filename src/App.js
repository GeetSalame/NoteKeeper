import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import Menubar from './components/Menubar/Menubar';
import Navbar from './components/Navbar/Navbar';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Readnote from './components/ReadNote/Readnote';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Menubar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/read' element={<Readnote />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
