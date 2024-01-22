import React, { Component } from "react";
import Slider from "react-slick";
import { PRODUCTS } from "../components/data";
import { Carousel, CarouselItem, Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

export default class MultipleItems extends Component {
  render() {
    var settings = {
      dots: true,
      infinite:true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <h2> card slider </h2>
        <Slider {...settings}>
          {/* <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div> */}
           {PRODUCTS.map((product) => (

<Card className="">
                <h1>Card</h1>
                <CardImg top width="50%" src={product.image} alt={product.name} />
                <CardBody>
                  <CardTitle>{product.name}</CardTitle>
                  <CardText>{product.description}</CardText>
                  <CardText>{`Price: $${product.price}`}</CardText>
                  {/* Add other product details as needed */}
                </CardBody>
              </Card>
  ))}
        </Slider>
      </div>
    );
  }
}