import React from 'react';
import {StyleSheet, Alert, FlatList} from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from '../components/HeaderButton';
import MapView, {Circle} from "react-native-maps";
import {useSelector} from "react-redux";

const MapScreen = props => {
    const items = useSelector(state => state.items.items);

    const mapRegion = {
        latitude: 40.7649,
        longitude: -111.8421,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    };

    return (
        <MapView style={styles.map} region={mapRegion}>
            {items.map((circle, index) => {
                return <Circle
                    key={circle.name}
                    title="Your item location"
                    radius={circle.radius * 10}
                    fillColor={'#'+('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6)}
                    zIndex={index}
                    center={{latitude: parseFloat(circle.lat), longitude: parseFloat(circle.long)}}/>


            })}
        </MapView>
    );
};

MapScreen.navigationOptions = navData => {

    return {
        headerTitle: 'Item Locations',
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}><Item title="Add Item"
                                                                                     iconName="md-alarm"
                                                                                     onPress={() => {
                                                                                         Alert.alert('Item Leaving Acceptable Radius!', 'One of your items is leaving the acceptable radius! Would you like to call the authorities?',
                                                                                             [{text: 'No', style: 'cancel', onPress: () =>{console.log('Cancel Pressed')}}, {text: 'Yes', onPress: () =>  navData.navigation.navigate('CallAuthorities')}]);
                                                                                     }}/></HeaderButtons>,
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}><Item title="Menu" iconName='ios-menu'
                                                                                    onPress={() => {
                                                                                        navData.navigation.toggleDrawer();
                                                                                    }}/></HeaderButtons>
    }
};

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
});

export default MapScreen;