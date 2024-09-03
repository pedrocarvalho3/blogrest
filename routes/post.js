var express = require("express");
var router = express.Router();

const { sequelize } = require("../model/bd");
const AutorService = require("../model/Autor");
const PostService = require("../model/Post");

//listar os posts
router.get("/", async (req, res) => {
  res.json({ lista: await PostService.lista() });
});

//Listagem por autor
router.get("/autor/:autor", async (req, res) => {
  res.json({ lista: await PostService.listaPorAutor(req.params.autor) });
});

//Visualizar um post
router.get("/view/:id", async (req, res) => {
  res.json({ post: await PostService.contaAcesso(req.params.id) });
});

//Inserir um novo post
router.post("/", async (req, res) => {
  //TODO validar propriedades
  try {
    let post = await PostService.novo(req.body);
    res.json({ post: post });
  } catch (e) {
    res.status(400).json({ mensagem: "Falha ao salar o post" });
  }
});

//Alterar um post
router.put("/:id", async (req, res) => {
  //TODO validar propriedades
  try {
    let post = await PostService.altera(req.body, req.params.id);
    res.json({ post: post });
  } catch (e) {
    res.status(400).json({ mensagem: "Falha ao salvar o post" });
  }
});

/* GET home page. */
router.get("/install", async function (req, res, next) {
  await sequelize.sync({ force: true });

  let autor = await AutorService.novo("Adriano R.");
  autor = await AutorService.buscaPorId(autor.id);

  let autor2 = await AutorService.novo("Ariano R.");
  /*
  let post = await PostService.novo({
    titulo: "Meu primeiro post",
    texto: "Ola Mundo este eh o primeiro post do blog",
    AutorId: autor.id
  })
  await PostService.altera({
    titulo: "Novo titulo",
    texto: "Novo texto"
  }, post.id)
  await PostService.contaAcesso(post.id)
  post = await PostService.buscaPorId(post.id)

  post1 = await PostService.listaPorAutor(autor.id)
  */

  res.json({ msg: "Instalado com sucesso!" });
});

module.exports = router;
