import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import Spinner from './Spinner/Spinner';

export default function Auth({user,activateUser}) {
  
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  
  function getUser() {
    setIsLoading(true);
    axios.get('/api/current_user')
  		.then((res) => {
        if (res.data) {
          //setUser(res.data);
          activateUser(res.data);
  			}
  		})
  		.catch((res) => {
  			setMessage(res.data);
  			//setUser('');
      });
    setIsLoading(false);
  }
  useEffect(() => {
    getUser();
  },[])
  
  return (
    <div className="m-5">
      <a href="/auth/google"><Button className="m-5 btn-warning">Sign in with Google</Button></a>
      <a href="/api/logout"><Button className="m-5 btn-secondary">Sign out</Button></a>
      {user.name ? <h1>Name: {user.name}</h1>:null}
      {user.name ? <h1>Email: {user.email}</h1>:null}
      {user.name ? <img src={user.photo} alt={user.name} height="100" width="100" /> : null}
      {message ? <h3>{message}</h3> : null}
      {isLoading ? <Spinner /> : null}
    </div>
  )
}
