"use strict";
const dayjs = require('dayjs'); //importo la libreria

let now = dayjs();
console.log(now.format());

let libretto = [];
let esame={
    nome: "AW1",
    voto: 30,
    data: dayjs('2022-03-03')
};

console.log(esame);


function Exam (nome, voto, data){
     this.nome=nome;
     this.voto=voto;
     this.data=data;
     this.str= function(){return `${this.nome} ${this.voto} ${this.data.format()} `};
}

const esame1 = new Exam ('WA1',31,dayjs('2022-03-03'));
console.log(esame1);