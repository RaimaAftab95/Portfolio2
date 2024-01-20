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
import { PRODUCTS } from "../components/data";
import { addToCart } from "./redux/cart";
import { useSelector, useDispatch } from "react-redux";

export default function ProductDetail() {
  // use hook useParams to get url id as param it may have more than one param
  // const obj = useParams();
  //console.log("obj",obj);

  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  // const navigate = useNavigate();
  const [product, setproduct] = useState({});
  const [quantity, setquantity] = useState(1);

  useEffect(() => {
    const singleProduct = PRODUCTS.find((item) => item.id === id);

    setTimeout(() => {
      setLoading(false);
      if (singleProduct) {
        setproduct(singleProduct);
      }
    }, 1000);
    // if(singleProduct) {
    //     setproduct(singleProduct);
    // }
    console.log("id", id);
    console.log("singleProduct", singleProduct);
  }, []);

  const dispatch = useDispatch();
  // Addtocart fun call
  // bcz product is in global state so dont need to pass it in parameters in this func (product) in pink arrow
  const handleAddToCart = () => {
    console.log("addto cart func");
    dispatch(addToCart({ ...product, quantity }));
  };

  const  DecQuantity= () =>{
    console.log("Dec quantity");
  };
  const AddQuantity = () =>{
    console.log("add quantity");
  };
 

  return (
    <Container>
      <h3 className="text-center mt-3 mb-4">Product Details</h3>
      {loading ? <Spinner color="primary">Loading...</Spinner> : null}
      <Row className="justify-content-center">
        {/*Col className="bg-light border" */}
        <Col  xs="12" sm="4">
          <Card>
            <img
              alt="Sample"
              src={product.image}
              className="img-fluid"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
            <CardBody>
              <CardTitle tag="h5">{product.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Rs {product.price}
              </CardSubtitle>
              <CardText>{product.description}</CardText>
              <ButtonGroup>
                <Button onClick={DecQuantity}>-</Button>
                <Button disabled>{quantity}</Button>
                <Button onClick={AddQuantity}> +</Button>
              </ButtonGroup>
              <br></br>
              {/*due to global state dont need to pass  (product) below */}
              {/* <Button onClick={() => handleAddToCart()}>
                  Add to Cart
                </Button> */}
              {/* now as we not paasing parameter we can write it as below */}
              <Button onClick={handleAddToCart}>Add to Cart</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {loading ? <Spinner color="primary">Loading...</Spinner> : null}
    </Container>
  );
}
