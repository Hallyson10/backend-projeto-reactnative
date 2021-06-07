const Endereco = require("../Models/endereco");

module.exports = {
    async getEnderecos(req, res){
        try {
            const enderecos = await Endereco.find();
            return res.status(200).send({ enderecos });
        } catch (error) {
            return res.status(400).send({ message : error });
        }
    },
    async createEndereco(req, res){
        try {
            const { rua, bairro  } = req.body;
            const endereco = await Endereco.create({ rua, bairro, user : req.userId });
            return res.status(200).send({ endereco });
        } catch (error) {
            return res.status(400).send({ message : error });
        }
    },
}