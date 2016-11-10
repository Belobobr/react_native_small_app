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
import {PRIMARY_COLOR, WHITE} from '../../constants/colors';

const itemRoute = {
    type: 'push',
    route: {
        key: 'item',
        title: 'item'
    }
};

export default class MainScreen extends Component {

    render() {
        return <View style={styles.container}>
            <Toolbar/>
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
            >
                <ProfileTab tabLabel='Profile'>My</ProfileTab>
                <ItemsTab tabLabel='Items'>favorite</ItemsTab>
            </ScrollableTabView>
        </View>
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
    }
});
