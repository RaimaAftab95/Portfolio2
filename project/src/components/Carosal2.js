import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import { Container, Row, Col, Button } from 'reactstrap';
import "./carosal.css";

const items = [
  {
    //src: "/BOSHOP images/sliderimg3-purple.jpg",
    src: "/BOSHOP images/headphone.jpg",
    altText: "Slide 1",
    caption: "Slide 1",
    key: 1,
    text: "This is the text for Slide 1",
  },
  {
    src: "/BOSHOP images/slide-bg-1.png",
    altText: "Slide 2",
    caption: "Slide 2",
    key: 2,
    text: "This is the text for Slide 2",
  },
  {
    // src: "/BOSHOP images/hero_image.jpg",
     //src: "/BOSHOP images/slide2.jpg",
     src: "/BOSHOP images/shoe slider.jpg",
    altText: "Slide 3",
    caption: "Slide 3",
    key: 3,
    text: "This is the text for Slide 3",
  },
];


function Carosal(args) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    };
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    };
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    };
  
    const slides = items.map((item) => {
      let textPositionClass = "";
      let imagePositionClass = "";
  
      switch (item.key) {
        case 1:
          textPositionClass = "text-right";
          imagePositionClass = "image-left";
          break;
        case 2:
          textPositionClass = "text-right";
          imagePositionClass = "";
          break;
        case 3:
        //   textPositionClass = "text-center";
        textPositionClass = "text-right";
          imagePositionClass = "";
          break;
        default:
          textPositionClass = "text-left";
      }
  
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <div className="carousel-container">
            <img src={item.src} alt={item.altText} className={`img-fluid carousel-img ${imagePositionClass}`} />
            <div className={`carousel-text ${textPositionClass}`}>
              <Container fluid>
                <Row className="position-center-center">
                  <Col lg={8} className="text-left no-padding">
                    <span className="price"><small>$</small>299.99</span>
                    <h4>The Latest Winter Products for 2018</h4>
                    <h1 className="extra-huge-text">look hot with 2018 style</h1>
                    <div className="text-btn">
                      <Button href="#." color="inverse" className="btn margin-top-40 btn-inverse">
                        SHOP NOW
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });
  
    return (
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    );
  }
  
  export default Carosal;
  