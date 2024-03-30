import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Window from './components/window';
import Taskbar from './components/taskbar';
import VSCode from './pages/VSCode';
import OnLoadAnimation from './components/onLoadAnimation';

function App() {
  const [showWindowPopup, setShowWindowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const togglePopUp = () => {
    setShowWindowPopup(!showWindowPopup);
    console.log('togglePopUp');
  };

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 10000); // Adjust the duration as needed
  }, []);

  return (
    <BrowserRouter>
      {isLoading ? <div className="container h-screen w-6/12 mx-auto flex items-center justify-center z-10">
      <OnLoadAnimation text = 'What App programmer use 🤔' />
    </div>:
      <div>
        <Routes>
          <Route path="/" element={<Window renderWindowPopup={showWindowPopup}/>} />
          <Route path="/vscode" element={<VSCode className='apps'/>} />
        </Routes>
        <Taskbar renderPopUp={togglePopUp}/>
      </div>}
    </BrowserRouter>
  );
}

export default App;
