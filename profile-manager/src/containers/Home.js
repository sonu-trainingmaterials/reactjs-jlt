
import { connect } from "react-redux"
import Home from "../components/Home"
import {fetchProfiles, searchProfiles} from '../actions/profile-action-creators';
import { bindActionCreators } from "redux";

function mapStateToProps(state){
    return{
        profiles:state.profileState.items, // CombinedState.profileState.member
        searchText:state.profileState.searchText,
        result:state.profileState.result
    }
}

function mapDispatchToProps(dispatch){
    let actionMap= {
        doSearch:searchProfiles,
        loadData:fetchProfiles
    }
    return bindActionCreators(actionMap, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)