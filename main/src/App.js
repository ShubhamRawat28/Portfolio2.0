import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { notification } from 'antd';
import './App.css';
import Window from './components/window';
import Taskbar from './components/taskbar';
import VSCode from './pages/VSCode';
import OnLoadAnimation from './components/onLoadAnimation';

function App() {
  const [showWindowPopup, setShowWindowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [toggleVs, setToggleVs] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const togglePopUp = () => {
    setShowWindowPopup(!showWindowPopup);
    console.log('togglePopUp');
  };
  const toggleVsHandle = () => {
    setToggleVs(true);
  };

  const openNotification = () => {
    api.open({
      message: 'Still Lost',
      description:
        'If you are Still wondering what app programmer use, then go to VS Code (Sorry for early website the window is not having many functionalities',
      duration: 0,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    let notificationTimer = setTimeout(() => {
      if (!toggleVs) {
        openNotification();
        setToggleVs(true);
      }
    }, 15000);
  
    return () => clearTimeout(notificationTimer);
  });

  return (
    <BrowserRouter>
      {contextHolder}
      {isLoading ? <div className="container h-screen w-6/12 mx-auto flex items-center justify-center z-10">
      <OnLoadAnimation text = 'What Application programmer use 🤔' />
    </div>:
      <div>
        <Routes>
          <Route path="/" element={<Window renderWindowPopup={showWindowPopup}/>} />
          <Route path="/vscode" element={<VSCode className='apps'/>} />
        </Routes>
        <Taskbar renderPopUp={togglePopUp} isVsOpen={toggleVsHandle}/>
      </div>}
    </BrowserRouter>
  );
}

export default App;
