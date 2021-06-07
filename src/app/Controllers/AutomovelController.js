const Automovel = require("../Models/automovel");

module.exports = {
    async getAutomoveis(req, res){
        try {
            const automoveis = await Automovel.find();
            return res.status(200).send({ automoveis });
        } catch (error) {
            return res.status(400).send({ message : error });
        }
    },
    async createAutomovel(req, res){
        try {
            const { marca, modelo, ano , cor, cidade,placa } = req.body;
            const automovel = await Automovel.create({ cor, placa,cidade, marca, modelo, ano, user : req.userId });
            return res.status(200).send({ automovel });
        } catch (error) {
            return res.status(400).send({ message : error });
        }
    },
}