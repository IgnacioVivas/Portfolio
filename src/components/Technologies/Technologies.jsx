import React from 'react';
import './technologies.scss';
import { Col, Container, Row } from 'react-bootstrap';
import { FaNodeJs, FaReact, FaSass, FaGithub, FaTrello, FaJira } from 'react-icons/fa';
import { RiJavascriptLine } from 'react-icons/ri';
import { SiPostgresql, SiSequelize, SiStyledcomponents } from 'react-icons/si';
function Technologies() {
  const esPantallaAncha = window.innerWidth > 1200;
  return (
    <Container className='container-technologies'>
      {esPantallaAncha ? (
        <>
          <Row>
            <Col className='card-technologies'>
              <FaReact className='technologies' />
              <span className='text-technologies'>React Js</span>
            </Col>
            <Col className='card-technologies'>
              <RiJavascriptLine className='technologies' />
              <span className='text-technologies'>JavaScript</span>
            </Col>
            <Col className='card-technologies'>
              <FaNodeJs className='technologies' />
              <span className='text-technologies'>Node Js</span>
            </Col>
            <Col className='card-technologies'>
              <SiPostgresql className='technologies' />
              <span className='text-technologies'>PostgreSql</span>
            </Col>
            <Col className='card-technologies'>
              <SiSequelize className='technologies' />
              <span className='text-technologies'>Sequelize</span>
            </Col>
          </Row>
          <Row>
            <Col className='card-technologies'>
              <FaSass className='technologies' />
              <span className='text-technologies'>Scss</span>
            </Col>
            <Col className='card-technologies'>
              <SiStyledcomponents className='technologies' />
              <span className='text-technologies' id='styled-components'>
                Styled Components
              </span>
            </Col>
            <Col className='card-technologies'>
              <FaGithub className='technologies' />
              <span className='text-technologies'>GitHub</span>
            </Col>
            <Col className='card-technologies'>
              <FaTrello className='technologies' />
              <span className='text-technologies'>Trello</span>
            </Col>
            <Col className='card-technologies'>
              <FaJira className='technologies' />
              <span className='text-technologies'>Jira</span>
            </Col>
          </Row>
        </>
      ) : (
        <Row>
          <Col className='card-technologies'>
            <FaReact className='technologies' />
            <span className='text-technologies'>React Js</span>
          </Col>
          <Col className='card-technologies'>
            <RiJavascriptLine className='technologies' />
            <span className='text-technologies'>JavaScript</span>
          </Col>
          <Col className='card-technologies'>
            <FaNodeJs className='technologies' />
            <span className='text-technologies'>Node Js</span>
          </Col>
          <Col className='card-technologies'>
            <SiPostgresql className='technologies' />
            <span className='text-technologies'>PostgreSql</span>
          </Col>
          <Col className='card-technologies'>
            <SiSequelize className='technologies' />
            <span className='text-technologies'>Sequelize</span>
          </Col>

          <Col className='card-technologies'>
            <FaSass className='technologies' />
            <span className='text-technologies'>Scss</span>
          </Col>
          <Col className='card-technologies'>
            <SiStyledcomponents className='technologies' />
            <span className='text-technologies' id='styled-components'>
              Styled Components
            </span>
          </Col>
          <Col className='card-technologies'>
            <FaGithub className='technologies' />
            <span className='text-technologies'>GitHub</span>
          </Col>
          <Col className='card-technologies'>
            <FaTrello className='technologies' />
            <span className='text-technologies'>Trello</span>
          </Col>
          <Col className='card-technologies'>
            <FaJira className='technologies' />
            <span className='text-technologies'>Jira</span>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Technologies;
