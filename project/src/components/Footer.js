import "./footer.css";
import React from "react";
import { Container, Row, Col } from "reactstrap";
import ScrollToTop from "./ScrollToTop";

function Footer() {
  return (
    <div>
      {/* <div className="sticky-footer">
      <div className="footer-content"> */}
      <footer className="mt-5">
        <Container fluid>
          <Container className="pt-5 pb-5">
            <Row className="justify-content-center pt-5 pb-5">
              <Col md="12" lg="3" sm="12" className="p-3">
                <div>
                  <img src="/BOSHOP images/logo-foot.png" alt="Logo" />
                  <p className="footer-text">
                    <i class="fa-solid fa-location-dot"></i> Street No. 12,
                    Newyork 12, <br />
                    MD - 123, USA.
                  </p>
                  <p className="footer-text">
                    <i class="fa-solid fa-phone"></i> 1.800.123.456789 <br />
                    1.800.123.456789
                  </p>
                  <p className="footer-text">
                    <i class="fa-regular fa-envelope"></i>info@BoShop.com <br />
                    contact@BoShop.com
                  </p>

                  <div className="footor-icon">
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-skype"></i>
                    <i className="fab fa-twitter"></i>
                  </div>
                </div>
              </Col>
              <Col md="3" lg="2" className="p-3">
                <h4 className="text-white footer-title">Company</h4>
                <div className="footer-list footer-text">
                  <ul>
                    <li>About Us</li>
                    <li>Why Extobot</li>
                    <li>Contact With Us</li>
                    <li>Our Partner</li>
                  </ul>
                </div>
              </Col>
              <Col md="3" lg="2" className="p-3">
                <h4 className="text-white footer-title">Resources</h4>
                <div className="footer-list footer-text">
                  <ul>
                    <li>Quick Links</li>
                    <li>Job Packages</li>
                    <li>Post New Job</li>
                    <li>Jobs Listing</li>
                  </ul>
                </div>
              </Col>
              <Col md="3" lg="2" className="p-3">
                <h4 className="text-white footer-title">Legal</h4>
                <div className="footer-list footer-text">
                  <ul>
                    <li>Affiliate</li>
                    <li>Blog</li>
                    <li>Help & Support</li>
                    <li>Careers</li>
                  </ul>
                </div>
              </Col>
              <Col md="3" lg="2" className="p-3">
                <h4 className="text-white footer-title">Products</h4>
                <div className="footer-list footer-text">
                  <ul>
                    <li>Star a Trial</li>
                    <li>How It Work</li>
                    <li>Features</li>
                    <li>Price & Planing</li>
                  </ul>
                </div>
              </Col>
            </Row>

            <div className="border-top">
              {/* <Row className="d-flex justify-content-center">
                <Col>
                  <span className="copyright footer-text">
                    ©2022Finate. Made with
                    <i className="fas fa-heart"></i> by
                  </span>
                </Col>
                <Col className="mt-2">
                  <a
                    target="_blank"
                    className="codefooter"
                    href="https://themeforest.net/user/codecarnival"
                  >
                    Codecarnival.
                  </a>
                </Col>
              </Row> */}
              <Row className="d-flex justify-content-center mt-5">
                <Col sm={6} md={6}>
                  <p className="copyright footer-text">
                    © 2024 BoShop All right reserved.
                    <a className="codefooter" href="https://webicode.com/">
                      webicode
                    </a>
                  </p>
                </Col>
                <Col sm={6} md={6} className="text-right">
                  <img src="/BOSHOP images/card-icon.png" alt="" />
                </Col>
              </Row>
            </div>
          </Container>
          <ScrollToTop />
        </Container>
      </footer>
    </div>
    // </div>
    // </div>
  );
}

export default Footer;
