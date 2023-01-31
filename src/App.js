// React
import React, { useEffect } from 'react';

// Components
import Header from "./components/Header";
import Sidebar from './components/Sidebar';
import Feed from "./components/Feed";
import Login from './components/Login';
import Widgets from './components/Widgets';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Firebase
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

// CSS
import './App.css';

const App = () => {
  const user = useSelector(selectUser); 
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged( userAuth => {
      if(userAuth) {
        dispatch(
            login({
              email: userAuth.email,
              uid: userAuth.uid,
              displayName: userAuth.displayName,
              photoUrl: userAuth.photoUrl
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [])

  return (
    <div className="app">

      { !user ? <Login /> : (
        <>
          <Header />
          <div className="app__body">
              <Sidebar />
              <Feed />
              <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;