import {ADD_ITEM} from "./item-action";
import Item from "../models/item";

const initialState = {
    items: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            const newItem = new Item(action.itemData.name, action.itemData.gpsCode, action.itemData.serialNumber, action.itemData.radius, action.itemData.image, action.itemData.lat, action.itemData.long);
            return {
                items: state.items.concat(newItem)
            };
        default:
            return state;
    }
}