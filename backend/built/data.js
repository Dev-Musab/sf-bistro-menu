"use strict";
exports.__esModule = true;
exports.sample_users = exports.sample_tags = exports.sample_foods = void 0;
exports.sample_foods = [
    {
        id: '1',
        name: 'Spicy Egg Noodles',
        cookTime: '10-20',
        price: 35,
        favorite: false,
        origins: ['Westrn'],
        stars: 4.5,
        imageUrl: 'assets/food-1.jpg',
        tags: ['NOODLES']
    },
    {
        id: '2',
        name: 'Chicken Noodles',
        cookTime: '10-20',
        price: 35,
        favorite: true,
        origins: ['Westrn'],
        stars: 3.9,
        imageUrl: 'assets/food-2.jpg',
        tags: ['NOODLES']
    },
    {
        id: '3',
        name: 'Pork Noodles',
        cookTime: '15-25',
        price: 45,
        favorite: true,
        origins: ['Westrn'],
        stars: 3.1,
        imageUrl: 'assets/food-3.jpg',
        tags: ['NOODLES']
    },
    {
        id: '4',
        name: 'Mixed Seafood Noodles',
        cookTime: '15-20',
        price: 45,
        favorite: false,
        origins: ['Westrn'],
        stars: 3.9,
        imageUrl: 'assets/food-4.jpg',
        tags: ['NOODLES']
    },
    {
        id: '5',
        name: 'Jokbal Pork Shank',
        cookTime: '11-20',
        price: 130,
        favorite: true,
        origins: ['KOREAN'],
        stars: 4.9,
        imageUrl: 'assets/food-5.jpg',
        tags: ['KOREAN PORK']
    },
    {
        id: '6',
        name: 'Bossam Pork Belly',
        cookTime: '10-20',
        price: 120,
        favorite: false,
        origins: ['KOREAN'],
        stars: 4.2,
        imageUrl: 'assets/food-6.jpg',
        tags: ['KOREAN PORK']
    },
    {
        id: '7',
        name: 'Jokbal Bossam',
        cookTime: '15-25',
        price: 140,
        favorite: true,
        origins: ['KOREAN'],
        stars: 4.7,
        imageUrl: 'assets/food-7.jpg',
        tags: ['KOREAN PORK']
    },
    {
        id: '8',
        name: 'Samgyupsal',
        cookTime: '10-20',
        price: 75,
        favorite: false,
        origins: ['KOREAN'],
        stars: 3.9,
        imageUrl: 'assets/food-8.jpg',
        tags: ['KOREAN PORK']
    },
    {
        id: '9',
        name: 'Sweet & Sour',
        cookTime: '10-15',
        price: 59,
        favorite: true,
        origins: ['Fish/Shrimp', 'softdrinks'],
        stars: 4.1,
        imageUrl: 'assets/food-9.jpg',
        tags: ['CHINESE']
    },
    {
        id: '10',
        name: 'Roasted Duck with rice',
        cookTime: '15-20',
        price: 55,
        favorite: false,
        origins: ['softdrinks'],
        stars: 4.5,
        imageUrl: 'assets/food-10.jpg',
        tags: ['CHINESE']
    },
    {
        id: '11',
        name: 'Mixed Gyoza',
        cookTime: '10-20',
        price: 55,
        favorite: true,
        origins: ['Fish/Shrimp'],
        stars: 4.8,
        imageUrl: 'assets/food-11.jpg',
        tags: ['CHINESE']
    },
    {
        id: '12',
        name: 'Mixed Seafood Stir-fry',
        cookTime: '10-20',
        price: 55,
        favorite: false,
        origins: ['with rice', 'softdrinks'],
        stars: 4.2,
        imageUrl: 'assets/food-12.jpg',
        tags: ['MAIN COURSE']
    },
    {
        id: '13',
        name: 'Mixed Seafood Grill',
        cookTime: '15-25',
        price: 149,
        favorite: true,
        origins: ['Prawns', 'calamary', 'hammour', 'softdrinks'],
        stars: 4.8,
        imageUrl: 'assets/food-13.jpg',
        tags: ['MAIN COURSE']
    },
    {
        id: '14',
        name: 'Teriyaki Salmon Roast',
        cookTime: '15-25',
        price: 110,
        favorite: true,
        origins: ['Noodles', 'softdrinks'],
        stars: 4.5,
        imageUrl: 'assets/food-14.jpg',
        tags: ['MAIN COURSE']
    },
    {
        id: '15',
        name: 'Roasted Baby Chicken',
        cookTime: '10-15',
        price: 65,
        favorite: false,
        origins: ['rice', 'softdrinks'],
        stars: 3.9,
        imageUrl: 'assets/food-15.jpg',
        tags: ['MAIN COURSE']
    },
    {
        id: '16',
        name: 'BBQ Chicken Legs',
        cookTime: '15-25',
        price: 55,
        favorite: false,
        origins: ['rice', 'softdrinks'],
        stars: 3.9,
        imageUrl: 'assets/food-16.jpg',
        tags: ['MAIN COURSE']
    },
    {
        id: '17',
        name: 'Roasted Beef with Brown sauce',
        cookTime: '15-25',
        price: 130,
        favorite: true,
        origins: ['roasted potato', 'softdrinks'],
        stars: 4.7,
        imageUrl: 'assets/food-17.jpg',
        tags: ['MAIN COURSE']
    },
];
exports.sample_tags = [
    { name: 'All', count: 17 },
    { name: 'NOODLES', count: 4 },
    { name: 'KOREAN PORK', count: 4 },
    { name: 'CHINESE', count: 3 },
    { name: 'MAIN COURSE', count: 6 },
];
exports.sample_users = [
    {
        name: "John Doe",
        email: "john@gmail.com",
        password: "12345",
        address: "Toronto On",
        isAdmin: true
    },
    {
        name: "Jane Doe",
        email: "Jane@gmail.com",
        password: "12345",
        address: "Shanghai",
        isAdmin: false
    },
];
