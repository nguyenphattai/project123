import { Row, Col, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Products from "../Products.json";
import { Link } from "react-router-dom";

function ProductsFeatureList() {
  return (
    <Container>
      <Row className="text-center">
        <h1>Feature Products</h1>
      </Row>
      <Row>
        {Products.filter((items) => {
          if (items.top === 1) {
            return items;
          } else {
            return null;
          }
        }).map((items, index) => (
          <Col xs={12} sm={6} md={3} key={index}>
            <Card className="mt-3 mb-3 shadow">
              <Card.Img variant="top" src={items.img} alt={items.name} />
              <Card.Body>
                <Card.Title>{items.name}</Card.Title>
                <Card.Text>{items.desc}</Card.Text>
                <Link to={`/detail/${items.id}`}>
                  <Button variant="primary">Detail...</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductsFeatureList;
