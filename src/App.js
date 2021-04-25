import React from 'react';

import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';

import './styles/app.css';
import { useSelector } from 'react-redux';

import { selectSignedIn } from './features/userSlice';
import Blogs from './Components/Blogs';

const App = () => {

  const isSignedIn = useSelector(selectSignedIn)
  return (
    <div className='app'>
        <Navbar />
        <HomePage />
        { isSignedIn && <Blogs /> }
    </div>
  )
}

export default App;

