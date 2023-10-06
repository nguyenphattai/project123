import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Routes, Route } from "react-router-dom";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SlideShow from "./components/SlideShow/SlideShow";
import MainMenu from "./components/MainMenu/MainMenu";
import Contact from "./components/Contact";
import ProductDetail from "./components/Products/ProductDetail/ProductDetail";
import BrandsProduct from "./components/Products/BrandsProduct/BrandsProduct";
import CategoriesProduct from "./components/Products/CategoriesProduct/CategoriesProduct";
import Sitemap from "./components/Sitemap/Sitemap";
import Gallery from "./components/Gallery/Gallery";
import Product from "./components/Products/Product";

function App() {
  return (
    <Container fluid="md">
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <MainMenu />
        </Col>
      </Row>
      <Row>
        <Col>
          <SlideShow />
        </Col>
      </Row>
      <Row>
        <Col>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/comparison" element={<Product />} />
            <Route path="/detail/:id" element={<ProductDetail />} />
            <Route path="/brands/:id" element={<BrandsProduct />} />
            <Route path="/categories/:id" element={<CategoriesProduct />} />
          </Routes>
        </Col>
      </Row>
      <Row>
        <Col>
          <Sitemap />
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
