import Container from 'react-bootstrap/Container';
import './ItemListContainer.css';

export const ItemListContainer = ({greeting}) => {
    return (
      <Container>
          <h1 className="welcome-message">{greeting}</h1>
      </Container>
    );
  }