//import profiles from '../data/inmemory-data';
import * as types from '../actions/action-types';

const initialState ={
    items: [],
    searchText:'',
    profile:undefined,
    result:[]
}

const ProfileReducer = (state=initialState,action)=>{
    switch(action.type){
        case types.GET_PROFILES:
            return { 
                ...state,
                items:action.profiles
            };
        case types.ADD_PROFILE:
            return{
                ...state,
                items:state.items.concat(action.profile)
            }            
        case types.EDIT_PROFILE:
            let index = state.items.findIndex(p=>p.id==action.profile.id);
            let temp = state.items;
            temp.splice(index,1,action.profile);
            return{
                ...state,
                items:temp,
                profile:undefined
            }
        case types.GET_PROFILE:
            return{
                ...state,
                profile:state.items.find(p=>p.id==action.id)
            }
        case types.SEARCH_PROFILE:
            if(action.text){
                return {
                    ...state,
                    searchText:action.text,
                    result: state.items.filter(p => p.name.toUpperCase().indexOf(action.text.toUpperCase()) >= 0)
                }
            }else{
                return{
                    ...state,
                    searchText:'',
                    result:[]
                }
            }
        default:
            return {...state};
    }
}

export default ProfileReducer;