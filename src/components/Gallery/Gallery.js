import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Category from "./Category/Category";
import GalleryItems from "./GalleryItems/GalleryItems";
import items from "../Products/Products.json";

const allCategories = [
  "All",
  ...new Set(items.map((item) => item.categories.name)),
];

function Gallery() {
  const [galleryItems, setGalleryItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  function handlefilterItems(category) {
    if (category === "All") {
      setGalleryItems(items);
      return;
    }
    const newItems = items.filter((item) => item.categories.name === category);
    setGalleryItems(newItems);
  }
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center mt-3">Gallery</h1>
          <div className="underline"></div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Category categories={categories} filterItems={handlefilterItems} />
        </Col>
      </Row>
      <Row>
        <GalleryItems items={galleryItems} />
      </Row>
    </Container>
  );
}

export default Gallery;
