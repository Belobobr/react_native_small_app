import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import SocialNetworkApp from '../components/SocialNetworkApp'
import * as navigationActionCreators from '../actions/navigation'
import * as sessionActionCreators from '../actions/session';
import * as profileActionCreators from '../actions/profile';

function mapStateToProps(state) {
    return {
        navigation: state.navigation,
        session: state.session,
        profile: state.profile,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, navigationActionCreators, sessionActionCreators, profileActionCreators), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SocialNetworkApp)