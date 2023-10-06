import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Brands from "../Brands/Brands.json";
import Categories from "../Categories/Categories.json";

function Sitemap() {
  return (
    <Row className="mt-5">
      <Col xs={12} sm={6} md={3}>
        <h4>About</h4>
        <ul>
          <li>About us</li>
          <li>Feedback</li>
          <li>Contact</li>
          <li>Comparison</li>
        </ul>
      </Col>
      <Col xs={12} sm={6} md={3}>
        <h4>Brands</h4>
        <ul>
          {Brands.map((items, index) => (
            <li key={index}>
              <a href={`/brands/${items.id}`}>{items.name}</a>
            </li>
          ))}
        </ul>
      </Col>
      <Col xs={12} sm={6} md={3}>
        <h4>Categories</h4>
        <ul>
          {Categories.map((items, index) => (
            <li key={index}>
              <a href={`/categories/${items.id}`}>{items.name}</a>
            </li>
          ))}
        </ul>
      </Col>
      <Col xs={12} sm={6} md={3}>
        <h4>Social Link</h4>
      </Col>
    </Row>
  );
}

export default Sitemap;
