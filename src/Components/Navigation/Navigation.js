import React, { Component } from 'react';
import styled from 'styled-components';
import { device } from '../../Theme/MediaQueries';
import { NavLink } from 'react-router-dom';
import NavItems from './NavItems';

const NavigationWrapper = styled.div`
max-width:90%;
margin: 0 auto;
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
    color: red;
    
  .active{ 
    color: var(--gold);
  }


 a { 
  padding: 40px 0;
  margin-left: 37px;

  color: #fff;
    text-transform: uppercase;
    font-size: 1.4rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 500;
    line-height: 6px;
    border-bottom: 3px solid transparent;
    text-shadow: 0px 0px 1px transparent;
    
    @media ${device.laptopS}{
      font-size:1.1rem;
      margin-left: 22px;
    }
    
    

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
    @media ${device.tablet}{
      display: block;
     }
    } 
  }
}

.tablet {
  display: none;
}
/* tablet */
@media ${device.tablet}{
  .desktop__navigation {display: none}
  .tablet__navigation {
    display: flex;
    align-items:center;
  }
.navigation__btn {
  color: white;
  font-size:4rem;
  cursor:pointer;
 }
 .close{display:none}
}
.nav__wrapper {
  position: absolute;
  background: gray;
  color: gray;
  display: flex;
  flex-direction: column;
  width: 100%;
}
`

class Navigation extends Component {
  state = {
    isOpen: false
  }

  toggleHamburger = () => {
    this.setState((state, props) => {
      return {
        isOpen: !state.isOpen
      }
    })
  }

  render() {
    const { isOpen } = this.state
    let toggle = isOpen ? 'open' : 'close';
    return (

      <NavigationWrapper>
        <nav
          className="desktop__navigation"
        >
          <NavItems
            className="nav__item"
            navClass="wrapper desktop"
            toggleHamburger={this.toggleHamburger}
          />
        </nav>
        {/* ///////////////////////////////////////////////////////////////////////////////////// */}
        <nav
          className="tablet__navigation"
        >
          <NavLink
            to="/"
            exact
            activeClassName="active"
          >Miranda</NavLink>
          <span
            className="navigation__btn"
            onClick={this.toggleHamburger}
          >x</span>
        </nav>
        <div
          className={`${toggle} nav__wrapper`}
        >
          <NavLink
            to="/"
            exact
            activeClassName="active"
          >Home</NavLink>
          <NavLink
            to="/about"
            activeClassName="active"
          >About</NavLink>
          <NavLink
            to="/menu"
            activeClassName="active"
          >Menu</NavLink>
          <NavLink
            to="/gallery"
            activeClassName="active"
          >Gallery</NavLink>
          <NavLink
            to="/reservation"
            activeClassName="active"

          >Reservations</NavLink>
          <NavLink
            to="/location"
            activeClassName="active"
          >Location</NavLink>
        </div>



        {/* ////////////////////////////////////////////////////////////////////////////////// */}
      </NavigationWrapper >
    );
  }
}

export default Navigation;

