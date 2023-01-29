import React from 'react';
import Header from "./components/Header";
import Sidebar from './components/Sidebar';
import Feed from "./components/Feed";
import Login from './components/Login';
import './App.css';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser); 

  return (
    <div className="app">

      { !user ? <Login /> : (
        <>
          <Header />
          <div className="app__body">
              <Sidebar />
              <Feed />
              {/* Widgets */}
          </div>
        </>
      )}
    </div>
  );
}

export default App;