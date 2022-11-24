import './sobreMi.scss';
import { Col, Container, Row } from 'react-bootstrap';
import ProgressBar from '../ProgressBar/ProgressBar';

function SobreMi() {
  return (
    <Container className='container-sobreMi' id='sobreMi'>
      <Row>
        <Col>
          <p id='sobreMi'>
            <span id='span-sobreMi'>Soy una persona curiosa</span> apasionada por la ciencia, las
            matemáticas y la tecnología. Soy un buscador habitual de conocimiento al que le encanta
            saber cómo funcionan las cosas. En mi tiempo libre me gusta tocar el trombone, jugar
            videojuegos y leer.
          </p>
        </Col>
        <Col id='container-progressBar'>
          <ProgressBar bgcolor='#40cfff' progress='80' technology={'Scss'} />
          <ProgressBar bgcolor='#40cfff' progress='60' technology={'Styled Components'} />
          <ProgressBar bgcolor='#40cfff' progress='80' technology={'JavaScript'} />
          <ProgressBar bgcolor='#40cfff' progress='80' technology={'React Js'} />
          <ProgressBar bgcolor='#40cfff' progress='70' technology={'Node Js'} />
          <ProgressBar bgcolor='#40cfff' progress='70' technology={'Express Js'} />
          <ProgressBar bgcolor='#40cfff' progress='60' technology={'PostgreSql'} />
          <ProgressBar bgcolor='#40cfff' progress='65' technology={'Sequelize'} />
        </Col>
      </Row>
    </Container>
  );
}

export default SobreMi;
