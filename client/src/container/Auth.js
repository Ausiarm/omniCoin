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
      {/* <div className="nav">
        <h2>omnisCoin</h2>
      <ul id="item">
      <li><a href="#about"><Button className="m-5 btn-secondary">About</Button></a></li>
      <li><a href="#stocks"><Button className="m-5 btn-secondary">Stocks</Button></a></li>
      <li><a href="#blog"><Button className="m-5 btn-secondary">Beginner Blog</Button></a></li>
      <li><a href="#articles"><Button className="m-5 btn-secondary">Articles</Button></a></li> */}
      {/* <li><a href="/auth/google"><Button className="m-5 btn-warning">Sign in with Google</Button></a></li>
      <li><a href="/api/logout"><Button className="m-5 btn-secondary">Sign out</Button></a></li> */}
      {/* </ul>
      <i id="bar" class="fa fa-bars" aria-hidden="true"></i>
      </div> */}
      {user.name ? <h1>Name: {user.name}</h1>:null}
      {user.name ? <h1>Email: {user.email}</h1>:null}
      {user.name ? <img src={user.photo} alt={user.name} height="100" width="100" /> : null}
      {message ? <h3>{message}</h3> : null}
      {isLoading ? <Spinner /> : null}
    </div>
  )
}
