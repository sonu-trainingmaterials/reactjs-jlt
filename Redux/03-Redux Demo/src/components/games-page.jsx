import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {fetchGames} from '../actions/index';
import GamesList from './game-list';

class GamesPage extends Component {

    componentDidMount() {
        this.props.fetchGames();
    }

    render() {
        return (
            <div className="col-md-12">
                <h2>Games Page</h2>
                <GamesList games={this.props.games} />
            </div>
        );
    }
}

GamesPage.propTypes = {
    games: PropTypes.array.isRequired,
    fetchGames: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        games: state.games
    }
}

export default connect(mapStateToProps, {fetchGames})(GamesPage);