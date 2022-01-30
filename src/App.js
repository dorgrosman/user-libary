

import './assets/scss/global.scss';
import { Provider } from 'react-redux'

import HomePage from './pages/HomePage';
import { contactList } from './store/Action/ContactAction';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

function App() {

  // const dispatch = useDispatch()


  // useEffect(() => {
  //     dispatch(contactList({}))
  // }, []);

  return (
    
      <div className="App">
        <HomePage />
      </div>
      
  );
}

export default App;
