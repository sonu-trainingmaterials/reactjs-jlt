import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddProfileForm from './containers/AddProfile';
import EditProfileForm from './containers/EditProfile';
import AuthorInfo from './components/AuthorInfo';
import AppInfo from './components/AppInfo';
import Feedback from './components/Feedback';

//JSX= Javascript + HTML

export default class App extends Component {

    render() {
        let HomeComponent = React.lazy(()=>import('./containers/Home'));
        return (
            <Router>
                <NavBar />
                <div className="container-fluid">
                    <Switch>
                        <Route exact path="/">
                            <React.Suspense fallback={<div><h2>Loading...</h2></div>}>
                                <HomeComponent />
                            </React.Suspense>
                        </Route>
                        <Route path="/about">
                            <About>
                                <AuthorInfo author="Sonu" company="Synergetics" />
                                <AppInfo name="Profile Manager" />
                            </About>
                        </Route>
                        <Route path="/profiles/new">
                            <AddProfileForm />
                        </Route>
                        <Route path="/profiles/edit/:id">
                            <EditProfileForm />
                        </Route>
                        <Route path="/feedback">
                            <Feedback/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

