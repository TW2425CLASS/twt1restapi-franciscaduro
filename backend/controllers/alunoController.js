const Aluno = require('../models/aluno');

exports.getAll = async (req, res) => {
  const alunos = await Aluno.find();
  res.json(alunos);
};

exports.create = async (req, res) => {
  const aluno = new Aluno(req.body);
  await aluno.save();
  res.json(aluno);
};

exports.update = async (req, res) => {
  const aluno = await Aluno.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(aluno);
};

exports.delete = async (req, res) => {
  await Aluno.findByIdAndDelete(req.params.id);
  res.json({ message: 'Aluno apagado' });
};

exports.getOne = async (req, res) => {
  const aluno = await Aluno.findById(req.params.id);
  res.json(aluno);
};
