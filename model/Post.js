const { PostModel } = require("./bd");

module.exports = {
  novo: async (post) => {
    return await PostModel.create(post);
  },

  altera: async (post, id) => {
    return await PostModel.update(post, { where: { id: id } });
  },

  lista: async () => {
    return await PostModel.findAll();
  },

  listaPorAutor: async (autor) => {
    return await PostModel.findAll({ where: { AutorId: autor } });
  },

  buscaPorId: async (id) => {
    return await PostModel.findByPk(id);
  },

  contaAcesso: async (id) => {
    let post = await PostModel.findByPk(id);
    if (post) {
      post.acesso += 1;
      post.save();
    }
    return post;
  },
};
