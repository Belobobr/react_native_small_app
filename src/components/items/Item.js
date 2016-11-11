import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
} from 'react-native';
import {WHITE, PRIMARY_COLOR} from './../../constants/colors';
import {CARD_HEIGHT, CARD_WIDTH, CARD_ELEVATION, HORIZONTAL_CONTENT_MARGIN, CONTENT_MARGIN} from './../../constants/dimensions'

const {width} = Dimensions.get('window');

export default class Item extends Component {
    render() {
        return <View style={[styles.item, this.props.style]}>
            <Image
                style={styles.icon}
                source={require('./../../images/girls.png')}
            />
            <Text style={styles.title}>{this.props.title}</Text>
            <Text style={styles.cost}>{`$ ${this.props.title}`}</Text>
        </View>;
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: WHITE,
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        elevation: CARD_ELEVATION,
    },
    image: {
        flex: 1,
        height: 140,
    },
    title: {
        marginLeft: HORIZONTAL_CONTENT_MARGIN,
        marginTop: CONTENT_MARGIN
    },
    cost: {
        marginTop: CONTENT_MARGIN,
        marginRight: HORIZONTAL_CONTENT_MARGIN,
        alignSelf: 'flex-end',
        color: PRIMARY_COLOR,
    }
});




