// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import {
//   Spinner,
//   Form,
//   Label,
//   Input,
//   Card,
//   CardBody,
//   CardTitle,
//   CardSubtitle,
//   CardText,
//   Button,
//   Container,
//   Row,
//   Col,
//   FormGroup,
//   ButtonGroup,
//   Modal,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
// } from "reactstrap";
// import { PRODUCTS } from "../components/data";
// import { removeFromCart, emptyCart } from "./redux/cart";
// import { useSelector, useDispatch } from "react-redux";
// import { toast } from "react-toastify";
// import "./Cart.css";
// import { v4 as uuidv4 } from "uuid"; // Import uuid to generate a unique order number

// export default function Cart() {
//   // use hook useParams to get url id as param it may have more than one param
//   // const obj = useParams();
//   //console.log("obj",obj);

//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const { cart, user } = useSelector((state) => state);
//   const [loading, setLoading] = useState(true);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [orderNumber, setOrderNumber] = useState("");
//   // const navigate = useNavigate();

//   //   useselector hook bring your cart state in cart component bcz u need ur cart listing here

//   const getTotalnew = () => {
//     let totalPrice = 0;
//     cart.forEach((item) => {
//       const quantity = item.quantity ?? 1; // Use 1 as the default quantity if undefined or null
//       totalPrice += item.price * quantity;
//     });
//     return totalPrice;
//   };

//   const getTotal = () => {
//     let price = 0;
//     cart.map((item) => {
//       //price += item.price;
//       price += item.price * item.quantity;
//     });
//     return price;
//   };

//   const handleDelete = (item) => {
//     dispatch(removeFromCart(item.id));
//   };
//   // const removeAll = (item) => {
//   //     dispatch( removeAll(item));
//   // };

//   return (
//     <Container fluid className="Cart">
//       <Modal isOpen={modalOpen} toggle={() => setModalOpen(false)}>
//         <ModalHeader toggle={() => setModalOpen(false)}>
//           Modal title
//         </ModalHeader>
//         <ModalBody>
//           {/* <input placeholder="FullName" />
//           <br />
//           <input placeholder="Billing address" />
//           <br />
//           <input placeholder="Shipping Address" />
//           <br />
//           <input placeholder="Cash on Delivery" /> */}

//           <Row>
//             {/* Billing and Shipping Information Form */}
//             <Col md={6}>
//               <h5>Billing and Shipping Information</h5>
//               <Form>
//                 <FormGroup>
//                   <Label for="fullName">Full Name:</Label>
//                   <Input type="text" id="fullName" placeholder="Full Name" />
//                 </FormGroup>
//                 <FormGroup>
//                   <Label for="billingAddress">Billing Address:</Label>
//                   <Input
//                     type="text"
//                     id="billingAddress"
//                     placeholder="Billing Address"
//                   />
//                 </FormGroup>
//                 <FormGroup>
//                   <Label for="shippingAddress">Shipping Address:</Label>
//                   <Input
//                     type="text"
//                     id="shippingAddress"
//                     placeholder="Shipping Address"
//                   />
//                 </FormGroup>
//                 <FormGroup>
//                   <Label for="cashOnDelivery">Cash on Delivery:</Label>
//                   <Input
//                     type="text"
//                     id="cashOnDelivery"
//                     placeholder="Cash on Delivery"
//                   />
//                 </FormGroup>
//               </Form>
//             </Col>

//             {/* Order Information Card */}
//             <Col md={6}>
//               <h5>Order Information</h5>
//               {cart.map((item) => (
//                 <Card key={item.id}>
//                   <img
//                     alt="Sample"
//                     src={item.image}
//                     className="img-fluid"
//                     style={{
//                       maxHeight: "100px",
//                       width: "50%",
//                       objectFit: "cover",
//                     }}
//                   />
//                   <CardBody>
//                     <CardTitle tag="h6">{item.name}</CardTitle>
//                     <CardSubtitle className="mb-2 text-muted" tag="h6">
//                       Rs {item.price}
//                     </CardSubtitle>
//                     <CardText>Quantity: {item.quantity}</CardText>
//                   </CardBody>
//                 </Card>
//               ))}
//               <h6>Total: Rs {getTotalnew()}</h6>
//             </Col>
//           </Row>
//         </ModalBody>
//         <ModalFooter>
//           <Button
//             onClick={() => {
//               setModalOpen(false);
//               const randomOrderNumber =
//                 "BT-" + uuidv4().split("-")[0].toUpperCase();
//               setOrderNumber(randomOrderNumber);
//               toast.success("Your order is placed");
//               toast.success(
//                 `Your order # ${randomOrderNumber} is in the process. Thanks for shopping`
//               );
//             }}
//             color="primary"
//           >
//             Place Order
//           </Button>{" "}
//           <Button onClick={() => setModalOpen(false)} color="secondary">
//             Cancel
//           </Button>
//         </ModalFooter>
//       </Modal>

//       {/* user can only view this page if login */}
//       {user.name ? (
//         <>
//           {" "}
//           <h3>Cart</h3>
//           {loading ? <Spinner color="primary">Loading...</Spinner> : null}
//           <Row>
//             <Col className="bg-light border" xs="12" sm="4">
//               {cart.map((item) => (
//                 <Card>
//                   <img
//                     alt="Sample"
//                     src={item.image}
//                     className="img-fluid"
//                     style={{
//                       maxHeight: "100px",
//                       width: "50%",
//                       objectFit: "cover",
//                     }}
//                   />
//                   <CardBody>
//                     <CardTitle tag="h5">{item.name}</CardTitle>
//                     <CardSubtitle className="mb-2 text-muted" tag="h6">
//                       Rs {item.price}
//                     </CardSubtitle>
//                     <Button onClick={() => handleDelete(item)}>Remove</Button>
//                   </CardBody>
//                 </Card>
//               ))}
//             </Col>
//             <h3>Total:{getTotal()}</h3>
//             <h3>Totalnew: Rs {getTotalnew()}</h3>
//           </Row>
//           {/* {loading ? <Spinner color="primary">Loading...</Spinner> : null} */}
//           {/* <Button>Checkout</Button> */}
//           <Button onClick={() => setModalOpen(true)}>Checkout</Button>
//           <Button onClick={() => dispatch(emptyCart())}>Emptycart</Button>
//         </>
//       ) : (
//         <p>Pz login to view Cart</p>
//       )}
//     </Container>
//   );
// }

// new

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
import { v4 as uuidv4 } from "uuid"; // Import uuid to generate a unique order number

export default function Cart() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { cart, user } = useSelector((state) => state);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const getTotalnew = () => {
    let totalPrice = 0;
    let totalQuantity = 0;
    cart.forEach((item) => {
      const quantity = item.quantity ?? 1;
      totalPrice += item.price * quantity;
      totalQuantity += quantity;
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
          {" "}
          Modal title
        </ModalHeader>
        <ModalBody>
          <Row>
            {/* Billing and Shipping Information Form */}
            <Col md={6}>
              <h5>Billing and Shipping Information</h5>
              <Form>
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
                <Card key={item.id}>
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
                    <CardTitle tag="h6">{item.name}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      Rs {item.price}
                    </CardSubtitle>
                    <CardText>Quantity: {item.quantity}</CardText>
                  </CardBody>
                </Card>
              ))}
              <h6>Total: Rs {getTotalnew()}</h6>
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
          </Button>{" "}
          <Button onClick={() => setModalOpen(false)} color="secondary">
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      {user.name ? (
        <>
          <h3>Cart</h3>
          {loading ? <Spinner color="primary">Loading...</Spinner> : null}
          <Table responsive>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
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
                      className="img-fluid"
                      style={{
                        maxHeight: "50px",
                        width: "50px",
                        objectFit: "cover",
                      }}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>Rs {item.price}</td>
                  <td>{item.quantity}</td>
                  <td>Rs {item.price * item.quantity}</td>
                  <td>
                    <Button onClick={() => handleDelete(item)}>Remove</Button>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* <tfoot>
              <tr>
                <td colSpan="4" className="text-right">
                  Grand Total:
                </td>
                <td>Rs {getTotalnew()}</td>
                <td></td>
              </tr>
            </tfoot> */}
            <tfoot>
              <tr>
                <td colSpan="3" className="text-right">
                  Total Quantity:
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
            </tfoot>
          </Table>
          <Button onClick={() => setModalOpen(true)}>Checkout</Button>
          <Button onClick={() => dispatch(emptyCart())}>Emptycart</Button>
        </>
      ) : (
        <p>Please login to view the Cart</p>
      )}
    </Container>
  );
}
