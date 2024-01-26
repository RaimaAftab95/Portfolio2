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
    key: 1,
    text: "This is the text for Slide 1",
  },
  {
    src: "/BOSHOP images/slide-bg-1.png",
    key: 2,
    text: "This is the text for Slide 2",
  },
  {
     src: "/BOSHOP images/shoe slider.jpg",
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

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    },5000); // Change slide every 5000 milliseconds (5 seconds)

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [activeIndex]);

  const slides = items.map((item) => {
    let textPositionClass = "";
    let imagePositionClass = "";

    switch (item.key) {
      case 1:
        textPositionClass = "text-right";
        imagePositionClass="image-left";
        break;
      case 2:
        textPositionClass = "text-right";
        imagePositionClass ="";
        break;
      case 3:
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
        <Row>
          <Col lg={6}>
            <img src={item.src} alt={item.altText} className={`img-fluid carousel-img ${imagePositionClass}`}/>
          </Col>
          <Col lg={6} className={`carousel-text ${textPositionClass}`}>
            <section className="simple-head" data-stellar-background-ratio="0.5">
              <Container fluid>
                <Row className="position-center-center">
                  <Col lg={8} className="text-left no-padding">
                    <span className="price"><small>Sale</small>$299.99</span>
                    <h4>The Latest Winter Products for 2018</h4>
                    <h1 className="extra-huge-text">look hot with 2018 style</h1>
                    <div className="text-btn">
                      <Button className=" add-to-cart-btn btn-shopnow">
                        SHOP NOW
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </Col>
        </Row>
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