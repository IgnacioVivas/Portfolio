import './proyectos.scss';
import { Container, Row, Col } from 'react-bootstrap';

function Proyectos() {
  return (
    <Container id='container-proyectos'>
      <Row id='row-proyectos-title'>
        <h2>Mis mejores trabajos</h2>
        <h3>Aquí hay una selección de mis mejores proyectos.</h3>
      </Row>
      <Row id='row-proyectos'>
        <Col xs={3}>
          <img src='https://tse1.mm.bing.net/th?id=OIP.iLOuylTm8lnnx25Mjj49QwHaGX&pid=Api' alt='' />
        </Col>
        <Col xs={3}>
          <img src='https://tse1.mm.bing.net/th?id=OIP.iLOuylTm8lnnx25Mjj49QwHaGX&pid=Api' alt='' />
        </Col>
        <Col xs={3}>
          <img src='https://tse1.mm.bing.net/th?id=OIP.iLOuylTm8lnnx25Mjj49QwHaGX&pid=Api' alt='' />
        </Col>
      </Row>
    </Container>
  );
}

export default Proyectos;
