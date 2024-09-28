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
        }, 50);
    });
};



export const fetchName = (searchTerm) => {
    return new Promise((resolve, reject) => {
        const returnedNames = feature
            .filter(item => 
                item.name.toLowerCase().trim().includes(searchTerm.trim().toLowerCase()) || item.category.toLowerCase().trim().includes(searchTerm.trim().toLowerCase())
            )
            .map(item => ({
                id: item.id,               
                name: item.name,
                price: item.price,
                description: item.description,
                image: item.img          
            }));

        if (returnedNames.length > 0) {
            resolve(returnedNames);  // Send an array of card details
        } else {
            reject('Product not found');
        }
    });
};
