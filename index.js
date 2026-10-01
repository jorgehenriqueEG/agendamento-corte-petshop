function ExibePetsAgendados(lista) {
  const result = [];
  for (let pet of lista) {
    const limite = pet.especie === "cao" ? 10 : 20;
    if (pet.dias > limite) {
      result.push(pet.nome);
    }
  }
  result.forEach(nome => console.log(nome));
}

const pets = [
  { nome: "Rex", especie: "cao", dias: 12 },
  { nome: "Mimi", especie: "gato", dias: 18 },
  { nome: "Bela", especie: "gato", dias: 21 }
];

ExibePetsAgendados(pets);