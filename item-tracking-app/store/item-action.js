export const ADD_ITEM = 'ADD_ITEM';

export const addItem = (name, gpsCode, serialNumber, radius, image, lat, long) => {
    return { type: ADD_ITEM, itemData: {name: name, gpsCode: gpsCode, serialNumber: serialNumber, radius: radius, image: image, lat: lat, long: long}}
};