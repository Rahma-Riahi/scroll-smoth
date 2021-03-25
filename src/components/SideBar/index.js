import React from 'react'
import {SideBarContainer, Icon, CloseIcon 
    ,SideBarWrapper, SideBarMenu, SideBarLink, SideBtnWrap,SideBarRoute} from './SideBarElement'
function SideBar({isOpen, toggel}) {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggel} >
            <Icon onClick={toggel} >
                <CloseIcon/>
            </Icon>
            <SideBarWrapper>
              <SideBarMenu>
                   <SideBarLink to='about' onClick={toggel}>About</SideBarLink>
                   <SideBarLink to='discover' onClick={toggel}>Discover</SideBarLink>
                   <SideBarLink to='services'onClick={toggel}>Services</SideBarLink>
                   <SideBarLink to='signup'onClick={toggel}>Sign Up</SideBarLink>
              </SideBarMenu> 
              <SideBtnWrap>
                <SideBarRoute to='/signin' onClick={toggel} > SignIn</SideBarRoute>
              </SideBtnWrap> 
               
            </SideBarWrapper>
        </SideBarContainer>
    );
};

export default SideBar
