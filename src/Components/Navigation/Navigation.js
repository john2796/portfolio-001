import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { device } from '../../Theme/MediaQueries';

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
    @media ${device.tablet}{
      color: red;
      display: none;
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
      color: red;
      display: block;
     }
    } 
  }
}

.navigation__btn {
  color: white;
  font-size:4rem;
  cursor:pointer;
  display: none;
}

@media ${device.tablet}{
  .navigation__btn {
  display: block;
}
  .open {
  display: block;
  color: orange;
  display: block;
  position: relative;
  left: 0;
  width: 100%;
  top:100;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.close {
  display: none;
}
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
        <nav>
          <div className="wrapper">
            <NavLink
              to="/"
              exact
              activeClassName="active"
            >Miranda</NavLink>
            <NavLink
              to="/"
              exact
              activeClassName="active"
              className={toggle}
            >Home</NavLink>
            <NavLink
              to="/about"
              activeClassName="active" className="nav__item"
              className={toggle}
            >About</NavLink>
            <NavLink
              to="/menu"
              activeClassName="active"
              className="nav__item"
              className={toggle}
            >Menu</NavLink>
            <NavLink
              to="/gallery"
              activeClassName="active" className="nav__item"
              className={toggle}
            >Gallery</NavLink>
            <NavLink
              to="/reservation"
              activeClassName="active"
              className="nav__item"
              className={toggle}
            >Reservations</NavLink>
            <NavLink
              to="/location"
              activeClassName="active" className="nav__item"
              className={toggle}
            >Location</NavLink>
            <span
              className="navigation__btn"
              onClick={this.toggleHamburger}
            >x</span>
          </div>
        </nav>
      </NavigationWrapper >

    );
  }
}

export default Navigation;

