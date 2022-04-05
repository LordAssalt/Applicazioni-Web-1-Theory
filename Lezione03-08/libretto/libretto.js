"use strict";


/*
Goal: managing a simple data structure as an array of objects.
Using JavaScript objects manage a list of objects that include information about the exams.

Each exam will contain:
Course code
Course name
Credits
Score (number between 18 and 30, plus a Boolean for the honors)
Date

Define a constructor function Exam to create a new object.
Define a constructor function ExamList, with the following methods:
add(exam) // pass a fully-constructed Exam object
find(courseCode) // returns the matching Exam
afterDate(date) // returns an ExamList with the subset of Exams after the given date
listByDate() // returns an array of Exams, sorted by increasing date
listByScore() // idem, by decreasing score
average() // return the average value (weighted by credits)
*/

const dayjs = require('dayjs');

let now = dayjs();

//console.log(now.format());

let libretto = [];

let esame = {nome: "AW1", voto: 30, data: dayjs('2022-03-03')};

function Exam(code, nome, CFU, voto, lode, data) {
    this.nome = nome;
    this.voto = voto;
    this.code = code;
    this.CFU = CFU;
    this.data = data;
    this.lode = lode;
    this.str = function() { return `${this.nome} ${this.voto} ${this.data.format()}`}
}

function ExamList () {
    this.list = [];

    this.add =  (e) => {
        this.list.push(e);
    }

    this.average = () => {
        let avg = 0;
        for (const val of this.list)
            avg += val.voto;
        avg = avg / this.list.length;
        return avg;
    }

    this.find = (code) => {
        for (const e of this.list)
            if (e.code === code)
                return e;
        return undefined;
    }

    this.filter = (callback) => {
        for (const e of this.list)
            if (callback(e))
                return e;
        return undefined;        
    }

    this.filterFunctional = (callback) => this.list.filter(callback);

    this.increaseVote = () => {
        return this.list.map( 
            x => { 
                const new_x = Object.assign({}, x, {voto: x.voto+1})
                return new_x;
            } 
        );
    }
    
}

const wa1 = new Exam('01abc', 'WA1', 6, 30, true, dayjs('2022-03-04'));
const ps = new Exam('02bcd', 'PS', 6, 29, false, dayjs('2022-03-08'))
console.log(wa1.str());

const exams = new ExamList();
exams.add(wa1);
exams.add(ps);

console.log( exams.average() );

const e = exams.find("01abc");
console.log(e.str());

const e2 = exams.filterFunctional( e => (e.code == '01abc') );
console.log(e2[0].str());

const list2 = exams.increaseVote();
console.log(list2);