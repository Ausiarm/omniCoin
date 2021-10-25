import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, Name, Img } from './../StyledComponents';
import Spinner from '../Spinner/Spinner';
import { NavItem } from 'react-bootstrap';
import logo from '../../images/logo.png';



const NavBar = ({ user, activateUser }) => {

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

  const userName = user.name.split(' ')
  const profile = (<div className=" col-3">
    <div><Img src={user.photo} alt={user.name} height="45" width="45" /></div>
    <Name>{userName[0]}</Name>
  </div>)
    return (
          <Nav>
            <NavbarContainer className="col-12">
              <NavLogo className="col-3 m-auto " href="#home"><img src={logo} alt="Logo" height="35" width="35"/> omniCoin</NavLogo>
                <MobileIcon>
                  <FaBars />
                </MobileIcon> 
                  <NavMenu className="col-7">
                    <NavItem>
                      <NavLinks href="#about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                      <NavLinks href="#stocks">Stocks</NavLinks>
                    </NavItem>
                    <NavItem>
                      <NavLinks href="#guides">Guides</NavLinks>
                    </NavItem>
                    <NavItem>
                      <NavLinks href="#divedeeper">Dive Deeper</NavLinks>
                    </NavItem>
                    <NavItem>
              {!user.name ? <NavLinks href="/auth/google">Sign in with Google</NavLinks> :<NavLinks href="/api/logout">Sign out</NavLinks>}
                    </NavItem>
                   
                <NavItem>
      {user.name ? profile : null}
            </NavItem>
            
      {message ? <h3>{message}</h3> : null}
      {isLoading ? <Spinner /> : null}
          </NavMenu>
          <div className="col-2"></div>
            </NavbarContainer>
          </Nav>
    )
  }

  export default NavBar