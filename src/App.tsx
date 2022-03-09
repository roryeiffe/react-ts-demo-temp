import React from 'react';
import './App.css';
import WelcomePage from './pages/welcomePage';
import AddPlayerPage from './pages/addPlayerPage';
import PlayerListPage from './pages/playerListPage';

import {Route, Routes} from 'react-router';

function App() {
  return (
    <div className="App">
      <h1>Rory's website</h1>
      <Routes>
        <Route path = "/" element = {<WelcomePage/>} />
        <Route path = "/add" element = {<AddPlayerPage/>}/>
        <Route path = "/view" element = {<PlayerListPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
