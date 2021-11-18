const popularData = [
    {
        id: '1',
        category: 'fincsiMeal',
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
                name: 'egg',
                image: require('../images/eggIngredient.png')
            },
            {
                id: '4',
                name: 'flour',
                image: require('../images/flourIngredient.png')
            },

        ],
    },
    {
        id: '2',
        category: 'fincsiMeal',
        image: require("../images/pizza2.png"),
        title: 'Nagymami Pizzája',
        weight: '12 szelet',
        rating: '4.3.14',
        price: '15000',
        sizeNumber: 36,
        sizeName: 'Nagy',
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
                image: require('../images/ham.png')
            },
        ],
    },
    {
        id: '3',
        category: 'fincsiMeal',
        image: require("../images/pizza3.png"),
        title: 'Hugi Pizzája',
        weight: '8 szelet',
        rating: '4.20',
        price: '2000',
        sizeName: 'Közepes',
        sizeNumber: 32,
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
        id: '4',
        category: 'fincsiCake',
        image: require("../images/picake.png"),
        title: 'Fincsi Torta',
        weight: '3.14 szelet',
        rating: '4.20',
        price: '5000',
        sizeName: 'Kicsi',
        sizeNumber: 16,
        deliveryTime: 30,
        ingredients: [
            {
                id: '1',
                name: 'flour',
                image: require('../images/flourIngredient.png')
            },
            {
                id: '2',
                name: 'egg',
                image: require('../images/eggIngredient.png')
            },
            {
                id: '3',
                name: 'sugar',
                image: require('../images/sugarIngredient.png')
            },

        ],
    },
    {
        id: '5',
        category: 'fincsiCake',
        image: require("../images/mathcake.png"),
        title: 'Fincsibb Torta',
        weight: '12 szelet',
        rating: '4.3.14',
        price: '15000',
        sizeNumber: 36,
        sizeName: 'Közepes',
        deliveryTime: 30,
        ingredients: [
            {
                id: '1',
                name: 'sugar',
                image: require('../images/sugarIngredient.png')
            },
            {
                id: '2',
                name: 'egg',
                image: require('../images/eggIngredient.png')
            },
            {
                id: '3',
                name: 'flour',
                image: require('../images/flourIngredient.png')
            },
        ],
    },
    {
        id: '6',
        category: 'fincsiCake',
        image: require("../images/iluvmath.png"),
        title: 'Legfincsibb Torta',
        weight: '18 szelet',
        rating: '4.69',
        price: '20000',
        sizeName: 'Nagy',
        sizeNumber: 32,
        deliveryTime: 30,
        ingredients: [
            {
                id: '1',
                name: 'egg',
                image: require('../images/eggIngredient.png')
            },
            {
                id: '2',
                name: 'sugar',
                image: require('../images/sugarIngredient.png')
            },
            {
                id: '3',
                name: 'flour',
                image: require('../images/flourIngredient.png')
            },
        ],
    },
];

export default popularData;