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
import { PRODUCTS,  bestSelling  } from "../components/data";
import { addToCart } from "./redux/cart";
import { useSelector, useDispatch } from "react-redux";

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

    // Choose the product array based on the activeTab
    //const productsArray = activeTab === "newArrival" ? PRODUCTS : bestSelling;
// Choose the product array based on the activeTab
const productsArray =
activeTab === "newArrival" ? PRODUCTS : bestSelling;

const singleProduct = productsArray.find((item) => item.id === id);
console.log("singleProduct", singleProduct);
    //const singleProduct = PRODUCTS.find((item) => item.id === id);

    setTimeout(() => {
      setLoading(false);
      if (singleProduct) {
        setProduct(singleProduct);
        setActiveImage(singleProduct.image);
        setActiveTab(singleProduct.description)
 console.log("activeTab:", activeTab);
    console.log("id:", id);
      }
    }, 1000);
    console.log("activeTab:", activeTab);
    console.log("id:", id);
    console.log("id", id);
    console.log("singleProduct", singleProduct);
  }, [id, activeTab]);
  // id in array dependency [id, activeTab]);

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    console.log("addto cart func");
    dispatch(addToCart({ ...product, quantity }));
    console.log("product detail page: product quantity",product, quantity);
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
    } else {
      console.log("Can't go below 1");
    }
  };

  const AddQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Return the JSX structure
  return (
    <Container>
      <h3 className="text-center mt-3 mb-4">Product Details</h3>
      {loading ? <Spinner color="primary">Loading...</Spinner> : null}
      <Row className="justify-content-center">
        <Col xs="12" sm="4">
          <Card>
            
            <img
              alt="Sample"
              src={activeImage}
              className="img-fluid"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
            <Row className="flex flex-row justify-between h-24 mt-5 p-5">
              {product.multipleimages &&
                product.multipleimages.map((image, index) => (
                  <Col key={index} xs={3}>
                    <img
                      src={image}
                      alt=""
                      className="img-fluid"
                      style={{
                        objectFit: "cover",
                      }}
                      onClick={() => updateActiveImage(image)}
                    />
                  </Col>
                ))}
            </Row>
            <CardBody>
              <CardTitle tag="h5">{product.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Rs {product.price}
              </CardSubtitle>
              <CardText>{product.description}</CardText>
              <ButtonGroup>
                <Button onClick={DecQuantity}>-</Button>
                <Button>{quantity}</Button>
                <Button onClick={AddQuantity}>+</Button>
              </ButtonGroup>
              <br />
              <Button onClick={handleAddToCart}>Add to Cart</Button>
            </CardBody>
          </Card>
        </Col>
        {/* Add other Col components as needed */}
        {/* add col */}

        <Col className="flex flex-col gap-4 lg:w-2/4">
          <div>
            <span className=" text-violet-600 font-semibold">
              Rs {product.price}
            </span>
            <h1 className="text-3xl font-bold">Nike Invincible 3</h1>
            <h1 className="text-3xl font-bold">{product.name}</h1>
          </div>
          <p className="text-gray-700">{product.description}</p>
          <h6 className="text-2xl font-semibold">$ 199.00</h6>

          
          {/* Display Rating */}
          <div>
            {Array.from({ length: product.rating }, (_, index) => (
              <span key={index} role="img" aria-label="star">
                ⭐
              </span>
            ))}
          </div>

          {/* Display Reviews */}
          {product.review && product.review.length > 0 && (
            <div>
              <h6>Reviews:</h6>
              {product.review.map((review, index) => (
                <div key={index}>
                  <p>{review.text}</p>
                  <span>{`Rating: ${review.rating}`}</span>
                </div>
              ))}
            </div>
          )}
          <Row className="flex flex-row items-center gap-12">
            <Col xs={4} className="flex flex-row items-center">
              <Button
                variant="light"
                className="py-2 px-5 rounded-lg text-violet-800 text-3xl"
                // onClick={() => setAmount((prev) => prev - 1)}
              >
                -
              </Button>
              <span className="py-4 px-6 rounded-lg">{"amount"}</span>
              <Button
                variant="light"
                className="py-2 px-4 rounded-lg text-violet-800 text-3xl"
                // onClick={() => setAmount((prev) => prev + 1)}
              >
                +
              </Button>
            </Col>

            <br />
            <h6>Total: Rs {calculateTotalPrice()}</h6>
            <Button
              variant="violet"
              className="text-white font-semibold py-3 px-16 rounded-xl h-full"
            >
              Add to Cart
            </Button>
          </Row>
        </Col>
        {/* other col close */}
      </Row>

      {/* add tabs */}
      {/* <Row>
        <Col sm="12">
          <Button onClick={() => setActiveTab("newArrival")}>New Arrival</Button>
          <Button onClick={() => setActiveTab("bestSelling")}>Best Selling</Button>
        </Col>
      </Row> */}
      {loading ? <Spinner color="primary">Loading...</Spinner> : null}
    </Container>
  );
}
