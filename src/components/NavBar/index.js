import React, { useEffect, useState } from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobilIcon, NavMenu,NavItem, NavLinks, NavBtn, NavBtnLink} from './NavBarElement'
import {animateScroll as scroll} from 'react-scroll';
function NavBar({toggel}) {
    const [scrollNav, setScrollNav] =useState(false);

    const changeNav = () =>{
        if(window.scrollY >= 80){
            setScrollNav(true);
            console.log('helllo')
        }else{
            setScrollNav(false)
        }
    }
    const toggelHome = () =>{
         scroll.scrollToTop()
    }
    useEffect(()=>{
        console.log('use effect')
        window.addEventListener('scroll',changeNav );

         // this will clean up the event every time the component is re-rendered
       return function cleanup() {
        window.removeEventListener('scroll', changeNav)
      }
    }, []);
    return (
        <>
          <Nav scrollNav={scrollNav}>
              <NavbarContainer>
                   <NavLogo to='/' onClick={toggelHome}>dolla</NavLogo>
                   <MobilIcon onClick={toggel} >
                       <FaBars/>
                   </MobilIcon>
                   <NavMenu>
                       <NavItem>
                            <NavLinks to='about'
                             smooth={true}
                             duration={500}
                             spy={true}
                             exact='true'
                             offset={-80}   
                            
                            > About</NavLinks>
                       </NavItem>
                       <NavItem>
                            <NavLinks to='discover' 
                             smooth={true}
                             duration={500}
                             spy={true}
                             exact='true'
                             offset={-80} 
                            > Discover</NavLinks>
                       </NavItem>
                       <NavItem>
                            <NavLinks to='services'
                             smooth={true}
                             duration={500}
                             spy={true}
                             exact='true'
                             offset={-80} 
                            > Services</NavLinks>
                       </NavItem>
                       <NavItem>
                            <NavLinks to='signup' 
                             smooth={true}
                             duration={500}
                             spy={true}
                             exact='true'
                             offset={-80} > Sign Up</NavLinks>
                       </NavItem>
                      
                   </NavMenu>
                   <NavBtn>
                           <NavBtnLink to='/signin'> Sign In</NavBtnLink>
                    </NavBtn>
              </NavbarContainer>
          </Nav>
        </>
    )
}

export default NavBar
