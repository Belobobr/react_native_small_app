import React, {Component} from 'react';
import Home from './Home';
import About from './About';
import LoginScreen from './LoginScreen';
import MainScreen from './mainScreen/index';

import {
    BackAndroid,
    NavigationExperimental
} from 'react-native'

const {
    CardStack: NavigationCardStack
} = NavigationExperimental;

class NavRoot extends Component {
    constructor(props) {
        super(props);
        this.renderScene = this.renderScene.bind(this);
        this.handleBackAction = this.handleBackAction.bind(this)
    }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.handleBackAction)
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this.handleBackAction)
    }

    renderScene(navigationProps) {
        const {route} = navigationProps.scene;
        switch (route.key) {
            case 'login':
                return <LoginScreen {...this.props}/>;
            case 'main':
                return <MainScreen handleNavigate={this.handleNavigate.bind(this)}/>;
            case 'home':
                return <Home handleNavigate={this.handleNavigate.bind(this)}/>;
            case 'about':
                return <About goBack={this.handleBackAction.bind(this)}/>;
        }
    }

    handleBackAction() {
        if (this.props.navigation.index === 0) {
            return false
        }
        this.props.popRoute();
        return true
    }

    handleNavigate(action) {
        switch (action && action.type) {
            case 'push':
                this.props.pushRoute(action.route);
                return true;
            case 'back':
            case 'pop':
                return this.handleBackAction();
            default:
                return false
        }
    }

    render() {
        return (
            <NavigationCardStack
                navigationState={this.props.navigation}
                onNavigate={this.handleNavigate.bind(this)}
                renderScene={this.renderScene.bind(this)}/>
        )
    }
}

export default NavRoot