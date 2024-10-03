import { Router } from "express";

const candidatosRoutes = Router();

let candidatos = [
   {
    id: Math.floor(Math.random() * 1000000),
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

candidatosRoutes.post("/", (req, res) => {
    const {
        nome,
        partido,
        idade,
        segundo,
        propostas,
    } = req.body;

    //Validação dos campos nome e partido
    if (!nome || !partido) {
        return res.status(400).send({
            message: "O nome ou o partido não foi preenchido, crianças aleatórias",
        });
    }

    if (idade < 18) {
        return res.status(400).send({
            message: "A idade não pode ser menor que 18 anos",
        });
    }

    const novoCandidato = {
        id: Math.floor(Math.random() * 1000000),
        nome,
        partido,
        idade,
        segundo,
        propostas,
    }
    candidatos.push(novoCandidato);

    return res.status(201).json({
        message: "Candidato cadastro com sucesso!",
        novoCandidato,
  });

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