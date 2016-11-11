import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import Toolbar from './../Toolbar';
import {CONTENT_MARGIN, HORIZONTAL_CONTENT_MARGIN} from './../../constants/dimensions';

export default class ItemScreen extends Component {

    render() {
        return <View style={styles.container}>
            <Toolbar icon={require('./../../images/icon_back.png')} title="Create item" onIconClicked={this.props.handleBackAction}/>
            <View style={styles.itemInfoContainer}>
                <Image
                    style={styles.image}
                    source={require('./../../images/content_girls.png')}
                />
                <View style={styles.itemNameContainer}>
                    <Text style={styles.flex}>{`Name: `}</Text>
                    <Text style={styles.flex}>{`Cost: `}</Text>
                </View>
            </View>
            <View style={styles.flex}/>
        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    itemInfoContainer: {
        flexDirection: 'row',
        marginTop: CONTENT_MARGIN,
    },
    image: {
        marginLeft: HORIZONTAL_CONTENT_MARGIN,
        width: 90,
        height: 90,
    },
    itemNameContainer: {
        flexDirection: 'column',
        marginLeft: HORIZONTAL_CONTENT_MARGIN,
    },
    description: {
        height: 24,
        marginTop: CONTENT_MARGIN,
        marginLeft: HORIZONTAL_CONTENT_MARGIN,
    },
    flex: {
        flex: 1,
    },
    centeredContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});




