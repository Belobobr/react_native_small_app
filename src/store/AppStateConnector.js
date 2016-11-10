import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import SocialNetworkApp from '../components/SocialNetworkApp'
import * as navigationActionCreators from '../actions/navigation'
import * as sessionActionCreators from '../actions/session';

function mapStateToProps(state) {
    return {
        navigation: state.navReducer
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, navigationActionCreators, sessionActionCreators), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SocialNetworkApp)