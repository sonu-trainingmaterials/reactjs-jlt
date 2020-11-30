import * as types from './action-types';

export function loadProfiles(profiles){
    return{
        type: types.GET_PROFILES,
        profiles
    }
}

export function getProfileById(id){
    return{
        type:types.GET_PROFILE,
        id
    }
}

export function addProfile(profile){
    return{
        type: types.ADD_PROFILE,
        profile
    }
}

export function updateProfile(profile){
    return{
        type: types.EDIT_PROFILE,
        profile
    }
}

export function searchProfiles(text){
    return{
        type: types.SEARCH_PROFILE,
        text
    }
}
// ASYNC actions
export function fetchProfiles() {
    return dispatch => {
        fetch("https://profile-services.azurewebsites.net/api/Profile")
            .then(resp => resp.json())
            .then(data => {
                //console.log("Loaded from api", data)
                dispatch(loadProfiles(data))
            });
    };
}

export function saveProfile(profile) {
    return dispatch => {
        return fetch('https://profile-services.azurewebsites.net/api/Profile', {
            method: 'post',
            body: JSON.stringify(profile),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res=>res.json()) //.then(handleResponse)
        .then(data=>dispatch(addProfile(data)));
    }
}

// handling response
// function  handleResponse(response){
//     if(response.ok){
//         return response.json();
//     }else{
//         let error=new Error(response.statusText);
//         error.response=response;
//         throw error;
//     }
// }