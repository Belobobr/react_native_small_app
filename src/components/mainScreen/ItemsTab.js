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
        this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    }

    componentDidMount() {
        this.props.loadItems();
    }

    render() {
        const dataSource = this.dataSource.cloneWithRows(this.props.items.data);

        return <ListView
            enableEmptySections={true}
            contentContainerStyle={styles.list}
            dataSource={dataSource}
            renderRow={(rowData) =>
                <Item
                    style={styles.item}
                    name={rowData.name}
                    cost={rowData.cost}>{rowData}
                </Item>
            }
        />
    }
}

const styles = StyleSheet.create({
    list: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        margin: HORIZONTAL_CONTENT_MARGIN,
    }
});




