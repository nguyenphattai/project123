import Detail from "../Products.json";
import { useParams } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";

function ProductDetail() {
  const { id } = useParams();
  let items = Detail.filter((items) => items.id == id);
  items = items[0];

  console.log(items);
  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={6}>
          <img src={items.img} alt={items.desc} width="100%" />
        </Col>
        <Col xs={12} sm={12} md={6}>
          Product Name: <h1>{items.name}</h1> <br />
          Desciption: {items.desc}
        </Col>
      </Row>
      <Row>
        <Col>
          <Tabs
            defaultActiveKey="detail"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="detail" title="Details">
              <p>{items.details.d1}</p>
              <p>{items.details.d2}</p>
            </Tab>
            <Tab eventKey="download" title="Download">
              <Button href={items.file}>Download</Button>
            </Tab>
            <Tab eventKey="contact" title="Contact">
              Tab content for Contact
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
