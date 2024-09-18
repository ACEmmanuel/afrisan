// api.js
import { feature } from "../data";


export const fetchItemFromData = (itemId) => {
    return new Promise((resolve, reject) => {
        const item = feature.find((item) => item.id === itemId);
        
        if (item) {
            resolve(item);
        } else {
            reject('Item not found');
        }
    });
};

export const fetchAllData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (feature) {
                resolve(feature);
            } else {
                reject('Item not found');
            }
        }, 500);
    });
};
