import React, { Component } from 'react';
import styled from 'styled-components';
import Carousel from './Carousel';


const HeaderStyle = styled.header`
/* background: var(--transparentBlack); */
.overlay_darken_img {
    background: black;
    opacity: 0.4;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
  }
`

class Header extends Component {
  render() {
    return (
      <>
        <HeaderStyle >
          <div className="overlay_darken_img"></div>
        </HeaderStyle>
        <Carousel />
      </>
    );
  }
}

export default Header;