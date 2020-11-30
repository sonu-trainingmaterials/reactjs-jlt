import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { saveGame } from '../actions/index';

class GameForm extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            cover: "",
            errors: {},
            loading: false,
            done: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let errors = Object.assign({}, this.state.errors);
        delete errors[e.target.name];

        this.setState({
            [e.target.name]: e.target.value,
            errors
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let errors = {};
        if (this.state.title === '') {
            errors.title = "Cannot be empty";
        }
        if (this.state.cover === '') {
            errors.cover = "Cannt be empty";
        }
        this.setState({ errors });
        //check form is valid
        const isValid = Object.keys(errors).length === 0;
        if (isValid) {
            this.setState({ loading: true });
            const { title, cover } = this.state;
            this.props.saveGame({ title, cover })
                .then(
                    (data) => { this.setState({done:true, loading:false}) },
                    (err) => err.response.json()
                        .then(({ errors }) => {
                            this.setState({ errors, loading: false });
                        })
                );
        }
    }


    render() {
        const formView = (<div className="row">
            <div className="col-md-6 col-md-offset-3">
                <form className="form" onSubmit={this.handleSubmit}>
                    {
                        !!this.state.errors.global && <div className="alert alert-danger">
                            <p>
                                {this.state.errors.global}
                            </p>
                        </div>
                    }
                    <div className="form-group">
                        <label className="control-label">Title</label>
                        <input type="text" className="form-control"
                            name="title" value={this.state.title} onChange={this.handleChange} />
                        {
                            this.state.errors.title && <div className="text-danger">{this.state.errors.title}</div>
                        }
                    </div>
                    <div className="form-group">
                        <label className="control-label">Cover</label>
                        <input type="cover" className="form-control"
                            name="cover" value={this.state.cover} onChange={this.handleChange} />
                        {
                            this.state.errors.cover && <div className="text-danger">{this.state.errors.cover}</div>
                        }
                    </div>
                    <div className="form-group">
                        {this.state.cover !== "" && <img className="thumbnail thumbnail-image" src={this.state.cover} />}
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success"> Add </button>
                    </div>
                    {
                        this.state.loading && <div className="text-default">Processing....</div>
                    }
                </form>
            </div>
        </div>);
        return (
            <div>
                {this.state.done ? <Redirect to="/games" /> : formView}
            </div>
        );
    }
}

export default connect(null, { saveGame })(GameForm);