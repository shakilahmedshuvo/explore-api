const user = { id: 1, name: 'Gorib Amir', job: 'actor' };
// javaScript Object Notation----->(JSON)
const stringified = JSON.stringify(user)
// console.log(user);
// console.log(stringified);

const shop = {
    owner: 'Alia',
    adders: {
        street: 'kocukhet voot er goli',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keybord'],
    revenue: 45000,
    isOpen: true,
    isNew: false,

};
console.log(shop);

// 
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

// 
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);