import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Nav from './components/Nav';
import AddChore from './pages/AddChore';
import Login from './pages/Login';
import React, { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  const [chores, setChores] = useState([]);

  const addChore = (chore) => {
    setChores([...chores, chore]);
  };

  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path='/' element={<Home chores={chores} setChores={setChores} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/add-chore' element={<AddChore addChore={addChore} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;