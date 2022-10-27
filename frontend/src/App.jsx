import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import NotesIndex from './pages/NotesIndex';
import NoteDetail from './pages/NoteDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' exact element={<NotesIndex />} />
          <Route path='/notes/:id' element={<NoteDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
