import { Row, Col, Container, Alert } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Products from "../Products.json";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function CategoriesProduct() {
  const { id } = useParams();
  let items = Products.filter((items) => items.categories.id == id);
  console.log(items);

  let b = Products.filter((b) => b.categories.id == id);
  b = b[0];

  console.log(b);

  return (
    <Container>
      {b == null && <Alert variant="danger">Updating Product...</Alert>}
      <Row className="text-center">
        {b != null && <h1>{b.categories.name}</h1>}
      </Row>
      <Row>
        {items.map((items, index) => (
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
export default CategoriesProduct;
