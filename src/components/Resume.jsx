import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Resume() {
    return (
        <Container className='resumecontainer'>
            <Row>
                <Col>
                    <img id="resume1" src="./assets/resume1.jpg"></img>
                    <img id="resume2" src="./assets/resume2.jpg"></img>
                </Col>
            </Row>
        </Container>
    );
}