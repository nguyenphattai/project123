import { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
function Contact() {
  const [validated, setValidated] = useState(false);
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const validate = [];

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    console.log("Error:", form);
    if (form.checkValidity() === false) {
      event.preventDefault(); //No Refress browser
      event.stopPropagation(); //No Refress browser
      //Validate data
      if (title === "") {
        validate.push("Title is require");
      }
      if (email === "") {
        validate.push("Email is require");
      }
      if (tel === "") {
        validate.push("Tel is require");
      }
      if (message === "") {
        validate.push("Message is require");
      }
    } else {
      let thongbao =
        "Title:" +
        title +
        "\nEmail:" +
        email +
        "\nTel:" +
        tel +
        "\nMessage:" +
        message;
      alert("Thanks you for contact!\n" + thongbao);
      setShowSuccess(true);
      event.preventDefault(); //No Refress browser
      event.stopPropagation(); //No Refress browser
    }

    setValidated(true);
    setErrorMessage(validate); //Lưu các lỗi vào mảng validate
  };
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleTelChange = (event) => {
    setTel(event.target.value);
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  return (
    <Container>
      <Row className="mb-3 mt-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.610010537023!2d106.80730807438925!3d10.841127589311595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752731176b07b1%3A0xb752b24b379bae5e!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBGUFQgVFAuIEhDTQ!5e0!3m2!1svi!2s!4v1695009068945!5m2!1svi!2s"
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
          title="Google Map"
        ></iframe>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={6}>
          <p>Email: contact@company.com</p>
          <p>Address: contact@company.com</p>
          <p>Tel: contact@company.com</p>
          <p>Fax: contact@company.com</p>
        </Col>
        <Col xs={12} sm={12} md={6}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {showSuccess && (
              <Alert variant="success">Thanks you for your contact!</Alert>
            )}
            {errorMessage.length > 0 && (
              <Alert variant="danger">
                Invalid:
                <ul>
                  {errorMessage.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </Alert>
            )}
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nguyễn Văn Tèo"
                required
                onChange={handleTitleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                required
                onChange={handleEmailChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tel</Form.Label>
              <Form.Control
                type="tel"
                placeholder="090 333 333"
                required
                onChange={handleTelChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" required>
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                required
                onChange={handleMessageChange}
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <Button type="submit">Submit form</Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
