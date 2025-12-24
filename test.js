const pessoas = [
    { nome: "Ana", idade: 17 },
    { nome: "João", idade: 22 },
    { nome: "Lucas", idade: 19 }
];

const nomesMaiores = pessoas
    .filter(p => p.idade >= 18)
    .map(p => p.nome);

console.log(nomesMaiores);