import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/api";
import Spinner from "react-bootstrap/Spinner";
import GameItem from "./GameItem";
import Search from "./Search";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function GameList() {
    const [games, setGames] = useState([]);
    const [filteredGames, setFilteredGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(json => {
                setGames(json.results);
                setFilteredGames(json.results);
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    const filterCards = function(e) {
        const searchValue = e.target.value.toLowerCase();
        const filteredArray = games.filter(function(char){
            const lowerCaseName = char.name.toLowerCase();

            if(lowerCaseName.startsWith(searchValue)) {
                return true;
            }
            return false;
        });
        setFilteredGames(filteredArray);
    };

    if(loading) {
        return <Spinner animation="border" variant="dark" className="spinner" />;
    }

    return (
        <>
        <Search handleSearch={filterCards} className="search" />
        <Row>
            {filteredGames.map(game => {
                const { id, name, background_image, rating, released } = game;

                return (
                    <Col sm={6} md={3} key={id}>
                        <GameItem id={id} name={name} background_image={background_image} rating={rating} released={released} />
                    </Col>
                );
            })}
        </Row>
        </>
    );
}

export default GameList;