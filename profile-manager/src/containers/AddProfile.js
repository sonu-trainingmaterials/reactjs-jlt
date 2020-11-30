
import AddProfileForm from '../components/AddProfile';
import {saveProfile} from '../actions/profile-action-creators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch)
{
    let actionMap={
        doAdd:saveProfile
    };
    return bindActionCreators(actionMap,dispatch);
}

export default connect(null,mapDispatchToProps)(AddProfileForm);
