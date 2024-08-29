import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './Header/header.jsx';
import { Footer } from './Footer/footer.jsx';
import { History } from './pages/history.jsx';
import { App } from './Twiter.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <div style={{  }}>
      <Header/>
      
      <Routes>
        <Route path="/" element={<div style={{marginTop:'100px'}}><h1>El inicio me la pela</h1></div>} />
        <Route path="/history" element={<div style={{marginTop:'100px'}}><History/></div>   } />
        <Route path="/proyectos" element={<div style={{marginTop:'100px'}}> <App NombreImg={'quete'}inicial={false}/></div>} />
        <Route path="/revistas" element={<div style={{marginTop:'100px'}}><h1>Revistas</h1></div>} />
      </Routes>
      <Footer/>
    </div>
  </Router>
);