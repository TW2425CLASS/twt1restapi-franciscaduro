const Curso = require('../models/curso');

exports.getAll = async (req, res) => {
  const cursos = await Curso.find();
  res.json(cursos);
};
