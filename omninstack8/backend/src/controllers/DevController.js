const axios = require("axios");
const Dev = require("../models/Dev");

module.exports = {
  async store(req, res) {
    // captura parametro username do corpo da requisição
    const { username } = req.body;

    const userExists = await Dev.findOne({ user: username });

    if (userExists) {
      return res.json(userExists);
    }

    // acessa a api do github para pesquisar os dados do usuário informado
    const response = await axios.get(
      `http://localhost:1111/users?login=${username}`,
      {
        proxy: false
      }
    );

    // deconstrução para pegar apenas os dados desejados da resposta
    const { name, bio, avatar_url: avatar } = response.data[0];

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
