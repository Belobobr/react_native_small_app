import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator,
} from 'react-native';
import {LoginButton} from 'react-native-fbsdk';
import {CONTENT_MARGIN, HORIZONTAL_CONTENT_MARGIN} from './../../constants/dimensions';
import _get from 'lodash.get';

export default class ProfileTab extends Component {

    componentDidMount() {
        this.props.loadProfile();
    }

    render() {
        const content = <View style={styles.container}>
            <View style={styles.userInfoContainer}>
                <Image
                    style={styles.avatar}
                    source={{uri: _get(this.props.profile, 'data.picture.data.url')}}
                />
                <View style={styles.userNameContainer}>
                    <Text style={styles.flex}>{`Name: ${this.props.profile.data.first_name}`}</Text>
                    <Text style={styles.flex}>{`Family: ${this.props.profile.data.last_name}`}</Text>
                </View>
            </View>
            <Text style={styles.description}>{`Id: ${this.props.profile.data.id}`}</Text>
            <View style={styles.flex}/>
            <View style={styles.logoutButton}>
                <LoginButton
                    publishPermissions={["publish_actions"]}
                    onLogoutFinished={() => {
                        this.props.unAuthorize(this.props.handleNavigate);
                    }}/>
            </View>
        </View>;

        const loading = <View style={styles.centeredContent}>
            <ActivityIndicator/>
        </View>;

        return this.props.profile.loading ? loading : content;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    userInfoContainer: {
        flexDirection: 'row',
        marginTop: CONTENT_MARGIN,
    },
    avatar: {
        marginLeft: HORIZONTAL_CONTENT_MARGIN,
        width: 90,
        height: 90,
    },
    userNameContainer: {
        flexDirection: 'column',
        marginLeft: HORIZONTAL_CONTENT_MARGIN,
    },
    description: {
        height: 24,
        marginTop: CONTENT_MARGIN,
        marginLeft: HORIZONTAL_CONTENT_MARGIN,
    },
    logoutButton: {
        marginTop: CONTENT_MARGIN,
        marginBottom: CONTENT_MARGIN,
        alignSelf: 'center',
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




