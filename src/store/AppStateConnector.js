import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import SocialNetworkApp from '../components/SocialNetworkApp'
import * as navigationActionCreators from '../actions/navigation'
function mapStateToProps(state) {
    return {
        navigation: state.navReducer
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, navigationActionCreators), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SocialNetworkApp)