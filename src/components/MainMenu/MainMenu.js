import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Brands from "../Brands/Brands.json";
import Categories from "../Categories/Categories.json";

function MainMenu() {
  console.log(Brands);
  return (
    <Navbar expand="lg" bg="warning">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "300px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to={"/"}>
              Homepage
            </Nav.Link>
            <NavDropdown title="Brands" id="navbarScrollingDropdown">
              {Brands.map((items, index) => (
                <NavDropdown.Item href={`/brands/${items.id}`} key={index}>
                  {items.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              {Categories.map((items, index) => (
                <NavDropdown.Item href={`/categories/${items.id}`} key={index}>
                  {items.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link as={Link} to={"/gallery"}>
              Gallery
            </Nav.Link>
            <Nav.Link as={Link} to={"/comparison"}>
              Comparison
            </Nav.Link>
            <Nav.Link href="#action2">Feedbacks</Nav.Link>
            <Nav.Link as={Link} to={"/contact"}>
              Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default MainMenu;
