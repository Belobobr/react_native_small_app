import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

export default class ItemsTab extends Component {

    componentDidMount() {
    }

    render() {
        return <View style={styles.container}>
            <Text>ItemsTab</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    }
});




