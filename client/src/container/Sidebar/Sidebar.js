import React, {useState} from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './../StyledComponents';




const SideBar = () => {

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
      setIsOpen(!isOpen)
    };
  }
  
    return (
      <SidebarContainer>
        <Icon>
          <CloseIcon/>
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink href="#about">About</SidebarLink>
            <SidebarLink href="#stocks">Stocks</SidebarLink>
            <SidebarLink href="#guides">Guides</SidebarLink>
            <SidebarLink href="#divedeeper">Dive Deeper</SidebarLink>
            <SidebarLink href="#/auth/google">Sign in with Google</SidebarLink>
            <SidebarLink href="#/api/logout">Sign out</SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    )
  }

  export default SideBar