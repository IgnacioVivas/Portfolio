import './sobreMi.scss';
import { Col, Container, Row } from 'react-bootstrap';
import ProgressBar from '../ProgressBar/ProgressBar';
import SobreMiDos from '../SobreMiDos/SobreMiDos';
import Technologies from '../Technologies/Technologies';

function SobreMi() {
  return (
    <Container className='container-sobreMi' id='sobreMi'>
      <Row>
        <Col lg={6} xl={6} className='d-flex align-items-center'>
          <p id='sobreMi'>
            <span id='span-sobreMi'>Soy una persona curiosa,</span> apasionada por la tecnología, la
            música y los libros. Soy un buscador habitual de conocimiento al que le encanta saber
            cómo funcionan las cosas. En mi tiempo libre me gusta tocar el trombón, jugar
            videojuegos y leer.
          </p>
        </Col>
        <Col id='container-progressBar' lg={6} xl={6}>
          <Technologies />

          {/* <ProgressBar bgcolor='#40cfff' progress='80' technology={'React Js'} />
          <ProgressBar bgcolor='#40cfff' progress='80' technology={'JavaScript'} />
          <ProgressBar bgcolor='#40cfff' progress='70' technology={'Node Js'} />
          <ProgressBar bgcolor='#40cfff' progress='70' technology={'Express Js'} />
          <ProgressBar bgcolor='#40cfff' progress='60' technology={'PostgreSql'} />
          <ProgressBar bgcolor='#40cfff' progress='65' technology={'Sequelize'} />
          <ProgressBar bgcolor='#40cfff' progress='80' technology={'Scss'} />
          <ProgressBar bgcolor='#40cfff' progress='60' technology={'Styled Components'} /> */}
        </Col>
      </Row>
      <SobreMiDos />
    </Container>
  );
}

export default SobreMi;
