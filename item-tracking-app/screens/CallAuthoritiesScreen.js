import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import TitleText from "../components/TitleText";
import Card from "../components/Card";
import BodyText from "../components/BodyText";
import CallButton from "../components/CallButton";

const CallAuthoritiesScreen = props => {
    return (
            <View styles={styles.screen}>
                <TitleText style={styles.title}>Call the Authorities</TitleText>
                <Card style={styles.inputContainer}>
                    <BodyText>Press the button below to open your phone app to call the authorities</BodyText>
                </Card>
                    <CallButton/>
            </View>
    );
};

CallAuthoritiesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Call Authorities',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}><Item title="Menu" iconName='ios-menu'
                                                                                    onPress={() => {
                                                                                        navData.navigation.toggleDrawer();
                                                                                    }}/></HeaderButtons>
    }
};

const styles = StyleSheet.create({
    screen: {
        margin: 30
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        marginHorizontal: '25%',
        fontWeight: 'bold',
        alignItems: 'center'
    },
    inputContainer: {
        width: '80%',
        maxWidth: '95%',
        minWidth: 300,
        alignItems: 'center',
        marginHorizontal: '10%'
    },
});

export default CallAuthoritiesScreen;