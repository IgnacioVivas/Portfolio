import './sobreMi.scss';
import { Col, Container, Row } from 'react-bootstrap';

function SobreMi() {
  return (
    <Container id='container-sobreMi'>
      <Row>
        <Col>
          <p id='sobreMi'>
            <span id='span-sobreMi'>Lorem ipsum dolor sit amet</span> consectetur adipisicing elit.
            Sunt animi dicta error cupiditate placeat distinctio excepturi in minima nemo iusto,
            quia, aut doloribus quam totam laborum modi debitis. Fuga, fugit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Inventore, eveniet? Maxime doloribus eum debitis odio
            corporis temporibus dolor aut. Quod fugit, in nostrum iste quam quae animi molestiae
            sunt beatae!
          </p>
        </Col>
        <Col>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt animi dicta error
            cupiditate placeat distinctio excepturi in minima nemo iusto, quia, aut doloribus quam
            totam laborum modi debitis. Fuga, fugit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Inventore, eveniet? Maxime doloribus eum debitis odio corporis
            temporibus dolor aut. Quod fugit, in nostrum iste quam quae animi molestiae sunt beatae!
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default SobreMi;
