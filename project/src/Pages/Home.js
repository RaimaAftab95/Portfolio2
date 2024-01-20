import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Spinner,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import { addToCart } from "./redux/cart";
import { PRODUCTS } from "../components/data";
import Carosal from "../components/Carosal";
import Carosal2 from "../components/Carosal2";
// import Slider from "../components/Slider";
import Slider from "../components/Slider";
//import { slidesData } from "../components/slidesData";
import { slidesData } from "../components/data";
import "../components/Slider.css";
import "./Home.css";

export default function Home() {
  // hook to nevigate dont need to destructure we can call it directly
  const navigate = useNavigate();
  // use selector hook expects a call back func
  const reduxState = useSelector((state) => state);
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setProductList(PRODUCTS);
    }, 1000);
  }, []);

  const onPressDetails = (id) => {
    //alert(id);
    navigate("/productDetail/" + id);
    // navigate("/productDetailtrial/" + id);
  };
  const dispatch = useDispatch();
  // Addtocart fun call
  const handleAddToCart = (product) => {
    console.log("addto cart func");
    dispatch(addToCart(product));
  };

  return (
    // instead of div we wrap in container
    <Container fluid>
      {/* <Carosal2 /> */}
      <Carosal className="m-5" />
      {/* <Slider slides={Slider} />  */}
      <Slider slides={slidesData} />
      <div className="mt-5 mb-5">
        <h4>Best Collection Arrived</h4>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          faucibus maximus vehicula.{" "}
        </span>
      </div>

      <h3 className="mt-5">Products List</h3>
      {loading ? <Spinner color="primary">Loading...</Spinner> : null}
      <Row>
        {productList.map((item, index) => (
          <Col key={`${index}`} xs="12" sm="4" md="4" lg="2">
            <Card
              className="arrival-block"
              onClick={() => onPressDetails(item.id)}
            >
              <img
                alt="Sample"
                src={item.image}
                className="img-fluid"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
              <CardBody>
                <CardTitle tag="h5">{item.name}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Rs {item.price}
                </CardSubtitle>
                <CardText>Product Detail</CardText>

                <Button
                  className="add-to-cart-btn"
                  onClick={(event) => {
                    event.stopPropagation();
                    handleAddToCart(item);
                  }}
                >
                  <i class="fa-solid fa-cart-shopping"></i>
                  Add to Cart
                </Button>
              </CardBody>
            </Card>
            {/* </Link> */}
          </Col>
        ))}
      </Row>
      <Container fluid className="mt-5">
        <Row>
          <Col sm={12} xs={12} md={6} lg={6}>
            <img className="img-fluid" src="/BOSHOP images/history-img.jpg" />
          </Col>
          <Col sm={12} xs={12} md={6} lg={6}>
            <div class="about-us-con">
              <h3>A Brief History of the BoShop</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nibh dolor, efficitur eget pharetra ac, cursus sed
                sapien. Cras posuere ligula ut blandit varius. Nunc consectetur
                scelerisque felis, et volutpat massa aliquam in.
                <br />
                <br />
                Consectetur adipiscing elit. Maecenas nibh dolor, efficitur eget
                pharetra ac, cursus sed sapien.
              </p>
              <h6>
                1950 <span></span> 1999
              </h6>
              <p>
                Lorem ipsum dolor sit amet, efficitur eget pharetra ac, cursus
                sed sapien. Cras posuere ligula ut blandit varius. Nunc
                consectetur scelerisque felis. consectetur adipiscing elit.
                Maecenas nibh dolor
              </p>
              <h6>
                2000 <span></span> 2018
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nibh dolor, efficitur eget pharetra ac, cursus sed
                sapien.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="mt-5">
        <Row>
          <Col sm={12} xs={12} md={6} lg={6}>
            <div class="about-us-con">
              <h3>Fully Customizability Options Look Beautiful in 2018</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nibh dolor, efficitur eget pharetra ac, cursus sed
                sapien. Cras posuere ligula ut blandit varius.{" "}
              </p>
              <ul class="order-info d-flex">
                <li>
                  <img
                    className="img-fluid"
                    src="/BOSHOP images/sewing.png"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <h5>Fully Customizability</h5>
                </li>
                <li>
                  <img
                    className="img-fluid"
                    src="/BOSHOP images/handmade.png"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <h5>Fully Hand Made</h5>
                </li>
                <li>
                  <img
                    className="img-fluid"
                    src="/BOSHOP images/shirt.png"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <h5>Elegant Looks</h5>
                </li>
              </ul>
              <a href="#." class="btn btn-inverse">
                Order Now
              </a>
            </div>
          </Col>
          <Col sm={12} xs={12} md={6} lg={6}>
            <img className="img-fluid" src="/BOSHOP images/custom-img.jpg" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
