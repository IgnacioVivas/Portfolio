import './proyectos.scss';
import { Container, Row, Col } from 'react-bootstrap';

function Proyectos() {
  return (
    <Container className='container-proyectos' id='portfolio'>
      <Row id='row-proyectos-title'>
        <h2>Mis mejores trabajos</h2>
        <h3>Aquí hay una selección de mis mejores proyectos.</h3>
      </Row>
      <Row id='row-proyectos'>
        <Col>
          <div className='box-img'>
            <img src='https://tse1.mm.bing.net/th?id=OIP.iLOuylTm8lnnx25Mjj49QwHaGX&pid=Api' />
          </div>
          <p className='name-proyectos'>Showreel de Vimeo FX</p>
        </Col>
        <Col>
          <div className='box-img'>
            <img src='https://tse1.mm.bing.net/th?id=OIP.iLOuylTm8lnnx25Mjj49QwHaGX&pid=Api' />
          </div>
          <p className='name-proyectos'>Showreel de Vimeo FX</p>
        </Col>
        <Col>
          <div className='box-img'>
            <img src='https://tse1.mm.bing.net/th?id=OIP.iLOuylTm8lnnx25Mjj49QwHaGX&pid=Api' />
          </div>
          <p className='name-proyectos'>Showreel de Vimeo FX</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Proyectos;
