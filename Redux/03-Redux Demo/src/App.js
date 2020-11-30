import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './components/home';
import About from './components/about';
import GamesPage from './components/games-page';
import GameForm from './components/game-form';
import GameEdit from './components/game-edit';

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h2>Games React App</h2>
                <hr />                
                <NavLink to="/">Home</NavLink> |
                <NavLink to="/about">About</NavLink> |
                <NavLink to="/games">Games</NavLink> |
                <NavLink to="/games/new">New Game </NavLink>
                <hr />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route exact path="/games" component={GamesPage} />
                    <Route exact path="/games/new" component={GameForm}/>
                    <Route exact path="/game/:id" component={GameEdit}/>
                </Switch>
            </div>
        );
    }
}

export default App;
