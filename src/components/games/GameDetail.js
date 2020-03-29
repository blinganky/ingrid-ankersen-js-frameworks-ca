import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { BASE_URL } from "../../constants/api";

function GameDetail() {
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    let { id } = useParams();

    const url = BASE_URL + "/" + id;

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setDetail(json))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [url]);

    if(loading) {
        return <Spinner animation="border" className="spinner" />
    }

    let createMarkup = HTML => {
        return { __html: HTML };
    };

    return (
        <div className="details">
            <Image src={detail.background_image} />
            <h2>{detail.name}</h2>
            <p dangerouslySetInnerHTML={createMarkup(detail.description)} />
            <a href={detail.website}>Visit website</a>
        </div>
    );
}

export default GameDetail;