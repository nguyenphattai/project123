import Carousel from "react-bootstrap/Carousel";
import Slide from "./slideshow.json";

function SlideShow() {
  return (
    <Carousel data-bs-theme="dark">
      {Slide.map((items, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={items.img} alt={items.name} />
          <Carousel.Caption>
            <h5>{items.name}</h5>
            <p>{items.desc}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
export default SlideShow;
