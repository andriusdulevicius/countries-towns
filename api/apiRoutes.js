const express = require('express');
const router = express.Router();
const Place = require('../models/Place');

router.post('/addNewPlace', async (req, res) => {
  console.log(req.body);

  const dummyPlace = {
    title: 'LosAndzeles',
    mainLand: 'North America',
    population: 32000000,
    countryOrCity: 'city',
  };

  const newPlace = new Place(dummyPlace);

  try {
    const result = await newPlace.save();
    res.json(result);
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
