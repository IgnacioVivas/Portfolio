import { Col, Container, Row } from 'react-bootstrap';
import Form from '../Form/Form';
import SocialNetworks from '../SocialNetworks/SocialNetworks';
import './contactame.scss';

function Contactame() {
  return (
    <Container className='container-contactame' id='contacto'>
      <Row id='row-contactame'>
        <Col id='col-contactame'>
          <h2 id='title-contactame'>Contactame</h2>
          <h3 id='text-contactame'>
            Gracias por visitar mi portafolio. Si estás interesado en contratar mis servicios de
            desarrollo web o simplemente quieres saber más sobre mí, no dudes en dejarme un mensaje.
            ¡Estoy dispuesto a trabajar contigo y ayudarte a llevar a cabo tus proyectos!
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
