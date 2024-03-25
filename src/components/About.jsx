import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function About() {
    return (
        <Container className='about'>
            <Row>
                <Col>
                    <p className='abouttext'>My name is Matt, I am an aspiring software programmer from Eureka, California. I am soon to complete a 6 month, full stack javascript coding course hosted by University of California, Davis. I have a Bachelor's of Science degree in Environmental Planning and Policy, as well as 4 years as an inventory administrator at a leading extraction company in the legal cannabis market. </p>
                </Col>
            </Row>
        </Container>
    );
}