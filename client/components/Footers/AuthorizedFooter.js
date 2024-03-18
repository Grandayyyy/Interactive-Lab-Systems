/*eslint-disable*/
import React from "react";

// reactstrap components
import {  Row, Col } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Row className="align-items-center justify-content-xl-between">
          <Col xl="6">
            <div className="copyright text-center text-xl-left text-muted">
              © {new Date().getFullYear()}{" "}
              <a
                className="font-weight-bold ml-1"
                href="https://github.com/pdeepak350/Interactive-Lab-Systems"
                rel="noopener noreferrer"
                target="_blank"
              >
                ILS
              </a>
            </div>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;
