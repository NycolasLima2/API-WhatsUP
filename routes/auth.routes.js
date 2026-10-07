const { Router } = require("express");
const conn = require("../DB/Connection");

const router = Router();


router.post("/auth", (req, res) =>{
        
    const {Telefone, Senha } = req.query
    res.json({
            mensagem:"autenticado"
        })

});


//exportamos ada rotas defenidas no arquivo.
module.exports = router;