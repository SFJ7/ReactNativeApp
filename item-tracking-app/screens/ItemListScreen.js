import React from 'react';
import {View, StyleSheet, Text, Platform, FlatList} from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import {useSelector} from "react-redux";
import ItemThing from "../components/ItemThing";

const ItemListScreen = props => {
    const items = useSelector(state => state.items.items);
    return (
        <View>
            {items.length === 0 ?
                <Text>No items have been added! Press the plus button to add an item.</Text>
                :
                <FlatList
                    data={items}
                    keyExtractor={item => item.name}
                    renderItem={itemData => <ItemThing
                        image={itemData.item.image}
                        name={itemData.item.name}
                        serialNumber={itemData.item.serialNumber}
                        radius={itemData.item.radius}
                        onPress={() => {}}
                    />}/>
            }
        </View>

    );
};

ItemListScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Items',
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}><Item title="Add Item"
                                                                                     iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                                                                                     onPress={() => {
                                                                                         navData.navigation.navigate('AddItem');
                                                                                     }}/></HeaderButtons>,
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}><Item title="Menu" iconName='ios-menu'
                                                                                    onPress={() => {
                                                                                        navData.navigation.toggleDrawer();
                                                                                    }}/></HeaderButtons>
    }
};

const styles = StyleSheet.create({});

export default ItemListScreen;