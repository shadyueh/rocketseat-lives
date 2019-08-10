const axios = require("axios");
const Dev = require("../models/Dev");

module.exports = {
  async index(req, res) {
    const { user } = req.headers;
    const loggedDev = await Dev.findById(user);
    const users = await Dev.find({
      $and: [
        { _id: { $ne: user } },
        { _id: { $nin: loggedDev.likes } },
        { _id: { $nin: loggedDev.dislikes } }
      ]
    });
    return res.json(users);
  },
  async store(req, res) {
    // captura parametro username do corpo da requisição
    const { username } = req.body;

    const userExists = await Dev.findOne({ user: username });

    if (userExists) {
      return res.json(userExists);
    }

    // acessa a api do github para pesquisar os dados do usuário informado
    const response = await axios.get(
      `https://api.github.com/users/${username}`,
      //`http://localhost:1111/users?login=${username}`,
      {
        proxy: false
      }
    );

    // deconstrução para pegar apenas os dados desejados da resposta
    // const { name, bio, avatar_url: avatar } = response.data[0];
    const { name, bio, avatar_url: avatar } = response.data;

    //cria o dev no banco de dados
    const dev = await Dev.create({
      name,
      user: username,
      bio,
      avatar
    });

    return res.json(dev);
  }
};
