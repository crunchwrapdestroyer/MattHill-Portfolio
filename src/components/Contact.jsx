import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Contact() {
    return (
        <Container className='contactcontainer'>
            <Row>
                <Col>
                    <h1 className='abouttext'>Contact</h1>
                    <h2 className='abouttext'>hillmatt58@gmail.com</h2>
                    <Row className='linkcontainer'>
                        <Col>
                            <a href='https://github.com/crunchwrapdestroyer?tab=repositories' target='blank' >
                                <img id='icon1' src='/src/assets/github.png' alt='Github Icon'></img>
                            </a>
                        </Col>
                        <Col>
                            <a href='https://www.linkedin.com/in/matt-hill-18026a175/' target='blank' >
                                <img id='icon2' src='/src/assets/linkedin.png' alt='Linkedin Icon'></img>
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

