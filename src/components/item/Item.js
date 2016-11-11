import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
} from 'react-native';
import {WHITE, PRIMARY_COLOR} from './../../constants/colors';
import {
    CARD_HEIGHT,
    CARD_ELEVATION,
    CARD_PREVIEW_IMAGE_HEIGHT,
    HORIZONTAL_CONTENT_MARGIN,
    CONTENT_MARGIN
} from './../../constants/dimensions'
var {width} = Dimensions.get('window');

export default class Item extends Component {
    render() {
        return <View style={[styles.item, this.props.style]}>
            <Image
                style={styles.image}
                source={require('./../../images/content_girls.png')}
            />
            <Text style={styles.name}>{this.props.name}</Text>
            <Text style={styles.cost}>{`$ ${this.props.cost}`}</Text>
        </View>;
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: WHITE,
        width: (width / 2) - (2 * HORIZONTAL_CONTENT_MARGIN),
        height: CARD_HEIGHT,
        elevation: CARD_ELEVATION,
    },
    image: {
        width: (width / 2) - (2 * HORIZONTAL_CONTENT_MARGIN),
        height: CARD_PREVIEW_IMAGE_HEIGHT,
    },
    name: {
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




