// import React, { useState } from "react";
// import {
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselCaption,
// } from "reactstrap";
// import "./carosal.css";
// import { Container, Row, Col, Button } from 'reactstrap';

// const items = [
//   {
//     src: "/BOSHOP images/sliderimg3-purple.jpg",
//     altText: "Slide 1",
//     caption: "Slide 1",
//     key: 1,
//     text: "This is the text for Slide 1",
//   },
//   {
//     src: "/BOSHOP images/slide-bg-1.png",
//     altText: "Slide 2",
//     caption: "Slide 2",
//     key: 2,
//     text: "This is the text for Slide 2",
//   },
//   {
//     src: "/BOSHOP images/slide2.jpg",
//     altText: "Slide 3",
//     caption: "Slide 3",
//     key: 3,
//     text: "This is the text for Slide 3",
//   },
// ];
// //
// function Carosal(args) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [animating, setAnimating] = useState(false);

//   const next = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
//     setActiveIndex(nextIndex);
//   };

//   const previous = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
//     setActiveIndex(nextIndex);
//   };

//   const goToIndex = (newIndex) => {
//     if (animating) return;
//     setActiveIndex(newIndex);
//   };

//   const slides = items.map((item) => {
//     let textPositionClass = "";

//     switch (item.key) {
//       case 1:
//         textPositionClass = "text-left";
//         break;
//       case 2:
//         textPositionClass = "text-right";
//         break;
//       case 3:
//         textPositionClass = "text-center";
//         break;
//       // Add more cases if you have additional slides

//       default:
//         textPositionClass = "text-left"; // Default to left for other slides
//     }

//     return (
//       <CarouselItem
//         onExiting={() => setAnimating(true)}
//         onExited={() => setAnimating(false)}
//         key={item.src}
//       >
//          <section className="simple-head" data-stellar-background-ratio="0.5">
//       <Container fluid>
//         <Row className="position-center-center">
//           <Col lg={8} className="text-left no-padding">
//             <span className="price"><small>$</small>299.99</span>
//             <h4>The Latest Winter Products for 2018</h4>
//             <h1 className="extra-huge-text">look hot with 2018 style</h1>
//             <div className="text-btn">
//               <Button href="#." color="inverse" className="btn margin-top-40">
//                 SHOP NOW
//               </Button>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//         <img src={item.src} alt={item.altText} />
//         <CarouselCaption
//           captionText={item.caption}
//           captionHeader={item.caption}
//         />
//         {/* <div className="carousel-text">{item.text}</div> */}
//         <div className={`carousel-text ${textPositionClass}`}>{item.text}</div>
//         <div className="carousel-buttons">
//           <button className="btn btn-primary">Button 1</button>
//           <button className="btn btn-secondary">Button 2</button>
//         </div>
//       </CarouselItem>
//     );
//   });

//   return (
//     <Carousel
//       activeIndex={activeIndex}
//       next={next}
//       previous={previous}
//       {...args}
//     >
//       <CarouselIndicators
//         items={items}
//         activeIndex={activeIndex}
//         onClickHandler={goToIndex}
//       />
//       {slides}
//       <CarouselControl
//         direction="prev"
//         directionText="Previous"
//         onClickHandler={previous}
//       />
//       <CarouselControl
//         direction="next"
//         directionText="Next"
//         onClickHandler={next}
//       />
//     </Carousel>
//   );
// }

// export default Carosal;


// *******2nd working slider


// import React, { useState } from "react";
// import {
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselCaption,
// } from "reactstrap";
// import { Container, Row, Col, Button } from 'reactstrap';
// import "./carosal.css";

// const items = [
//   {
//     src: "/BOSHOP images/sliderimg3-purple.jpg",
//     altText: "Slide 1",
//     caption: "Slide 1",
//     key: 1,
//     text: "This is the text for Slide 1",
//   },
//   {
//     src: "/BOSHOP images/slide-bg-1.png",
//     altText: "Slide 2",
//     caption: "Slide 2",
//     key: 2,
//     text: "This is the text for Slide 2",
//   },
//   {
//     src: "/BOSHOP images/slide2.jpg",
//     altText: "Slide 3",
//     caption: "Slide 3",
//     key: 3,
//     text: "This is the text for Slide 3",
//   },
// ];

// function Carosal(args) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [animating, setAnimating] = useState(false);

//   const next = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
//     setActiveIndex(nextIndex);
//   };

//   const previous = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
//     setActiveIndex(nextIndex);
//   };

//   const goToIndex = (newIndex) => {
//     if (animating) return;
//     setActiveIndex(newIndex);
//   };

//   const slides = items.map((item) => {
//     let textPositionClass = "";

//     switch (item.key) {
//       case 1:
//         textPositionClass = "text-left";
//         break;
//       case 2:
//         textPositionClass = "text-right";
//         break;
//       case 3:
//         textPositionClass = "text-center";
//         break;
//       default:
//         textPositionClass = "text-left"; // Default to left for other slides
//     }

//     return (
//       <CarouselItem
//         onExiting={() => setAnimating(true)}
//         onExited={() => setAnimating(false)}
//         key={item.src}
//       >
//         <Row>
//           <Col lg={6}>
//             <img src={item.src} alt={item.altText} className="img-fluid" />
//           </Col>
//           <Col lg={6} className={`carousel-text ${textPositionClass}`}>
//             <section className="simple-head" data-stellar-background-ratio="0.5">
//               <Container fluid>
//                 <Row className="position-center-center">
//                   <Col lg={8} className="text-left no-padding">
//                     <span className="price"><small>$</small>299.99</span>
//                     <h4>The Latest Winter Products for 2018</h4>
//                     <h1 className="extra-huge-text">look hot with 2018 style</h1>
//                     <div className="text-btn">
//                       <Button href="#." color="inverse" className="btn margin-top-40">
//                         SHOP NOW
//                       </Button>
//                     </div>
//                   </Col>
//                 </Row>
//               </Container>
//             </section>
//           </Col>
//         </Row>
//         <CarouselCaption
//           captionText={item.caption}
//           captionHeader={item.caption}
//         />
//       </CarouselItem>
//     );
//   });

//   return (
//     <Carousel
//       activeIndex={activeIndex}
//       next={next}
//       previous={previous}
//       {...args}
//     >
//       <CarouselIndicators
//         items={items}
//         activeIndex={activeIndex}
//         onClickHandler={goToIndex}
//       />
//       {slides}
//       <CarouselControl
//         direction="prev"
//         directionText="Previous"
//         onClickHandler={previous}
//       />
//       <CarouselControl
//         direction="next"
//         directionText="Next"
//         onClickHandler={next}
//       />
//     </Carousel>
//   );
// }

// export default Carosal;

// ****3rd trial
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
    // altText: "Slide 1",
    // caption: "Slide 1",
    key: 1,
    text: "This is the text for Slide 1",
  },
  {
    src: "/BOSHOP images/slide-bg-1.png",
    // altText: "Slide 2",
    // caption: "Slide 2",
    key: 2,
    text: "This is the text for Slide 2",
  },
  {
    // src: "/BOSHOP images/hero_image.jpg",
     //src: "/BOSHOP images/slide2.jpg",
     src: "/BOSHOP images/shoe slider.jpg",
    
    // altText: "Slide 3",
    // caption: "Slide 3",
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
    },50000000); // Change slide every 5000 milliseconds (5 seconds)

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [activeIndex]);

  const slides = items.map((item) => {
    let textPositionClass = "";
    let imagePositionClass = "";

    switch (item.key) {
      case 1:
        //textPositionClass = "text-left";
        textPositionClass = "text-right";
        imagePositionClass="image-left";
        break;
      case 2:
        textPositionClass = "text-right";
        imagePositionClass ="";
        break;
      case 3:
         //  textPositionClass = "text-center";
       textPositionClass = "text-right";
        imagePositionClass = "";
        break;
      default:
        textPositionClass = "text-left"; // Default to left for other slides
    }

    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <Row>
          <Col lg={6}>
            {/* <img src={item.src} alt={item.altText} className="img-fluid carousel-img" /> */}
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
                      <Button href="#." color="inverse" className="btn margin-top-40 btn-inverse">
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
