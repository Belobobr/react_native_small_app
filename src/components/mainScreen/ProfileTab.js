import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
const FBSDK = require('react-native-fbsdk');
const {
    GraphRequest,
    GraphRequestManager,
} = FBSDK;

export default class ProfileTab extends Component {

    componentDidMount() {
        // Create a graph request asking for user information with a callback to handle the response.
        const infoRequest = new GraphRequest(
            '/me',
            null,
            this.responseInfoCallback.bind(this),
        );
        // Start the graph request.
        new GraphRequestManager().addRequest(infoRequest).start();
    }

    responseInfoCallback(error, result) {
        if (error) {
            console.error('Error fetching data: ' + error.toString());
        } else {
            debugger;
            alert('Success fetching data: ' + result.toString());
        }
    }

    render() {
        return <View style={styles.container}>
            <Text>ProfileTab</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    }
});




