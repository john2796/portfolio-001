import React, { Component } from 'react';
import Testimonials from '../About/Testimonials';
import styled from 'styled-components'






import headerDecorator from '../../assets/home/header_decorator.png';
import Tabs from './Tab';

// gallery Photos
import gallery01 from '../../assets/gallery/gallery01.jpg';
import gallery02 from '../../assets/gallery/gallery02.jpg';
import gallery03 from '../../assets/gallery/gallery03.jpg';
import gallery04 from '../../assets/gallery/gallery04.jpg';
import gallery05 from '../../assets/gallery/gallery05.jpg';
import gallery06 from '../../assets/gallery/gallery06.jpg';
import gallery07 from '../../assets/gallery/gallery07.jpg';
import gallery08 from '../../assets/gallery/gallery08.jpg';
import gallery09 from '../../assets/gallery/gallery09.jpg';

const GalleryWrapper = styled.section`
    background: #141313;
.gallery__title {
  color: white; 
  padding-top: 35px; 
  &::before, &::after { 
    content: url(${headerDecorator});
    margin: 14px;
    color: var(--gold);
    vertical-align: center;
  } 
}

.gallery__content { 
  p { 
        text-align: center;
    font-family: "Cabin";
    font-weight: 400;
    font-style: italic;
    font-size: 1.7rem;
    color: var(--pTag);
    line-height: 1.5;
  }  
}

.content { 
  min-height: 876px;
  padding-bottom: 150px;
}

.gallery__flex__parent { 
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  justify-items:center;


  img {
    width: 100%;
  }

}
`


class Gallery extends Component {
  state = {
    active: "all"
  }

  render() {
    const content = {
      all:
        <div className="gallery__flex__parent">
          <img src={gallery01} alt="..." />
          <img src={gallery02} alt="..." />
          <img src={gallery03} alt="..." />
          <img src={gallery04} alt="..." />
          <img src={gallery05} alt="..." />
          <img src={gallery06} alt="..." />
          <img src={gallery07} alt="..." />
          <img src={gallery08} alt="..." />
          <img src={gallery09} alt="..." />
        </div>
      ,
      food: <div className="gallery__flex__parent">

        <img src={gallery09} alt="..." />
        <img src={gallery04} alt="..." />
        <img src={gallery07} alt="..." />
        <img src={gallery06} alt="..." />
      </div>
      ,
      restaurant: <div className="gallery__flex__parent">
        <img src={gallery01} alt="..." />
        <img src={gallery02} alt="..." />
        <img src={gallery04} alt="..." />
        <img src={gallery05} alt="..." />
        <img src={gallery07} alt="..." />
      </div>,
      desserts: <div className="gallery__flex__parent">
        <img src={gallery03} alt="..." />
        <img src={gallery05} alt="..." />
        <img src={gallery06} alt="..." />
        <img src={gallery07} alt="..." />
        <img src={gallery08} alt="..." />
      </div>
    }
    const { active } = this.state;
    return (
      <GalleryWrapper>
        <div className="gallery__content">
          <h2 className="gallery__title">Gallery</h2>
          <p>If a picture says a thousand words, then you can imagine how long it would  <br /> take to describe all our mouthwatering selections.</p>
        </div>
        <div className="gallery">

          <Tabs
            active={active}
            onChange={active => this.setState({ active })}
            onClick={this.shuffle}
          >
            <span key="all" >All Photos</span>
            <span key="food">Food</span>
            <span key="restaurant">Restaurant</span>
            <span key="desserts">Desserts</span>
          </Tabs>

          <div className="content">{content[active]}</div>
        </div>
        <Testimonials />
      </GalleryWrapper>
    );
  }
}


export default Gallery;