import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class UserDetail extends Component {
    render() {
        if (this.props.user) {
            return (
                <div>
                    <img src={this.props.user.thumbnail} className="image-thumbnail" />
                    <h2>Age: {this.props.user.firstname}</h2>
                    <h3>Description: {this.props.user.description}</h3>
                </div>
            );
        }
        else{
            return (<div>Select a user</div>)
        }
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);