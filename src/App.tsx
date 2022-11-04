import React from "react";
import { Row, Col } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

function App({children} :{children: React.ReactNode}) {
  return (
    <div className="App">
      <Row className="container">
        <Col lg={3} id="sidebar">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="contacts">Contacts</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
          </ul>
        </Col>
        <Col lg={9} id="content">
          <Outlet />
        </Col>
      </Row>
    </div>
  );
}

export default App;
