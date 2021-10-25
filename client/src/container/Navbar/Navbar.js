import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks} from './../StyledComponents';
import { NavItem } from 'react-bootstrap';



const NavBar = () => {
    return (
      <div>
         <div class="nav">
          <Nav>
            <NavbarContainer>
              <NavLogo href="#home">omnisCoin</NavLogo>
                <MobileIcon>
                  <FaBars />
                </MobileIcon> 
                  <NavMenu>
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
                      <NavLinks href="/auth/google">Sign in with Google</NavLinks>
                    </NavItem>
                    <NavItem>
                      <NavLinks href="/api/logout">Sign out</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
          </Nav>
        </div>
      </div>
    )
  }

  export default NavBar