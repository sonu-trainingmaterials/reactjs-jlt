import {SET_GAMES, ADD_GAME } from '../actions/index';

export default function games(state=[], action=[]){
    switch(action.type){        
        case SET_GAMES:
            state= action.games;
            break;
        case ADD_GAME:
            return [
                ...state,
                action.game
            ]
        default:
            return state;
    }
    return state;
}