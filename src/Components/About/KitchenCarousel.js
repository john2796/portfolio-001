import React, { Component } from 'react';
import styled from 'styled-components';

import about04 from '../../assets/home/about04.jpg';
import about05 from '../../assets/home/about05.jpg';
import about06 from '../../assets/home/about06.jpg';






const KitchenCarouselWrapper = styled.div`
width: 89%;
   .slide {
     display: none;
    }
    .active { 
     display: block;
     position: relative;
   }
   img { 
     max-width: 100%;
     margin: 0 auto;
   }

   .kitchen__left_btn , .kitchen__right_btn {
     color: var(--white);
     border-radius: 50%;
     width: 49px;
         height: 49px;
         cursor: pointer;
    /* margin-left: 15px; */
      opacity: 0.7;
      -webkit-transition: all .3s ease-in-out;
      -moz-transition: opacity .3s ease-in-out;
      -o-transition: all .3s ease-in-out;
      transition: all .3s ease-in-out;
      background-color: rgba(255,255,255,.01);
        color: rgba(255,255,255,.01);
        color: gray;
        border-radius:50%;
        outline: none;

          &:hover {
             opacity: 1;
          }
          &:active{
            transform: translateY(4px);
          }
   }

   .kitchen__left_btn i , .kitchen__right_btn i { 
     font-size: 2.5rem;
     display: flex;
     align-items: center;
     justify-content: center;
   }

   .kitchen__left_btn { 
    position: absolute;
    top: 40%;
    left: 25px;

   }
   .kitchen__right_btn { 
    position: absolute;
    top: 40%;
    right: 25px;
   }


   .carousel__indicators {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;

  li {
    &:nth-of-type(n + 2) {
      margin-left: 9px;
    }
  }
}

.carousel__indicator {
  display: block;
  width: 13px;
  height: 13px;
    border-radius: 50%;
  background-color: #111;
  cursor: pointer;
  opacity: .15;
  transition: opacity .15s cubic-bezier(.4, 0, 1, 1);

  &:hover {
    opacity: .5;
  }

  &--active {
    &,
    &:hover {
      opacity: .75;
    }
  }
}

   
`

// Images
const items = [
  {
    src: about04,
    indicator: 0
  },
  {
    src: about05,
    indicator: 0
  },
  {
    src: about06,
    indicator: 0
  },
]

class KitchenCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    }
  }


  next = () => {
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous = () => {
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToSlide(newIndex) {
    this.setState({ activeIndex: newIndex });
  }


  render() {
    const { activeIndex } = this.state;
    const slides = items.map((images, index) => {
      let computedClass = index === activeIndex ? "slide active" : "slide";
      return (
        <div key={index} className={computedClass}>
          <img src={images.src} alt="..." />
          <button className="kitchen__left_btn" onClick={this.previous}>
            <i className="fas fa-caret-left"></i>
          </button>
          <button className="kitchen__right_btn" onClick={this.next}>
            <i className="fas fa-caret-right"></i>
          </button>

          {/* Indicators */}
          <ul className="carousel__indicators">
            {items.map((slide, index) =>
              <li key={index} className={
                index === activeIndex
                  ? "carousel__indicator carousel__indicator--active"
                  : "carousel__indicator"
              }
                onClick={(e) => this.goToSlide(index)}
              ></li>
            )}
          </ul>
        </div>
      )
    })
    return (
      <KitchenCarouselWrapper>
        {slides}
      </KitchenCarouselWrapper>
    );
  }
}

export default KitchenCarousel;