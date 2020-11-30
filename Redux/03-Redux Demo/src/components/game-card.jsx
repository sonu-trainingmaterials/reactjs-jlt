import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';


export default function GameCard({ game }) {
    return (
        <div className="col-sm-3">
            <div className="thumbnail">
                <figure>
                    <img className="thumbnail-image" src={game.cover} alt="Game Cover" />
                    <figcaption><h4>{game.title}</h4></figcaption>
                </figure>
                <div>
                    <NavLink to={`/game/${game._id}`} className="btn btn-success">Edit</NavLink>
                    <button className="btn btn-danger">Delete</button>
                </div>
            </div>            
        </div>
    );
}

GameCard.propTypes = {
    game: PropTypes.object.isRequired
}