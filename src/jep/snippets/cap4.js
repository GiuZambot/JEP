const cap = [{
    snippet: `
// Cap.4 Strings e Arrays
const frase = "Eu sou uma frase com algumas palavras";
let r;
r = frase.includes("sou"); // existe 'sou' na string frase? 
console.log(r);
`,
    exercicio: 'variables_string',
    mdn: ''
}
];

cap.push({
    snippet: `
// Cap.4 Strings e Arrays
const frase = "Eu sou uma frase com algumas palavras";
let r;
r = frase.indexOf("sou"); //qual o índice da primeira ocorrencia de "sou"
console.log(r);
`,
    exercicio: 'variables_string',
    mdn: ''
});

cap.push({
    snippet: `
// Cap.4 Strings e Arrays
const frase = "Eu sou uma frase com algumas palavras";
let r;
r = frase.indexOf("sou", 15); //primeira ocorrencia a partir do indice 15
console.log(r);
`,
    exercicio: 'variables_string',
    mdn: ''
});

cap.push({
    snippet: `
// Cap.4 Strings e Arrays
const frase = "Eu sou uma frase com algumas palavras";
let r;
r = frase.lastIndexOf("m"); // qual o indice da ultima ocorrencia de "m"
console.log(r);`,
    exercicio: 'variables_string',
    mdn: ''
});

cap.push({
    snippet: `
// Cap.4 Strings e Arrays
const frase = "Eu sou uma frase com algumas palavras";
let r;
r = frase.lastIndexOf("m", 8); // ultima ocorrencia a partir do indice 8
console.log(r);`,
    exercicio: 'variables_string',
    mdn: ''
});

cap.push({
    snippet: `
// Cap.4 Strings e Arrays
const frase = "Eu sou uma frase com algumas palavras";
let r;

//recortar do índice 3 ao 6 (6 não incluso)
r = frase.slice(3, 6); // sou
console.log(r);`,
    exercicio: 'variables_string',
    mdn: ''
});

cap.push({
    snippet: `
// Cap.4 Strings e Arrays
const frase = "Eu sou uma frase com algumas palavras";
let r;

//recortar as ultimas 8
r = frase.slice(-8); // palavras
console.log(r);`,
    exercicio: 'variables_string',
    mdn: ''
});

cap.push({
    snippet: `
// Cap.4 Strings e Arrays
const frase = "Eu sou uma frase com algumas palavras";
let r;

//recorta 3 itens a partir do indice 3
r = frase.substr(3, 3); // sou
console.log(r);`,
    exercicio: 'variables_string',
    mdn: ''
});

cap.push({
    snippet: `
// Cap.4 Strings e Arrays
const frase = "Eu sou uma frase com algumas palavras";
let r;

//recordar 4 itens a partir do oitavo de trás para frente.
r = frase.substr(-8, 4); // pala
console.log(r);`,
    exercicio: 'variables_string',
    mdn: ''
});

cap.push({
    snippet: `
// Cap.4 Strings e Arrays
const frase = "Eu sou uma frase com algumas palavras";
let r;

// Substitui "uma frase" por um texto"; Substitui apenas a primeira ocorrencia
r = frase.replace("uma frase", "um texto");
console.log(r);`,
    exercicio: 'variables_string',
    mdn: ''
});

cap.push({
    snippet: `
// Cap.4 Strings e Arrays
const frase = "Eu sou uma frase com algumas palavras";
let r;

// replace com regEx, subistitu as letras "a" por "-"
r = frase.replace(/a/gi, "-");
console.log(r);`,
    exercicio: 'variables_string',
    mdn: ''
});

cap.push({
    snippet: `
// Cap.4 Strings e Arrays
const frase = "Eu sou uma frase com algumas palavras";
let r;

// É possível encadear métodos
r = frase.replace(" ", ",").replace(" ", ",");
console.log(r);`,
    exercicio: 'variables_string',
    mdn: ''
});

cap.push({
    snippet: `
// Cap.4 Strings e Arrays
const frase = "    Eu sou Uma frase com Algumas palavras";
let r;

r = frase.trim(); // remove espaços no inicio e fim da string
console.log(r);

r = r.toUpperCase(); // tudo para maiuscula
console.log(r);

r = r.toLowerCase(); // tudo para minuscula 
console.log(r);`,
    exercicio: 'variables_string',
    mdn: ''
});

cap.push({
    snippet: `
// Cap.4 Strings e Arrays
let r = 155;
r = '' + r; // padStart e padEnd precisam de uma string            
r = r.padStart(10, "*"); // insere * no incio até completar tamanho = 10
console.log(r);

r = r.padEnd(17, "*"); // insere * no incio até completar tamanho = 17
console.log(r);
`,
    exercicio: 'variables_string',
    mdn: ''
});

cap.push({
    snippet: `
// Cap.4 Strings e Arrays
const frase = "Eu sou uma frase com algumas palavras";
let r;

r = frase.split(" "); // transforma numa array, separando por espaço
console.log(r);`,
    exercicio: 'variables_string',
    mdn: ''
});

cap.push({
    snippet: `
// Cap.4 Strings e Arrays
const frase = "Eu sou uma frase com algumas palavras";
let r, arr;

arr = frase.split(" ");
r = arr.indexOf("sou"); //agora dá 1, pois não é mais uma string
console.log(r);
`,
    exercicio: 'variables_string',
    mdn: ''
});

cap.push({
    snippet: `
// Cap.4 Strings e Arrays
const frase = "Eu sou uma frase com algumas palavras";
let arr;
arr = frase.split(" ");
arr.reverse();
console.log("Reverse: " + arr);
`,
    exercicio: 'variables_string',
    mdn: ''
});


cap.push({
    snippet: `
// Cap.4 Strings e Arrays
const frase = "Eu sou uma frase com algumas palavras";
let r, arr;
arr = frase.split(" ");
r = arr.join("-"); // ao contrário de split, junta numa string separando por "-"
console.log("Join: " + r);
`,
    exercicio: 'variables_string',
    mdn: ''
});

cap.push({
    snippet: `
// Cap.4 Strings e Arrays
const a = [0, 1, 2, 3];
const b = [4, 5, 6, 7, 8, 9, 10];

let arr = a.concat(b); // junta duas arrays
console.log("Concat: " + arr);
`,
    exercicio: 'variables_string',
    mdn: ''
});

cap.push({
    snippet: `
// Cap.4 Strings e Arrays
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr = arr.slice(1, 9); //retorna uma array do indice 1 até 8 (9 não incluso)
console.log("Slice: " + arr);
`,
    exercicio: 'variables_string',
    mdn: ''
});

cap.push({
    snippet: `
// Cap.4 Strings e Arrays
const a = [0, 1, 2, 3];
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// apartir de qual indice, quantos deletar, n itens para adicionar
arr.splice(3, 8, ...a); // três pontos significa propagação, paara não ter que inserir os números de a um a um.
console.log("Splice: " + arr);
`,
    exercicio: 'variables_string',
    mdn: ''
});

cap.push({
    snippet: `
// Cap.4 Strings e Arrays map
const numeros = [0, 1, 2, 3, 4];
const numerosDobrados = numeros.map(item => item * 2)

console.log(numerosDobrados)
`,
    exercicio: 'variables_string',
    mdn: ''
});

cap.push({
    snippet: `
// Cap.4 Strings e Arrays map
const numeros = [0, 1, 2, 3, 4];
const numerosSomados = numeros.reduce(
    (acumulador, itemAtual) => acumulador + itemAtual
);

console.log(numerosSomados)
`,
    exercicio: 'variables_string',
    mdn: ''
});

module.exports = { cap };