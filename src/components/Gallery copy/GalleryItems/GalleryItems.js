import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function GalleryItems({ items }) {
  return (
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
  );
}
export default GalleryItems;
