const { AutorModel } = require("./bd");

module.exports = {
  novo: async (nome) => {
    return await AutorModel.create({ nome });
  },
  buscarPorId: async (id) => {
    return await AutorModel.findByPk(id);
  },
};
