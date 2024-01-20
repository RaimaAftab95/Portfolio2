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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { PRODUCTS } from "../components/data";
import { removeFromCart, emptyCart } from "./redux/cart";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "./Cart.css";

export default function Cart() {
  // use hook useParams to get url id as param it may have more than one param
  // const obj = useParams();
  //console.log("obj",obj);

  const { id } = useParams();
  const dispatch = useDispatch();
  const { cart, user } = useSelector((state) => state);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  // const navigate = useNavigate();

  //   useselector hook bring your cart state in cart component bcz u need ur cart listing here
  const getTotal = () => {
    let price = 0;
    cart.map((item) => {
      price += item.price;
    });
    return price;
  };

  const handleDelete = (item) => {
    dispatch(removeFromCart(item.id));
  };
  // const removeAll = (item) => {
  //     dispatch( removeAll(item));
  // };

  return (
    <Container fluid className="Cart">
      <Modal isOpen={modalOpen} toggle={() => setModalOpen(false)}>
        <ModalHeader toggle={() => setModalOpen(false)}>
          Modal title
        </ModalHeader>
        <ModalBody>
          <input placeholder="FullName" />
          <br />
          <input placeholder="Billing address" />
          <br />
          <input placeholder="Shipping Address" />
          <br />
          <input placeholder="Cash on Delivery" />
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => {
              setModalOpen(false);
              toast.success("Your order is placed");
            }}
            color="primary"
          >
            Place Order
          </Button>{" "}
          <Button onClick={() => setModalOpen(false)} color="secondary">
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      {/* user can only view this page if login */}
      {user.name ? (
        <>
          {" "}
          <h3>Cart</h3>
          {loading ? <Spinner color="primary">Loading...</Spinner> : null}
          <Row>
            <Col className="bg-light border" xs="12" sm="4">
              {cart.map((item) => (
                <Card>
                  <img
                    alt="Sample"
                    src={item.image}
                    className="img-fluid"
                    style={{
                      maxHeight: "100px",
                      width: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <CardBody>
                    <CardTitle tag="h5">{item.name}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      Rs {item.price}
                    </CardSubtitle>
                    <Button onClick={() => handleDelete(item)}>Remove</Button>
                  </CardBody>
                </Card>
              ))}
            </Col>
            <h3>Total:{getTotal()}</h3>
          </Row>
          {/* {loading ? <Spinner color="primary">Loading...</Spinner> : null} */}
          {/* <Button>Checkout</Button> */}
          <Button onClick={() => setModalOpen(true)}>Checkout</Button>
          <Button onClick={() => dispatch(emptyCart())}>Emptycart</Button>
        </>
      ) : (
        <p>Pz login</p>
      )}
    </Container>
  );
}
