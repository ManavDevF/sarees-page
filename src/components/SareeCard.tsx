import React from 'react';
import { Card } from 'react-bootstrap';

interface Saree {
    name: string;
    price: number;
    imageUrl: string;
}

interface SareeCardProps {
    saree: Saree;
}

const SareeCard: React.FC<SareeCardProps> = ({ saree }) => {
    return (
        <Card className="mb-4">
            <Card.Img variant="top" src={saree.imageUrl} className="img-fluid" />
            <Card.Body>
                <Card.Title>{saree.name}</Card.Title>
                <Card.Text>Price: ₹{saree.price}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default SareeCard;