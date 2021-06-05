const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

module.exports = (req,res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).send({ error : "Token não informado!"});
    }
    const split = authHeader.split(" ");

    if(!split.length === 2){
        return res.status(401).send({ error : "token incorreto!"})
    }
    const [scheme, token] = split;

    if(!/^Bearer$/i.test(scheme)){
        return res.status(401).send({ error : "token mal formatado!"})
    }

    jwt.verify(token,authConfig.secret,(error, decoded)=>{
        if(error) return res.status(401).send({ error : "token inválido!"});

        req.userId = decoded.id;
        return next();
    })
}
