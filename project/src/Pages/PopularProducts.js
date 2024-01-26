import React, { Component } from "react";
import Slider from "react-slick";
import { PRODUCTS } from "../components/data";
import {
  Carousel,
  CarouselItem,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

export default class MultipleItems extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
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
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          {PRODUCTS.map((product) => (
            <Card className="card-border">
              <CardImg top width="50%" src={product.image} alt={product.name} />
              <CardBody>
                <CardTitle>{product.name}</CardTitle>
                {/* <CardText>{product.description}</CardText> */}
                <CardText>{`Price: $${product.price}`}</CardText>
              </CardBody>
            </Card>
          ))}
        </Slider>
      </div>
    );
  }
}
