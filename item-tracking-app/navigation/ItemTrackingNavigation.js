import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import {createDrawerNavigator} from "react-navigation-drawer";

import AddItemScreen from "../screens/AddItemScreen";
import CallAuthoritiesScreen from "../screens/CallAuthoritiesScreen";
import MapScreen from "../screens/MapScreen";
import ItemListScreen from "../screens/ItemListScreen";
import Colors from "../constants/Colors";

const ItemTrackingNavigator = createStackNavigator({
    MapStuff: MapScreen,
    CallAuthorities: CallAuthoritiesScreen,
    ItemList: ItemListScreen,
    AddItem: AddItemScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary: ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
        initialRouteName: 'Categories'
    }
});

const DrawerNavigator = createDrawerNavigator({
    Menu: {
        screen: ItemTrackingNavigator, navigationOptions: {
            drawerLabel: 'Menu'
        }
    },
    MapStuff: {
        screen: MapScreen, navigationOptions: {
            drawerLabel: 'Item Map'
        }
    },
    AddItem: {
        screen: AddItemScreen, navigationOptions: {
            drawerLabel: 'Add Item'
        }
    },
    ItemList: {
        screen: ItemListScreen, navigationOptions: {
            drawerLabel: 'Items'
        }
    },
    CallAuthorities: {
        screen: CallAuthoritiesScreen, navigationOptions: {
            drawerLabel: 'Call Authorities'
        }
    },
}, {
    unmountInactiveRoutes: true,
    headerMode: "none",
});

export default createAppContainer(DrawerNavigator);