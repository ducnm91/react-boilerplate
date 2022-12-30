import React from "react";
import { Row, Col } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

function App({ children }: { children: React.ReactNode }) {
  return (
    <div className="App">
      <Row className="container pt-4">
        <Col lg={3} id="sidebar">
          <ul className="list-group">
            <li className="list-group-item">
              <Link to="/">Home</Link>
            </li>
            <li className="list-group-item">
              <Link to="/form">Form</Link>
            </li>
            <li className="list-group-item">
              <Link to="contacts">Contacts</Link>
            </li>
            <li className="list-group-item">
              <Link to="/404">404</Link>
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
