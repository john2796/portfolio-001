import React, { Component } from 'react';
import styled from 'styled-components';
import { device } from '../../Theme/MediaQueries';
import NavItems from './NavItems';

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

.navigation__btn {
  color: white;
  font-size:4rem;
  cursor:pointer;
  display: none;
}

.tablet {
  display: none;
}
/* tablet */
@media ${device.tablet}{
.tablet {
  display: block;
  display: flex;

  .nav__item {
    color:red;
  }
}
  .desktop {
    display: none;
  }
  .navigation__btn {
    display: block;
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
          <NavItems
            className={`nav__item`}
            navClass="wrapper desktop"
            toggleHamburger={this.toggleHamburger}
          />
          <NavItems
            className={`${toggle} nav__item`}
            navClass="wrapper tablet"
            toggleHamburger={this.toggleHamburger}
          />
        </nav>
      </NavigationWrapper >

    );
  }
}

export default Navigation;

