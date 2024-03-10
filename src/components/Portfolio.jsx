import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import fitgenie from '../assets/fitgenie.png'
export default function Portfolio() {
    return (
        <Container className='projectcontainer'>
            <Row>
                <Col>
                    <div className="project">
                        <a href="https://fitgenie-dd75d1aed475.herokuapp.com/" target="blank" >
                            <img src='./src/assets/fitgenie.png' className='projectcard' alt="FitGenie AI Fitness App"></img>
                        </a>
                        <p className="projecttext">FitGenie AI Fitness App</p>
                    </div>
                </Col>
                <Col>
                    <div className="project">
                        <a href="https://crunchwrapdestroyer.github.io/Open-Weather-Search-Tool/" target="blank" >
                            <img src='./src/assets/weather.png' className='projectcard'></img>
                        </a>
                        <p className="projecttext">Weather Forecast Dashboard</p>
                    </div>
                </Col>
                <Col>
                    <div className="project">
                        <a href="https://crunchwrapdestroyer.github.io/book-search/" target="blank" >
                            <img src='./src/assets/booksearch.png' className='projectcard'></img>
                        </a>
                        <p className="projecttext">Book Search</p>
                    </div>
                </Col>
                <Col>
                    <a href="https://crunchwrapdestroyer.github.io/Universal-Passwords-Apex/" target="blank" >
                        <div className="project">
                            <img src='./src/assets/password.png' className='projectcard'></img>
                        </div>
                        </a>
                        <p className="projecttext">Password Generator</p>
                </Col>
            </Row>
        </Container>
    );
}