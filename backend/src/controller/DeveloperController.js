const axios = require('axios');
const parseStringAsArray = require('../utils/parseStringAsArray');

const Dev = require('../models/Developer');

// index, show, store, update, destroy = Funções Controller

module.exports = {
  async index(req, res) {
    try {
      const devs = await Dev.find();

      return res.send(devs);
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  async store(req, res) {
    try {
      const {
        github_username, techs, latitude, longitude,
      } = req.body;

      let dev = await Dev.findOne({ github_username });

      if (!dev) {
        const response = await axios.get(`https://api.github.com/users/${github_username}`);

        const { name, avatar_url, bio } = response.data;

        const techsArray = parseStringAsArray(techs);

        const location = {
          type: 'Point',
          coordinates: [longitude, latitude],
        };

        dev = await Dev.create({
          github_username,
          name,
          avatar_url,
          bio,
          location,
          techs: techsArray,
        });
      }

      return res.send(dev);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};
