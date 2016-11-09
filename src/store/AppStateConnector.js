import {connect} from 'react-redux'
import SocialNetworkApp from '../components/SocialNetworkApp'
import {push, pop} from '../actions/navigation'
function mapStateToProps(state) {
    return {
        navigation: state.navReducer
    }
}
export default connect(
    mapStateToProps, {
        pushRoute: (route) => push(route),
        popRoute: () => pop()
    }
)(SocialNetworkApp);


