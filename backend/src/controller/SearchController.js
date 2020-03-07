const Dev = require('../models/Developer');
const parseStringAsArray = require('../utils/parseStringAsArray');

// OBS: pq outro controller sendo que ainda são devs?
// Pq as boas praticas dizem que so deve haver uma função por controller

module.exports = {
  async index(req, res) {
    try {
      // OBS: Usar query params em verbos GET são uma boa prática de busca
      const { latitude, longitude, techs } = req.query;

      const techsArray = parseStringAsArray(techs);

      const devs = await Dev.find({
        techs: {
          // Operador lógico do mongoDB
          $in: techsArray,
        },
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [longitude, latitude],
            },
            $maxDistance: 10000,
          },
        },
      });

      return res.send(devs);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};
