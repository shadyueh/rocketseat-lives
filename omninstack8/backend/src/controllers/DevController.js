const axios = require("axios");

module.exports = {
  async store(req, res) {
    const { username } = req.body;

    const response = await axios
      .get(`https://api.github.com/users/${username}`)
      .then(response => {
        console.log(response.data); // ex.: { user: 'Your User'}
        console.log(response.status); // ex.: 200
      })
      .catch(err => console.log(err));

    return res.json(response.data);
  }
};
