
import React, { useReducer } from 'react';
import Auth from './Auth';
import { BrowserRouter, Route } from 'react-router-dom';
import reducer from '../utils/reducer'

function App() {

  const initialState = {
    googleId: '',
    name: '',
    email: '',
    photo:''
  }
  const[store,dispatch]=useReducer(reducer,initialState)
  const { googleId, name, email, photo } = store
  

  function activateUser(data) {
   dispatch({
     type: "setLoggedInUser",
     data:data
   })
  }
  const userInfo = { googleId, name, email, photo };
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/"><Auth user={userInfo} activateUser={activateUser}/></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
