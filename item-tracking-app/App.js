import React from 'react';
import {StyleSheet} from 'react-native';
import ItemTrackingNavigator from "./navigation/ItemTrackingNavigation";
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import itemsReducer from './store/item-reducer';

const rootReducer = combineReducers({
    items: itemsReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
    return (
        <Provider store={store}>
            <ItemTrackingNavigator/>
        </Provider>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
