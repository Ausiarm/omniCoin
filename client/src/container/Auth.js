import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap';

export default function Auth() {
  const [user, setUser] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  
  
  function getUser() {
    axios.get('/api/current_user')
  		.then((res) => {
        if (res.data) {
          setUser(res.data.googleId);
          setIsLoading(false);
  			}
  		})
  		.catch((res) => {
  			setMessage(res.data);
  			setUser('');
  		});
  }
  useEffect(() => {
     getUser()
  }, [])
  
  return (
    <div className="m-5">
      <a href="/auth/google"><Button className="m-5 btn-warning">Sign in with Google</Button></a>
      <a href="/api/logout"><Button className="m-5 btn-secondary">Sign out</Button></a>
      <h1>Google ID: {user}</h1>
    </div>
  )
}
