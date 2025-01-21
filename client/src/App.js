import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Nav from './components/Nav';
import AddChore from './pages/AddChore';
import React, { useState } from 'react';

function App() {
  const [chores, setChores] = useState([
    { id: 1, title: 'Clean the kitchen', description: 'Wash dishes and wipe surfaces', assignedTo: ['Alice'], completed: false },
    { id: 2, title: 'Do laundry', description: 'Wash and fold clothes', assignedTo: ['Bob'], completed: false },
    { id: 3, title: 'Grocery shopping', description: 'Buy groceries for the week', assignedTo: ['Charlie'], completed: false },
  ]);

  const addChore = (chore) => {
    setChores([...chores, chore]);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home chores={chores} setChores={setChores} />} />
          <Route path='/login' element={<div>Login Page</div>} />
          <Route path='/add-chore' element={<AddChore addChore={addChore} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;