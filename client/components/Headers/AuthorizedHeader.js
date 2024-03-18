import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

import fetch from 'utils/fetch.js';

class AuthorizedHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: 0,
      users: 0
    };

    fetch(process.env.API_URL + "/api/info", {
      method: "GET"
    })
    .then(resp => resp.json())
    .then(resp => {
      if(resp.success)
        this.setState({["rooms"]: resp.response.rooms, ["users"]: resp.response.users})
    });
  }
  render() {
    return (
      <>
        <div className="header bg-gradient-dark pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Rooms
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            {this.state.rooms}
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i className="fas fa-server" />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Users
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            {this.state.users}
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                            <i className="fas fa-users" />
                          </div>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default AuthorizedHeader;
