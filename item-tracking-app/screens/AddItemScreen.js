import React, {useState} from 'react';
import {ScrollView, Button, View, StyleSheet, Text, TextInput, Alert} from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import {useDispatch} from "react-redux";
import * as itemAction from "../store/item-action";
import Colors from "../constants/Colors";
import ImageSelector from "../components/ImageSelector";

const AddItemScreen = props => {
    const [name, setName] = useState('');
    const [gpsCode, setGpsCode] = useState('');
    const [selectedImage, setSelectedImage] = useState();
    const [radius, setRadius] = useState('');
    const [serialNumber, setSerialNumber] = useState('');

    const dispatch = useDispatch();

    const nameChangeHandler = (text) => {
        setName(text);
    };

    const gpsCodeHandler = (text) => {
        setGpsCode(text);
    };

    const radiusChangeHandler = (text) => {
        setRadius(text);
    };

    const serialNumberChangeHandler = (text) => {
        setSerialNumber(text);
    };

    const imageTakenHandler = (imagePath) => {
        setSelectedImage(imagePath);
    };

    const savePlaceHandler = () => {
        const enteredSerialNumber = parseInt(serialNumber);
        const enteredRadius = parseInt(radius);

        if (name == null || isNaN(enteredSerialNumber) || isNaN(enteredRadius) || selectedImage == null || gpsCode == null) {
            Alert.alert(
                'Invalid Syntax',
                'Please enter valid syntax for the input forms. All fields must be filled and you must take a picture of your item.',
                [{ text: 'Okay' }]
            );
            return false;
        } else {
            let lat = (Math.random() * (40.7600 - 40.7699) + 40.7699).toFixed(4);
            let long = (Math.random() * (-111.8400 + 111.8499) -111.8400).toFixed(4);
            dispatch(itemAction.addItem(name, gpsCode, serialNumber, radius, selectedImage, lat, long));
            props.navigation.navigate('ItemList');
            setSelectedImage(undefined);
            setName('');
            setRadius('');
            setSerialNumber('');
            setGpsCode('');
        }
    };

    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.label}>Item Name</Text>
                <TextInput style={styles.textInput} blurOnSubmit autoCapitalize='none' autoCorrect={false}
                           maxLength={50} value={name} onChangeText={nameChangeHandler}/>
                <Text style={styles.label}>Item Serial Number</Text>
                <TextInput style={styles.textInput} blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType="number-pad"
                           maxLength={50} value={serialNumber} onChangeText={serialNumberChangeHandler}/>
                <Text style={styles.label}>Notification Radius in ft.</Text>
                <TextInput style={styles.textInput} blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType="number-pad"
                           maxLength={2} value={radius} onChangeText={radiusChangeHandler}/>
                <Text style={styles.label}>GPS Code</Text>
                <TextInput style={styles.textInput} blurOnSubmit autoCapitalize='none' autoCorrect={false}
                           maxLength={50} value={gpsCode} onChangeText={gpsCodeHandler}/>
                <ImageSelector onImageTaken={imageTakenHandler} />
                <Button title="Save Item" color={Colors.primary} onPress={savePlaceHandler}/>
            </View>
        </ScrollView>
    );
};

AddItemScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Add a New Item',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}><Item title="Menu" iconName='ios-menu'
                                                                                    onPress={() => {
                                                                                        navData.navigation.toggleDrawer();
                                                                                    }}/></HeaderButtons>
    }
};

const styles = StyleSheet.create({
    form: {
        margin: 30
    },
    label: {
        fontSize: 18,
        marginBottom: 15
    },
    textInput: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 4,
        paddingHorizontal: 2
    }
});

export default AddItemScreen;