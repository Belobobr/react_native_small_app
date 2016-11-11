import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import Toolbar from '../Toolbar';
import ProfileTab from './ProfileTab';
import ItemsTab from './ItemsTab';
import FloatingButton from './../FloatingButton';
import {PRIMARY_COLOR, WHITE} from '../../constants/colors';

const itemRoute = {
    type: 'push',
    route: {
        key: 'item',
        title: 'item'
    }
};

export default class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            floatingButtonVisible: false,
        }
    }

    render() {
        return <View style={styles.container}>
            <Toolbar icon={require('./../../images/icon_app.png')} title="Social network application"/>
            <ScrollableTabView
                renderTabBar={() => <DefaultTabBar style={styles.tabBar}/>}
                tabBarTextStyle={{
                    fontWeight: 'normal',
                    fontFamily: 'Roboto'
                }}
                tabBarUnderlineStyle={{
                    backgroundColor: WHITE,
                }}
                tabBarBackgroundColor={PRIMARY_COLOR}
                tabBarActiveTextColor={WHITE}
                tabBarInactiveTextColor={WHITE}
                onChangeTab={((tab) => {
                    this.setState({floatingButtonVisible: tab.i === 1})
                }).bind(this)}
            >
                <ProfileTab {...this.props} tabLabel='Profile'>My</ProfileTab>
                <ItemsTab tabLabel='Items'>favorite</ItemsTab>
            </ScrollableTabView>
            {this.state.floatingButtonVisible && <FloatingButton onPress={this.onCreateNewItem.bind(this)}/>}
        </View>
    }

    onCreateNewItem() {
        this.props.handleNavigate(itemRoute);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 20,
    },
    tabBar: {
        elevation: 4,
    },
});
