import { Container, Row, Col, Card } from "react-bootstrap";

function ItemListContainer({ greeting }) {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="text-center p-4 bg-light border-primary shadow">
            <Card.Body>
              <h2 className="text-primary">{greeting}</h2>
              <p className="text-secondary">
                Explora nuestros productos y disfruta de tu compra!
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemListContainer;
