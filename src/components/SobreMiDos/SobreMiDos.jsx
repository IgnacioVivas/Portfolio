import { Col, Container, Row } from 'react-bootstrap';
import './sobreMiDos.scss';

function SobreMiDos() {
  return (
    <Row id='container-sobreMiDos'>
      <Col>
        <i className='ri-flashlight-line icon'></i>
        <p className='text-sobreMi'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque minus unde a sequi at mod
        </p>
      </Col>
      <Col>
        <i className='ri-earth-line icon'></i>
        <p className='text-sobreMi'>
          Estoy listo para trasladarme a la ciudad de su empresa si es necesario.
        </p>
      </Col>
      <Col>
        <i className='ri-timer-flash-line icon'></i>
        <p className='text-sobreMi'>Nunca llego tarde y siempre soy muy puntual con mis plazos.</p>
      </Col>
      <Col>
        <i className='ri-open-arm-line icon'></i>
        <p className='text-sobreMi'>
          Estoy buscando para aprender nuevas tecnologías. Mis intereses están en el desarrollo web,
          bases de datos y aplicaciones móviles.
        </p>
      </Col>
    </Row>
  );
}

export default SobreMiDos;
