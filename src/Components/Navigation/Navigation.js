import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavigationWrapper = styled.div`
.wrapper { 
  display: flex;
  align-items:center;  
}

  nav { 
    position: relative ;
    z-index: 9999;
    background: var(--transparentBlack);
    box-shadow: 0 1px 3px rgba(0,0,0,0.11);
    -webkit-transition: all 0.3s ease-in;
    -o-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;
  .active{ 
    color: var(--gold);
  }

 a { 
  padding: 40px 0;
  color: var(--white);
  margin-left: 37px;


  &:hover { 
    color: var(--gold)!important;
  }
/* logo */
  &:first-child { 
    margin-right: auto;
    margin-left: 0px;
    font-size: 3rem;
    color: var(--gold);
    font-family: 'Oswald', sans-serif;
    font-weight:300;
    } 
  }
}
`

class Navigation extends Component {

  render() {
    return (
      <NavigationWrapper>
        <nav >
          <div className="wrapper">
            <NavLink to="/" exact activeClassName="active">Miranda</NavLink>
            <NavLink to="/" exact activeClassName="active" >Home</NavLink>
            <NavLink to="/about" activeClassName="active" className="nav__item">About</NavLink>
            <NavLink to="/menu" activeClassName="active" className="nav__item">Menu</NavLink>
            <NavLink to="/gallery" activeClassName="active" className="nav__item">Gallery</NavLink>
            <NavLink to="/reservation" activeClassName="active" className="nav__item">Reservations</NavLink>
            <NavLink to="/location" activeClassName="active" className="nav__item">Location</NavLink>
          </div>
        </nav>
      </NavigationWrapper>

    );
  }
}

export default Navigation;

