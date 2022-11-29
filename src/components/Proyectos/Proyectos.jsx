import './proyectos.scss';
import { Container, Row, Col } from 'react-bootstrap';
import page from '../../image/mypage.png';
import riding from '../../image/riding-school.png';
import ecommerce from '../../image/alerta-bihotza.png';

function Proyectos() {
  return (
    <Container className='container-proyectos' id='portfolio'>
      <Row id='row-proyectos-title'>
        <h2>Mis mejores trabajos</h2>
        <h3>Aquí hay una selección de mis mejores proyectos.</h3>
      </Row>
      <Row id='row-proyectos'>
        <Col xs={12} md={6} lg={4}>
          <div className='box-img'>
            <img src={page} />
          </div>
          <p className='name-proyectos'>Showreel de Vimeo FX</p>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className='box-img'>
            <img src={ecommerce} />
          </div>
          <p className='name-proyectos'>Showreel de Vimeo FX</p>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <div className='box-img'>
            <img src={riding} />
          </div>
          <p className='name-proyectos'>Showreel de Vimeo FX</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Proyectos;
