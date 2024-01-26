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
import { PRODUCTS, bestSelling } from "../components/data";
import Carosal from "../components/Carosal";
import Carosal2 from "../components/Carosal2";
import Slider from "../components/Slider";
import { slidesData } from "../components/data";
import "../components/Slider.css";
import "./Home.css";
import "./PopularProducts.css";
import PopularProducts from "./PopularProducts";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";

export default function Home() {
  // hook to nevigate dont need to destructure we can call it directly
  const navigate = useNavigate();
  // use selector hook expects a call back func
  const reduxState = useSelector((state) => state);
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  // tabs state handling
  const [activeTab, setActiveTab] = useState("newArrival");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      //setProductList(PRODUCTS);
      // Set the product list based on the active tab
      setProductList(activeTab === "newArrival" ? PRODUCTS : bestSelling);
    }, 1000);
  }, [activeTab]);

  // handle tabs
  const handleTabChange = (tab) => {
    if (tab !== activeTab) {
      setActiveTab(tab);
      setProductList([]);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setProductList(tab === "newArrival" ? PRODUCTS : bestSelling);
      }, 1000);
    }
  };

  const onPressDetails = (id) => {
    navigate("/productDetail/" + id);
  };
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    console.log("addto cart func");
    //dispatch(addToCart(product));
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <Container fluid>
      <Slider slides={slidesData} />
      <Container fluid className="mt-5">
        <Nav tabs className="mt-5">
          <NavItem>
            <NavLink
              className={
                activeTab === "newArrival" ? "active darkcolor" : "tabcolor"
              }
              onClick={() => handleTabChange("newArrival")}
            >
              New Arrival
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={
                activeTab === "bestSelling" ? "active darkcolor" : "tabcolor"
              }
              onClick={() => handleTabChange("bestSelling")}
            >
              Best Selling
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
      <section>
        <div className="mt-5 mb-5  aligntext-center">
          <h4 className="heading">Best Collection Arrived</h4>
          <span className="plain-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            faucibus maximus vehicula.
          </span>
        </div>
        {loading ? (
          <div className="my-spinner">
            <Spinner color="primary" className="">
              Loading...
            </Spinner>
          </div>
        ) : null}
        <Row>
          {productList.map((item, index) => (
            <Col key={`${index}`} xs="12" sm="4" md="4" lg="2">
              <Card
                className="p-2 mt-4"
                onClick={() => onPressDetails(item.id)}
              >
                <img
                  alt="Sample"
                  src={item.image}
                  className="img-fluid zoom-card-image card-image-100"
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
            </Col>
          ))}
        </Row>
      </section>
      <Container fluid className="mt-5">
        <Row>
          <Col sm={12} xs={12} md={6} lg={6}>
            <img
              className="img-fluid about-us-img"
              src="/BOSHOP images/history-img.jpg"
            />
          </Col>
          <Col sm={12} xs={12} md={6} lg={6}>
            <div class="about-us-con mx-5">
              <h3 className="mt-1">A Brief History of the BoShop</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nibh dolor, efficitur eget pharetra ac, cursus
                sedsapien. Cras posuere ligula ut blandit varius. Nunc
                consectetur scelerisque felis, et volutpat massa aliquam in.
              </p>
              <h6>
                1950 <span></span> 1999
              </h6>
              <p>
                Lorem ipsum dolor sit amet, efficitur eget pharetra ac,
                cursussed sapien. Cras posuere ligula ut blandit varius.
                Nuncconsectetur scelerisque felis. consectetur adipiscing
                elit.Maecenas nibh dolor
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
      <Container fluid className="mt-5 mb-5">
        <Row>
          <Col sm={12} xs={12} md={6} lg={6}>
            <div className="about-us-con">
              <h3>Fully Customizability Options Look Beautiful in 2018</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nibh dolor, efficitur eget pharetra ac, cursus sed
                sapien. Cras posuere ligula ut blandit varius.
              </p>
              <ul className="order-info mt-5">
                <li>
                  <img
                    className="img-fluid image-50"
                    src="/BOSHOP images/sewing.png"
                  />
                  <h5 className="mt-5">Fully Customizability</h5>
                </li>
                <li>
                  <img
                    className="img-fluid image-50"
                    src="/BOSHOP images/handmade.png"
                  />
                  <h5 className="mt-5">Fully Hand Made</h5>
                </li>
                <li>
                  <img
                    className="img-fluid image-50"
                    src="/BOSHOP images/shirt.png"
                  />
                  <h5 className="mt-5">Elegant Looks</h5>
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
      <section>
        <div className="PopularProducts-bg p-5">
          <div className="mt-5 mb-5  aligntext-center">
            <h4 className="heading text-white">Popular Products</h4>
            <span className="plain-text text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              faucibus maximus vehicula.
            </span>
          </div>
          <PopularProducts />
        </div>
      </section>
      <section>
        <Container fluid>
          <Row>
            <Col>
              <h4></h4>
              <img></img>
              <img></img>
              <img></img>
              <img></img>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="shipment">
        <Container>
          <Row>
            <Col xs="12" sm="6" md="3">
              <div className="text-center">
                <img
                  className="img-fluid image-50"
                  src="/BOSHOP images/freeshipping.png"
                ></img>
                <h4 className="mt-2">Free Shipment Over 50$</h4>
              </div>
            </Col>
            <Col xs="12" sm="6" md="3">
              <div className="text-center">
                <img
                  className="img-fluid image-50"
                  src="/BOSHOP images/onlinesupport.png"
                ></img>
                <h4 className="mt-2">24/7 online Support</h4>
              </div>
            </Col>
            <Col xs="12" sm="6" md="3">
              <div className="text-center">
                <img
                  className="img-fluid image-50"
                  src="/BOSHOP images/credit-card.png"
                ></img>
                <h4 className="mt-2">100% Secure Payment</h4>
              </div>
            </Col>
            <Col xs="12" sm="6" md="3">
              <div className="text-center">
                <img
                  className="img-fluid image-50"
                  src="/BOSHOP images/fast-delivery.png"
                ></img>
                <h4 className="mt-2">World Wide Shipment</h4>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Carosal className="my-5" />
    </Container>
  );
}
