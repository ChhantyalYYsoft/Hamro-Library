import React from "react";
import BaseLayout from "../../components/layouts/BaseLayout";
import AdminLayout from "../../components/layouts/AdminLayout";
import { Badge, Col, Container, ListGroup, Row } from "react-bootstrap";
import { PieChart } from "react-minimal-pie-chart";

function Dashboard() {
  return (
    <AdminLayout title="Dashboard">
      <Container>
      <Row >
          <Col>
            <div className="dashboardBox">
              {/* <div id="my-pie-chart-container">
                <div id="my-pie-chart"></div>

                <div id="legenda">
                  <div className="entry">
                    <div id="color-brown" className="entry-color"></div>
                    <div className="entry-text">Antarctica</div>
                  </div>
                  <div className="entry">
                    <div id="color-black" className="entry-color"></div>
                    <div className="entry-text">Australia</div>
                  </div>
                  <div className="entry">
                    <div id="color-blue" className="entry-color"></div>
                    <div className="entry-text">South America</div>
                  </div>
                  <div className="entry">
                    <div id="color-green" className="entry-color"></div>
                    <div className="entry-text">North America</div>
                  </div>
                  <div className="entry">
                    <div id="color-yellow" className="entry-color"></div>
                    <div className="entry-text">Europe</div>
                  </div>
                 
                </div>
              </div> */}
              <PieChart
            data={[
                { title: 'One', value: 20, color: '#E38627' },
                { title: 'Two', value: 15, color: '#C13C37' },
                { title: 'Three', value: 20, color: '#6A2135' },
            ]}
            />;
            </div>
          </Col>
        </Row>
        <br/>
        <br/>
        <Row>
          <Col>
            <div className="dashboardBox">
              <h2>
                <Badge bg="secondary">20</Badge>
              </h2>
              <br />
              <label>Total Books</label>
            </div>
          </Col>
          <Col>
            <div className="dashboardBox">
              <h2>
                <Badge bg="secondary">10</Badge>
              </h2>
              <br />
              <label>Total Users</label>
            </div>
          </Col>
          <Col>
            <div className="dashboardBox">
              <h2>
                <Badge bg="secondary">4</Badge>
              </h2>
              <br />
              <label>Total Borrowed</label>
            </div>
          </Col>
        </Row>
        
      </Container>
    </AdminLayout>
  );
}

export default Dashboard;
