import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function GameItem({ id, name, background_image, rating, released }) {
    return (
        <Card>
            <Card.Img variant="top" src={background_image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <p className="card-info">
                    <b>Rating:</b> {rating}
                </p>
                <p className="card-info">
                    <b>Release date:</b> {released}
                </p>
                <Link to={"games/" + id}>
                    <Button variant="secondary" block>
                        View
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default GameItem;