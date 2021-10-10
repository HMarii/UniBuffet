const popularData = [
    {
        id: '1',
        image: require("../images/pizza1.png"),
        title: 'SonkaSajt',
        weight: '500 gramm',
        rating: '4.69',
        price: '600',
        sizeName: 'Közepes',
        crust: 'thin',
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

        ],
    },
    {
        id: '2',
        image: require("../images/pizza2.png"),
        title: 'Vegán',
        weight: '600 gramm',
        rating: '4.0',
        price: '800',
        sizeName: 'Közepes',
        crust: 'medium',
        deliveryTime: 30,
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
        title: 'Csipős Odabasz',
        weight: '750 gramm',
        rating: '4.20',
        price: '1000',
        sizeName: 'Közepes',
        crust: 'thick',
        deliveryTime: 30,
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