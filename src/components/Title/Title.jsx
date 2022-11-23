import './title.scss';
import { Container, Row } from 'react-bootstrap';

function Title() {
  return (
    <Container id='container-title'>
      <Row id='row-title'>
        <h1 id='main-title'>
          Hola, soy Ignacio, <br /> desarrollador Front End
        </h1>
        <h3 id='secondary-title'>Hola, soy Ignacio, desarrollador Front End</h3>
      </Row>
    </Container>
  );
}

export default Title;
