"use strict";

let a=[1,4,9,16];
console.log(a);

let a_string=a.join('');

console.log(a_string);

let b=['ciao','miao','pino'];
let c=a.concat(b); //unisce due array e lo restituisce, unisco a e b, il tutto lo metto in c
console.log(c);

let d=['*',...b,'*']; //non mi stampa un array dentro un array, ma mi copia il valore di b dentro d
let d_v2=['*',b,'*']; //qui invece non mi copia b dentro b ma mi mette il riferimento a b
console.log(d);
console.log(d_v2);
d.push('+');         //mi aggiunge il valore all'array
console.log(d);

const e= [...d];    //modo piu facile per copaire il contenuto di un array in un altro array
console.log(e);  
e[0]=2;             //posso modificare i valori dentro l'array ma non posso aggiungere elementi in piu o toglierne
console.log(e);

for(let val of e){ //itero negli elementi dell'array
    console.log(val);
}

for(let i=0;i<e.length;i++){ //itero sugli elementi dell'array in stile C
    console.log(e[i]);
}

for(let val in e){ //itero sulle proprieta degli elementi dell'array
    console.log(val);
}
