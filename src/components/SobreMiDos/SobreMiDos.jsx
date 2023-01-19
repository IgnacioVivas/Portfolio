import { Col, Container, Row } from 'react-bootstrap';
import './sobreMiDos.scss';

function SobreMiDos() {
  return (
    <Row id='container-sobreMiDos'>
      <Col md={6} lg={3} className='sobreMi-dos'>
        <i className='ri-flashlight-line icon'></i>
        <p className='text-sobreMi'>
          Con +900 horas de programación en el bootcamp Soy Henry, basado en prácticas y proyectos
          reales, aprendí las habilidades más demandadas del mercado.
        </p>
      </Col>
      <Col md={6} lg={3} className='sobreMi-dos'>
        <i className='ri-earth-line icon'></i>
        <p className='text-sobreMi'>
          Estoy listo para trasladarme a la ciudad de su empresa si es necesario.
        </p>
      </Col>
      <Col md={6} lg={3} className='sobreMi-dos'>
        <i className='ri-timer-flash-line icon'></i>
        <p className='text-sobreMi'>Nunca llego tarde y siempre soy muy puntual con mis plazos.</p>
      </Col>
      <Col md={6} lg={3} className='sobreMi-dos'>
        <i className='ri-open-arm-line icon'></i>
        <p className='text-sobreMi'>
          Estoy buscando experiencias para aprender nuevas tecnologías. Mis intereses están en el
          desarrollo web, bases de datos y aplicaciones móviles.
        </p>
      </Col>
    </Row>
  );
}

export default SobreMiDos;
