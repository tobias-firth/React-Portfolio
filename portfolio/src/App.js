import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './components/pages/home';
import ProjectGallery from './components/pages/project-gallery';
import Contact from './components/pages/contact';


function App() {
  return (
    <Router>
    <div>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Project Gallery" element={<ProjectGallery />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
