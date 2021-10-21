const popularData = [
    {
        id: '1',
        image: require("../images/frenchtoast.png"),
        title: 'Fincsi Bundáskenyér',
        weight: '3 szelet',
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
                name: 'garlic',
                image: require('../images/garlic.png')
            },

        ],
    },
    {
        id: '2',
        image: require("../images/picake.png"),
        title: 'Nagymami Tortája',
        weight: '12 szelet',
        rating: '4.3.14',
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
        weight: '8 szelet',
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