import { Col, Container, Row } from 'react-bootstrap';
import Form from '../Form/Form';
import SocialNetworks from '../SocialNetworks/SocialNetworks';
import './contactame.scss';

function Contactame() {
  return (
    <Container id='container-contactame'>
      <Row id='row-contactame'>
        <Col id='col-contactame'>
          <h2 id='title-contactame'>Contactame</h2>
          <h3 id='text-contactame'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus possimus quo ut
            commodi consequuntur officiis quos corrupti praesentium neque illo vitae placeat,
            excepturi nostrum pariatur consectetur? Obcaecati similique et numquam?
          </h3>
          <SocialNetworks />
        </Col>
        <Col>
          <Form />
        </Col>
      </Row>
    </Container>
  );
}

export default Contactame;
