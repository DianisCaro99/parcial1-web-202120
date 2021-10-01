const { response, request } = require('express');
const axios = require('axios');

const getPairsOfPlayers = async (req = request, resp = response, next) => {
  //Implementar logica aquí
  try {
    const {input} = req.query;
    const { data } = await axios('https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe/nba-players');
    const results = data.values.map((elm) => ({first_name: elm.first_name, last_name: elm.last_name, height: elm.h_in}));
    arrayPlayers = [];
    for (let index = 0; index < results.length; index++) {
      const element = results[index];
      for (let index2 = 0; index2 < results.length; index2++) {
        const element2 = results[2];
        if((parseInt(element.height) + parseInt(element2.height)) === input && arrayPlayers.length === 0)
        {
          console.log(true);
        }
      };
    };
    resp.json(arrayPlayers).send();
  } catch (error) {
    resp.status(500).json({ error });
  }
};

module.exports = { getPairsOfPlayers };
