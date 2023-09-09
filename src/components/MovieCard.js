import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MovieCard({movie: {title, image, author, description}}) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Footer>
                    Author: {author}
                </Card.Footer>
            </Card.Body>
        </Card>
    );
}

export default MovieCard;