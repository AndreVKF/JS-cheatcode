const escola = [
  {
    nome: "Turma 1",
    alunos: [
      {
        nome: "Lupet",
        nota: 8.1,
      },
      {
        nome: "Ludovico",
        nota: 7.5,
      },
    ],
  },
  {
    nome: "Turma 2",
    alunos: [
      {
        nome: "Bolota",
        nota: 8.5,
      },
      {
        nome: "Lupercio",
        nota: 5.9,
      },
    ],
  },
]

const getNotaDoAluno = (aluno) => aluno.nota
const getNotasDaTurma = (turma) => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

Array.prototype.flatMap = function (callback) {
  return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)
