import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native'
import {PRIMARY_COLOR, WHITE} from './../constants/colors';
import {ANDROID_TOOLBAR_SIZE, ICON_SIZE, HORIZONTAL_CONTENT_MARGIN} from './../constants/dimensions';

export default class Toolbar extends Component {

    render() {
        return <View style={styles.container}>
            <Image
                style={styles.icon}
                source={require('./../images/icon_app.png')}
            />
            <Text style={styles.title}>
                MainScreen
            </Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: ANDROID_TOOLBAR_SIZE,
        backgroundColor: PRIMARY_COLOR,
    },
    title: {
        fontFamily: 'Roboto',
        fontSize: 14,
        textAlign: 'left',
        color: WHITE,
        margin: HORIZONTAL_CONTENT_MARGIN,
    },
    icon: {
        width: ICON_SIZE,
        height: ICON_SIZE,
        marginLeft: HORIZONTAL_CONTENT_MARGIN,
        marginRight: HORIZONTAL_CONTENT_MARGIN,
    }
});
