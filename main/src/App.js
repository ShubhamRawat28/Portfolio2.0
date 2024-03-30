import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Window from './components/window';
import Taskbar from './components/taskbar';
import VSCode from './pages/VSCode';

function App() {
  const [showWindowPopup, setShowWindowPopup] = useState(false);
  const togglePopUp = () => {
    setShowWindowPopup(!showWindowPopup);
    console.log('togglePopUp');
  };
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Window renderWindowPopup={showWindowPopup}/>} />
          <Route path="/vscode" element={<VSCode className='apps'/>} />
        </Routes>
        <Taskbar renderPopUp={togglePopUp}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
