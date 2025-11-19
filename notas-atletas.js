// Por Definição, esses são os dados da Matriz de Objetos fornecido pelo Desafio
let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

// Percorrer a lista de atletas 
for (let i = 0; i < atletas.length; i++) {
  // Como i = 0, entao começara pelo indice 0 a´te p tamanho da matriz, no caso 4 ou seja 0,1,2,3
    let atleta = atletas[i]; // Cria um nova variavel com este incremento i++

    // Ordenar as notas (Crescente)
    let notasOrdenadas = atleta.notas.sort((a, b) => a - b); // variavel criada para ordenar do menor para o maior

    // Pegar as notas do meio (elimina a primeira e a última)
    // slice(1, 4) pega os índices 1, 2 e 3.
    let notasComputadas = notasOrdenadas.slice(1, 4);

    // Passo 4: Somar as notas computadas
    // Pode usar for, forEach ou reduce. Aqui usamos reduce.
    let soma = notasComputadas.reduce(function(total, nota) {
        return total + nota;
    }, 0); // 0 indica o somatorio

    // Calcular a média
    let media = soma / notasComputadas.length; // Media

    // Exibir os resultados
    console.log("Atleta: " + atleta.nome); 
    console.log("Notas Obtidas: " + notasOrdenadas);
    console.log("Média Válida: " + media);
    console.log(""); // Linha em branco para separar
}