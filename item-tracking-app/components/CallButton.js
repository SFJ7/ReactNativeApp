import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {Linking} from 'expo';
import Colors from "../constants/Colors";

const CallButton = props => {

    const _pressCall = () => {
        const url = 'tel://911';
        Linking.openURL(url)
    };

    return (
        <View style={styles.button}>
            <Button color={Colors.primary}  title='Call Authorities' onPress={_pressCall}/>
        </View>
    );

}

export default CallButton;

const styles = StyleSheet.create({
    button: {
        margin: 30
    }
})