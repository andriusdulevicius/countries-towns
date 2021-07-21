const express = require('express');
const router = express.Router();
const Place = require('../models/Place');

router.post('/addNewPlace', async (req, res) => {
  const newPlace = new Place(req.body);
  try {
    const result = await newPlace.save();
    res.json(result);
  } catch (err) {
    res.json(err);
  }
});

router.get('/allPlaces', async (req, res) => {
  try {
    const places = await Place.find();
    res.json(places);
  } catch (err) {
    res.status(500).json('internal error');
  }
});

router.delete('/delete/:id', async (req, res) => {
  await Place.findOneAndDelete({ _id: req.params.id });
  res.send({ success: true, msg: `Place has been deleted.` });
});

router.put('/edit/:id', async (req, res) => {
  const { title, mainLand, population, countryOrCity } = req.body;
  await Place.findOneAndUpdate(
    { _id: req.params.id },
    {
      title,
      mainLand,
      population,
      countryOrCity,
    }
  );
  res.send({ success: true, msg: `Place ${title} has been updated.` });
});

module.exports = router;
