const Dev = require("../models/Dev");

module.exports = {
  async store(req, res) {
    const { user } = req.headers;
    const { devId } = req.params;

    const loggedDev = await Dev.findById(user);
    const targetDev = await Dev.findById(devId);

    //verifica se usuario existe
    if (!targetDev) {
      return res.status(400).json({ error: "Dev not exists" });
    }

    //atualiza registro
    loggedDev.dislikes.push(targetDev.id);
    //grava no banco
    await loggedDev.save();

    return res.json(loggedDev);
  }
};
