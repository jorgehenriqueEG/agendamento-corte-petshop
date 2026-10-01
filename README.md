# agendamento-corte-petshop

## Descrição do Problema
O petshop precisa organizar a agenda diária de cortes de pelagem. O sistema recebe uma lista de pets e deve identificar quais estão elegíveis para o atendimento conforme a frequência mínima entre banhos.

## Requisitos
- Receber uma lista de pets com nome, espécie e dias desde o último corte.
- Aplicar a regra de negócio: cães exigem 10 dias mínimos entre cortes e gatos exigem 20 dias.
- Retornar apenas os nomes dos pets que podem ser atendidos hoje.

## Exemplo de Uso
const pets = [
  { nome: "Rex", especie: "cao", dias: 12 },
  { nome: "Mimi", especie: "gato", dias: 18 },
  { nome: "Bela", especie: "gato", dias: 21 }
];

ExibePetsAgendados(pets);

Saída:
Rex
Bela