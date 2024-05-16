const apartments = [
    {   id: 1,
        sqft : 650,
        price: 1100,
        beds: 1,
        baths: 1,
        address: '123 Main St',
        petsAllowed: {dogs: 'yes', cats: 'yes'},
        laundry: 'in-unit',
    },
    {   id: 2,
        sqft : 700,
        price: 1125,
        beds: 1,
        baths: 2,
        address: '144 N Circle St',
        petsAllowed: {dogs: 'no', cats: 'yes'},
        laundry: 'in-unit',
    },
    {   id: 3,
        sqft : 650,
        price: 1100,
        beds: 1,
        baths: 1,
        address: '123 Main St',
        petsAllowed: {dogs: 'no', cats: 'no'},
        laundry: 'in-unit',
    },
    {   id: 4,
        sqft : 650,
        price: 1100,
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
    return apartments;
};

function getOne(id) {
    return apartments.find((apartment) => apartment.id === parseInt(id));
};