export const SET_GAMES = 'SET_GAMES';
export const ADD_GAME ="ADD_GAME";

export function setGames(games) {
    return {
        type: SET_GAMES,
        games
    }
}

export function fetchGames() {
    return dispatch => {
        fetch("/api/games")
            .then(resp => resp.json())
            .then(data => dispatch(setGames(data.games)));
    };
}

export function addGame(game){
    return{
        type:ADD_GAME,
        game
    }
}

export function saveGame(game) {
    return dispatch => {
        return fetch('/api/games', {
            method: 'post',
            body: JSON.stringify(game),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(handleResponse)
        .then(data=>dispatch(addGame(data.game)));
    }
}

// handling response
function  handleResponse(response){
    if(response.ok){
        return response.json();
    }else{
        let error=new Error(response.statusText);
        error.response=response;
        throw error;
    }
}