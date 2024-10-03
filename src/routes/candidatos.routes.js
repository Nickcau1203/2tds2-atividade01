import { Router } from "express";

const candidatosRoutes = Router();

let candidatos = [
   {
    id: Math.random() * 1000000,
    name: "Alice",
    partido: "PSD",
    idade: 42,
    segundo: true, //Concorrentenao segundo mandato
    propostas: [
        "Aumento do salário mínimo",
        "Redução de impostos",
        "Mais investimentos em educação",
    ],
   },
];

candidatosRoutes.get("/", (req, res) => {
    return res.status(200).json(candidatos)
});








//Rota para criar uma nova emoção
candidatosRoutes.post("/", (req, res) => {
    const { nome, cor } = req.body
    const novaEmocao = {
        id: emocoes.length + 1,
        nome: nome,
        cor: cor
    }
    emocoes.push(novaEmocao)
    return res.status(201).send( emocoes )
});

//Rota para buscar uma emoção pelo id
candidatosRoutes.get("/:id", (req, res) => {
    const { id } = req.params;

    //console.log(id);
    const emocao = emocoes.find((emotion) => emotion.id == id ) 

    if (!emocao) {  
        return res.status(404).send({
            message: "Emoção não encontrada!",
        });
    }

return res.status(200).send({
   message: "Emoção encontrada",
   emocao,   
  });
});

candidatosRoutes.put("/:id", () => {
    const { id } = req.params;

    const emocoes = emocao.find((emotion) => emotion.id == id ) 

    if (!emocao) {  
        return res.status(404).send({
            message: "Emoção não encontrada!",
        });
    }

const { nome, cor } = req.body
emocao.nome = nome;
emocao.cor = cor;

return res.status(200).send({
    message: "Emoção atualizada!",
    emocao,
});
});

candidatosRoutes.delete("/:id", (req, res) => {
    const { id } = req.params;

    const emocao = emocoes.find((emotion) => emotion.id == id ) 

    if (!emocao) {  
        return res.status(404).send({
            message: "Emoção não encontrada!",
        });
    }

    emocoes = emocoes.filter((emotion) => emotion.id != id );


    return res.status(200).send({
        message: "Emoção deletada!",
        emocao,
    });
});

export default candidatosRoutes;