
//create an action creator
export const selectUser=(user)=>{
    console.log("You clicked on user " + user.firstname);
    //return an action with type(what action) and data (on which data)
    return {
        type:"USER_SELECTED",
        payload:user
    }
}



