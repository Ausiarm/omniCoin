import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'

export const AppContainer = styled.div`
    max-width: 800px;
    margin:0 auto;
    text-align:center;
    background-color:beige;
    border: 3px solid red;
`
export const Heading = styled.h1`
font-Size:28px;
font-Family:Garamond;
font-Color:red;
`
export const SelectHeading= styled.span`
font-Size:20px;
font-Family:'ariel'
`

export const SelectContainer = styled.div `
select {
  padding: 1em;
  border: none;
  box-shadow: none;
  background: transparent;
  -webkit-appearance: none;
  font-family: 'ariel';
  color: #ff1769;
  font-size: 1em;
  max-width: 250px;
  white-space:nowrap;
  &:focus {
      outline: none;
  }
}
`

export const Nav = styled.div`
position: fixed;
overflow: hidden;
background-color: #ECE8D9;
display: flex;
flex-direction: row;
height: 80px;
justify-content: center;
align-items: center;
font-size: 1rem;
width: 100%;
top: 0;
z-index: 10;

@media screen and (max-width: 960px) {
  transition: 0.8s all ease;
}
`

export const NavbarContainer = styled.div`
position: fixed;
display: flex;
justify-content: space-between;
height: 30px;
z-index: 1;
width: 100%;
padding: 0 200px;
max-width: 1100px; 
`
export const NavLogo = styled.a`

display: flex;
justify-self: flex-start
cursor: pointer;
font-size: 1.5rem;
align-items: center;
margin-left: -190px;
font-weight: bold;
text-decoration: none;
position: fixed;
color: #9A8194
`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width:768px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100, 60%);
  font-size: 1.8rem;
  cursor: pointer;
}
`

export const NavMenu = styled.ul`
position: fixed;
flex-direction: row;
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;
float: right;
font-size: 20px;

@media screen and (max-width: 768px) {
  display: none;
}
`

export const NavItem = styled.li`
height: 8px;
position: fixed;
display: inline;
flex-direction: row;
`

export const Navbar = styled.div`
position: fixed;
display: flex;
flex-direction: row;
`

export const NavLinks = styled.a`
color: #7A5D7E;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active {
  border-bottom: 3px solid #01bf71;
}
`

export const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #0d0d0d;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen}) => ( isOpen ? '100%' : '0')};
top: ${({ isOpen}) => ( isOpen ? '0' : '-100%')};
`


export const CloseIcon = styled(FaTimes)`
color: #fff
`

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`

export const SidebarWrapper = styled.div`
color: #fff
`

export const SidebarMenu = styled.ul`
display: grid;
grid-template-column: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center;

@media screen and (max-width: 480px) {
  grid-template-rows: repeat(6, 60px);
}
`

export const SidebarLink = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
text-decoration: none;
color: #fff;
cursor: pointer;

&:hover {
  colour: #01bf71;
  transition: 0.2s ease-in-out;
}
`



