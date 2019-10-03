const Spot = require('../models/Spot');

module.exports = {
    async store(req,res){
        const { company, techs, price } = req.body;
        const { filename } = req.file;
        const { user_id } = req.headers;

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price
        })
        return res.json(spot)
    }
}