const popularData = [
    {
        id: '1',
        image: require("../images/pizza1.png"),
        title: 'Fincsi Bundáskenyér',
        weight: '500 gramm',
        rating: '4.69',
        price: '600',
        sizeName: 'Közepes',
        sizeNumber: 16,
        deliveryTime: 30,
        ingredients: [
            {
                id: '1',
                name: 'ham',
                image: require('../images/ham.png')
            },
            {
                id: '2',
                name: 'cheese',
                image: require('../images/cheese.png')
            },
            {
                id: '3',
                name: 'tomato',
                image: require('../images/tomato.png')
            },
            {
                id: '4',
                name: 'garlic',
                image: require('../images/garlic.png')
            },

        ],
    },
    {
        id: '2',
        image: require("../images/pizza2.png"),
        title: 'Nagymami Tortája',
        weight: '1200 gramm',
        rating: '4.0',
        price: '15000',
        sizeNumber: 36,
        sizeName: 'Nagy',
        deliveryTime: 120,
        ingredients: [
            {
                id: '1',
                name: 'tomato',
                image: require('../images/tomato.png')
            },
            {
                id: '2',
                name: 'garlic',
                image: require('../images/garlic.png')
            },
        ],
    },
    {
        id: '3',
        image: require("../images/pizza3.png"),
        title: 'Hugi Pizzája',
        weight: '1000 gramm',
        rating: '4.20',
        price: '2000',
        sizeName: 'Közepes',
        sizeNumber: 32,
        deliveryTime: 45,
        ingredients: [
            {
                id: '1',
                name: 'tomato',
                image: require('../images/tomato.png')
            },
            {
                id: '2',
                name: 'garlic',
                image: require('../images/garlic.png')
            },
        ],
    },
];

export default popularData;