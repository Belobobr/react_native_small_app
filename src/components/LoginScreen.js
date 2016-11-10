import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import FBSDK from 'react-native-fbsdk';
const {
    LoginButton,
    AccessToken
} = FBSDK;

const mainRoute = {
    type: 'push',
    route: {
        key: 'main',
        title: 'Main'
    }
};

export default class LoginScreen extends Component {

    componentDidMount() {
        // this.props.pushRoute(mainRoute)
        // this.props.authorize(null);
    }

    render() {
        return <View style={styles.container}>
            <Text style={styles.welcome}>
                Welcome to SocialNetworkApp
            </Text>
            <LoginButton
                publishPermissions={["publish_actions"]}
                onLoginFinished={
                    (error, result) => {
                        if (error) {
                            alert("login has error: " + result.error);
                        } else if (result.isCancelled) {
                            alert("login is cancelled.");
                        } else {
                            AccessToken.getCurrentAccessToken().then(
                                (data) => {
                                    {/*this.props.authorize(data.accessToken);*/}
                                    this.props.pushRoute(mainRoute);
                                    alert(data.accessToken.toString())
                                }
                            )
                        }
                    }
                }
                onLogoutFinished={() => alert("logout.")}/>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 20,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
