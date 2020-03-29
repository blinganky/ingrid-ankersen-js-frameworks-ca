import React from "react";
import Heading from "../layout/Heading";
import GameList from "../games/GameList";

function Home() {
    return(
        <div className="container">
        <Heading title="Games" />
        <GameList />
        </div>
    );
}

export default Home;