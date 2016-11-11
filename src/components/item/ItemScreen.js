import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput
} from 'react-native';
import Toolbar from './../Toolbar';
import {CONTENT_MARGIN, HORIZONTAL_CONTENT_MARGIN} from './../../constants/dimensions';
import Button from './../Button';

export default class ItemScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            cost: '',
        }
    }

    render() {
        return <View style={styles.container}>
            <Toolbar
                icon={require('./../../images/icon_back.png')}
                title="Create item"
                onIconClicked={this.props.handleBackAction}/>
            <View style={styles.itemInfoContainer}>
                <Image
                    style={styles.image}
                    source={require('./../../images/content_girls.png')}
                />
                <View style={styles.itemNameContainer}>
                    <TextInput
                        style={styles.flex}
                        placeholder="Name"
                        onChangeText={(name) => this.setState({name})}
                    />
                    <TextInput
                        style={styles.flex}
                        placeholder="Cost"
                        onChangeText={(cost) => this.setState({cost})}
                    />
                </View>
            </View>
            <Button style={styles.createButton} title='Create' onPress={this.onCreateItem.bind(this)}/>
            <View style={styles.flex}/>
        </View>;
    }

    onCreateItem() {
        this.props.addItem({
            name: this.state.name,
            cost: parseInt(this.state.cost),
        }, this.props.handleBackAction);
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
        borderRadius: 45,
        width: 90,
        height: 90,
    },
    itemNameContainer: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: HORIZONTAL_CONTENT_MARGIN,
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
    },
    createButton: {
        marginHorizontal: HORIZONTAL_CONTENT_MARGIN,
        marginVertical: CONTENT_MARGIN,
    }
});




