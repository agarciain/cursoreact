import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const Footer = () => {

return (
    <Container> 
        <footer className="footer">
            <div className="container-fluid text-center text-md-center">
                <Row>
                    <Col>
                        <p>Esta página es una práctica de el curso de React JS impartido por Coderhouse</p>
                    </Col>
                </Row>
                <Row>
                    <Col> 
                        <h6>Está construido con</h6>
                        <img
                        alt=""
                        src="https://avatars.githubusercontent.com/u/6853419?s=200&v=4"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                        React Bootstrap 
                        <img
                        alt=""
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                        React 
                        <img
                        alt=""
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/410px-Vitejs-logo.svg.png?20220412224743"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                        Vite 
                    </Col>
                </Row>
            </div>
        </footer>
    </Container>  
);
}