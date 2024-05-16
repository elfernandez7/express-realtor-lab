const Apartments = require('../models/apartments');

module.exports = {
    index,
    show,
};

function index(req,res) {
    const apartments = Apartments.getAll();
    res.json(apartments);
};

function show(req, res) {
    const apartment = Apartments.getOne(req.params.id);
    res.json(apartment);
}