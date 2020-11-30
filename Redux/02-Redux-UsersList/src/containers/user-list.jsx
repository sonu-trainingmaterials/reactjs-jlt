import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {selectUser} from '../actions/index';

class UserList extends Component
{
    createListItems(){
        return this.props.users.map(item=> <li key={item.id} onClick={()=>this.props.onSelectUser(item)}>{item.firstname} {item.lastname}</li>);
    }

    render(){
        return (
            <ul>
                {this.createListItems()}
            </ul>
        );
    }
}

function mapStateToProps(state ){
    return{
        users:state.users
    }
}

function matchDispatchToProps(dispatch){
    let actionMap={
        onSelectUser:selectUser
    };
    return bindActionCreators(actionMap, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)( UserList);