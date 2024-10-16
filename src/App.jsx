import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useEffect } from 'react';
import Home from './Routes/Home'
// import Project from './Routes/Project'
import Contact from './Routes/Contact'

function App() {
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/project" element={<Project />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
