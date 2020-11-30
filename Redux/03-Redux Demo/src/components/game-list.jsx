import React from 'react';
import PropTypes from 'prop-types';

import GameCard from './game-card';

export default function GamesList({ games }) {
    const emptyMessage = (
        <p>There is no games in your collection</p>
    );

    const gamesList = (
        <div>
            {games.map(game => <GameCard  key={game._id} game={game}/>)}
        </div>
    )

    return (
        <div>
            {games.length === 0 ? emptyMessage : gamesList}
        </div>
    );
}

GamesList.propTypes = {
    games: PropTypes.array.isRequired
}