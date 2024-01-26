import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  ButtonGroup,
} from "reactstrap";
import { PRODUCTS, bestSelling } from "../components/data";
import { addToCart } from "./redux/cart";
import { useSelector, useDispatch } from "react-redux";
import "./ProductDetail.css";
import { toast } from "react-toastify";

export default function ProductDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState("");
  const [activeTab, setActiveTab] = useState("newArrival");
  // activeTab is retrieved from the Redux state,
  //const activeTab = useSelector((state) => state.activeTab);
  // Fetch product data based on id
  useEffect(() => {
    const singleProduct = [...PRODUCTS, ...bestSelling].find(
      (item) => item.id === id
    );
    console.log("singleProduct", singleProduct);

    setTimeout(() => {
      setLoading(false);
      if (singleProduct) {
        setProduct(singleProduct);
        setActiveImage(singleProduct.image);
        setActiveTab(singleProduct.description);
      }
    }, 1000);
  }, [id, activeTab]);

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    console.log("addto cart func");
    dispatch(addToCart({ ...product, quantity }));
  };

  // Calculate total price based on quantity
  const calculateTotalPrice = () => {
    return product.price * quantity;
  };
  // Update the active image when a thumbnail is clicked
  const updateActiveImage = (image) => {
    setActiveImage(image);
  };
  // quantity func
  const DecQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      console.log("product detail page: product quantity", product, quantity);
    } else {
      console.log("Can't go below 1");
      toast.error("Too low quantity");
      console.log("product detail page: product quantity", product, quantity);
    }
  };

  const AddQuantity = () => {
    if (quantity < 25) {
      setQuantity(quantity + 1);
    } else {
      toast.error("Too high quantity out of stock");
    }
  };

  return (
    <Container className="topmargin">
      <h3 className="heading">Product Details</h3>
      {loading ? <Spinner color="primary">Loading...</Spinner> : null}
      <Row className="justify-content-center">
        <Col xs="12" sm="4" lg="6">
          <Card className="detail-card">
            <img
              alt="Sample"
              src={activeImage}
              className="img-fluid Pdmain-image"
            />
            <Row className="flex flex-row justify-between h-24 mt-5 p-5">
              {product.multipleimages &&
                product.multipleimages.map((image, index) => (
                  <Col key={index} xs={3}>
                    <img
                      src={image}
                      alt=""
                      className="img-fluid smPd-image"
                      onClick={() => updateActiveImage(image)}
                    />
                  </Col>
                ))}
            </Row>
            <CardBody>
              {/* <CardTitle tag="h5">{product.name}</CardTitle> */}
              {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
                Rs {product.price}
              </CardSubtitle> */}
              {/* <CardText>{product.description}</CardText> */}
              {/* <ButtonGroup>
                <Button onClick={DecQuantity}>-</Button>
                <Button>{quantity}</Button>
                <Button onClick={AddQuantity}>+</Button>
              </ButtonGroup>
              <br />
              <Button onClick={handleAddToCart}>Add to Cart</Button> */}
            </CardBody>
          </Card>
        </Col>

        <Col className="flex flex-col gap-4 lg:w-2/4 p-lg-5 p-4">
          <div>
            <h1 className="font-weight-bold">{product.name}</h1>
          </div>
          <p>DESCRIPTION</p>
          <p>{product.description}</p>
          <h4>Rs {product.price}</h4>

          {/*Rating */}
          <div>
            {Array.from({ length: product.rating }, (_, index) => (
              <span key={index} role="img" aria-label="star">
                ⭐
              </span>
            ))}
          </div>
<br></br>
<br></br>
          {/*Reviews */}
          {product.review && product.review.length > 0 && (
            <div>
              <h5>Reviews:</h5>
              {product.review.map((review, index) => (
                <div key={index}>
                  <p> "{review.text}"</p>

                  <span>{`Rating: ${review.rating}`}</span>
                  <hr></hr>
                </div>
              ))}
            </div>
          )}
          <Row className="flex flex-row items-center gap-12">
            <Col xs={6} className="flex flex-row items-center">
              <ButtonGroup>
                <Button className="add-to-cart-btn" onClick={DecQuantity}>
                  -
                </Button>
                <Button className="add-to-cart-btn">{quantity}</Button>
                <Button className="add-to-cart-btn" onClick={AddQuantity}>
                  +
                </Button>
              </ButtonGroup>
              <br />
              <br />
              <Button
                className="add-to-cart-btn w-100"
                onClick={handleAddToCart}
              >
                <i class="fa-solid fa-cart-shopping"></i> Add to Cart
              </Button>
              <h6 className="mt-5">Total Price: Rs {calculateTotalPrice()}</h6>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
