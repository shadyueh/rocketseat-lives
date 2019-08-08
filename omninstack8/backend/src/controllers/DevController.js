const axios = require("axios");

module.exports = {
  async store(req, res) {
    const { username } = req.body;
    let response = [];

    try {
      response = await axios.get(
        `http://localhost:1111/users?login=${username}`,
        {
          proxy: false
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    return res.json(response.data);
  }
};
