import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Spinner,
  Form,
  Label,
  Input,
  Table,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Container,
  Row,
  Col,
  FormGroup,
  ButtonGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { removeFromCart, emptyCart } from "./redux/cart";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "./Cart.css";
//import { addToCart } from "./redux/cart";
import { v4 as uuidv4 } from "uuid"; // Import uuid to generate a unique order number

export default function Cart() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { cart, user } = useSelector((state) => state);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  // const [product, setProduct] = useState({});
  // const [quantity, setQuantity] = useState(1);

  // Calculate total price based on quantity
  //  const calculateTotalPrice = () => {
  //   return product.price * quantity;
  // };

  // const handleAddToCart = () => {
  //   console.log("addto cart func");
  //   dispatch(addToCart({ ...product, quantity }));
  //   console.log("product detail page: product quantity",product, quantity);
  // };
  const getTotalnew = () => {
    let totalPrice = 0;
    let totalQuantity = 0;
    cart.forEach((item) => {
      const quantity = item.quantity || 1;
      totalPrice += item.price * quantity;
      totalQuantity += quantity;
      console.log("quantity", quantity);
      console.log(totalPrice);
      console.log(totalQuantity);
    });
    return { totalPrice, totalQuantity };
  };

  const handleDelete = (item) => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <Container fluid className="Cart">
      <Modal isOpen={modalOpen} toggle={() => setModalOpen(false)}>
        {/* ... (your existing modal code) */}
        <ModalHeader toggle={() => setModalOpen(false)}>
          <div className="">CHECK OUT FORM</div>
        </ModalHeader>
        <ModalBody>
          <Row>
            {/* Billing and Shipping Information Form */}
            <Col md={6}>
              <h5>Billing and Shipping Information</h5>
              <Form className="mt-5">
                <FormGroup>
                  <Label for="fullName">Full Name:</Label>
                  <Input type="text" id="fullName" placeholder="Full Name" />
                </FormGroup>
                <FormGroup>
                  <Label for="billingAddress">Billing Address:</Label>
                  <Input
                    type="text"
                    id="billingAddress"
                    placeholder="Billing Address"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="shippingAddress">Shipping Address:</Label>
                  <Input
                    type="text"
                    id="shippingAddress"
                    placeholder="Shipping Address"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="cashOnDelivery">Cash on Delivery:</Label>
                  <Input
                    type="text"
                    id="cashOnDelivery"
                    placeholder="Cash on Delivery"
                  />
                </FormGroup>
              </Form>
            </Col>

            {/* Order Information Card */}
            <Col md={6}>
              <h5>Order Information</h5>
              {cart.map((item) => (
                <Card key={item.id} className="p-2">
                  <img
                    alt="Sample"
                    src={item.image}
                    className="img-fluid order-info-cardimg"
                  />
                  <CardBody>
                    <CardTitle tag="h6">{item.name}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      Rs {item.price}
                    </CardSubtitle>
                    <CardText className="d-none">
                      Quantity:{item.quantity}
                    </CardText>
                  </CardBody>
                </Card>
              ))}
              <h6 className="mt-2">
                Total Quantity: {getTotalnew().totalQuantity}
              </h6>
              <h6>Total: Rs {getTotalnew().totalPrice}</h6>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => {
              setModalOpen(false);
              const randomOrderNumber =
                "BT-" + uuidv4().split("-")[0].toUpperCase();
              setOrderNumber(randomOrderNumber);
              toast.success("Your order is placed");
              toast.success(
                `Your order # ${randomOrderNumber} is in the process. Thanks for shopping`
              );
            }}
            color="primary"
          >
            Place Order
          </Button>
          <Button onClick={() => setModalOpen(false)} color="secondary">
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      {user.name ? (
        <>
          <h3 className="heading">Shopping Cart</h3>
          {loading ? (
            <Spinner color="primary" className="my-spinner">
              Loading...
            </Spinner>
          ) : null}
          <Table responsive className="p-5">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th className="d-none">Quantity</th>
                <th className="d-none">Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      alt="Sample"
                      src={item.image}
                      className="img-fluid cart-table-img"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>Rs {item.price}</td>
                  <td className="d-none">{item.quantity}</td>
                  <td className="d-none">{item.quantity * item.price}</td>
                  <td>
                    <Button
                      className="disappear-btn"
                      onClick={() => handleDelete(item)}
                    >
                      <i class="fa-solid fa-trash cart-page-icon"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* <tfoot>
              <tr>
                <td colSpan="3" className="text-right">
                  TotalQuantity:
                </td>
                <td>{getTotalnew().totalQuantity}</td>
                <td colSpan="2"></td>
              </tr>
              <tr>
                <td colSpan="3" className="text-right">
                  Grand Total:
                </td>
                <td>Rs {getTotalnew().totalPrice}</td>
                <td colSpan="2"></td>
              </tr>
            </tfoot> */}
          </Table>

          {/* Summary Section */}
          <Row className="mt-4">
            <Col md={6} className="summary-box">
              <h5>Order Summary</h5>
              <hr></hr>
              <h6 className="p-2">
                Total Quantity: {getTotalnew().totalQuantity}
              </h6>
              <h6 className="p-2">
                Grand Total: Rs {getTotalnew().totalPrice}
              </h6>
              <Button
                className="checkout-btn"
                onClick={() => setModalOpen(!modalOpen)}
              >
                Checkout
              </Button>
              <Button
                className="disappear-btn"
                onClick={() => dispatch(emptyCart())}
              >
                <i class="fa-solid fa-trash cart-deleteall-btn"></i>
              </Button>
            </Col>
          </Row>
          {/* <Button onClick={() => setModalOpen(true)}>Checkout</Button> */}
          {/* <Button onClick={() => setModalOpen(!modalOpen)}>Checkout</Button>
          <Button className="disappear-btn" onClick={() => dispatch(emptyCart())}>
            <i class="fa-solid fa-trash cart-deleteall-btn"></i>
          </Button> */}
        </>
      ) : (
        <p>Please login to view the Cart</p>
      )}
    </Container>
  );
}
