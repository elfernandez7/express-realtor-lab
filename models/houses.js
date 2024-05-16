const houses = [
    {   id: 1,
        sqft : 1193,
        price: 285000,
        beds: 2,
        baths: 2,
        address: '2161 Peachtree Rd NE',
        petsAllowed: {dogs: 'yes', cats: 'yes'},
        laundry: 'facilities on site',
    },
    {   id: 2,
        sqft : 4155,
        price: 612000,
        beds: 3,
        baths: 2.5,
        address: '352 7th St NE',
        petsAllowed: {dogs: 'yes', cats: 'yes'},
        laundry: 'in-unit',
    },
    {   id: 3,
        sqft : 1038,
        price: 345000,
        beds: 2,
        baths: 1,
        address: '18 Collier Rd',
        petsAllowed: {dogs: 'no', cats: 'no'},
        laundry: 'no',
    },
    {   id: 4,
        sqft :1200,
        price: 331000,
        beds: 1,
        baths: 1,
        address: '123 Main St',
        petsAllowed: {dogs: 'yes', cats: 'yes'},
        laundry: 'in-unit',
    },
]



module.exports = {
    getAll,
    getOne,
};

function getAll() {
    return houses;
};

function getOne(id) {
    return houses.find((house) => house.id === parseInt(id));
};