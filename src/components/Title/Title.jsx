import './title.scss';
import { Container, Row } from 'react-bootstrap';

function Title() {
  return (
    <Container id='container-title'>
      <Row id='row-title'>
        <h1 id='main-title'>
          Hola, soy Ignacio, <br /> desarrollador Front End
        </h1>
        <h3 id='secondary-title'>Apasionado por la creación de interfaces impactantes.</h3>
      </Row>
    </Container>
  );
}

export default Title;
