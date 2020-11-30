
import EditProfileForm from '../components/EditProfile';
import { getProfileById , updateProfile } from '../actions/profile-action-creators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps(state){
    return{
        profile:state.profileState.profile
    }
}

function mapDispatchToProps(dispatch){
    let actionMap={
        doGetById: getProfileById,
        doUpdate:updateProfile
    }
    return bindActionCreators(actionMap, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm);