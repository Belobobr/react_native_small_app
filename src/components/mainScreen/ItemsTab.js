import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    Dimensions,
} from 'react-native';
import {HORIZONTAL_CONTENT_MARGIN} from './../../constants/dimensions'
import Item from '../item/Item';

export default class ItemsTab extends Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var data = Array.apply(null, {length: 20}).map(() => {
            return {title: 'Some item', cost: 300}
        });
        this.state = {
            dataSource: ds.cloneWithRows(data),
        };
    }

    render() {
        return <ListView
            contentContainerStyle={styles.list}
            dataSource={this.state.dataSource}
            renderRow={(rowData) =>
                <Item
                    style={styles.item}
                    title={rowData.title}
                    cost={rowData.cost}>{rowData}
                </Item>
            }
        />
    }
}

const styles = StyleSheet.create({
    list: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        margin: HORIZONTAL_CONTENT_MARGIN,
    }
});




