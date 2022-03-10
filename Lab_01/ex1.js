const dayjs = require('dayjs');
let date = dayjs();



function Film (id,title,favorites=false,date=undefined,rating=undefined){
    this.id=id;
    this.title=title;
    this.favorites=favorites;
    this.date=dayjs(date).format('DD/MMM/YYYY');
    this.rating=rating;
}

function FilmList (){
    this.list=[];

    this.addNewFilm = (f) => {
        this.list.push(f);
        console.log(f);
    }

    this.sortByDate = () => {
        this.list.sort( (a,b) => {
            const date1=dayjs(a.date);
            const date2=dayjs(b.date);
            return date1.diff(b.date);
        });

        console.log("-----------------------------");
        for (i of this.list){
            console.log(i.title + " " +i.date);
        }
        console.log("-----------------------------");
    }

}


const ListOfFilm = new FilmList();
console.log(ListOfFilm);
const f1 = new Film (1,"Avengers",true,"March 15, 2022",5);
ListOfFilm.addNewFilm(f1);
const f2 = new Film (1,"Pulp Fiction",true,"March 10, 2022",5);
ListOfFilm.addNewFilm(f2);
const f3 = new Film (1,"Titanic",true,"February 19, 2022",5);
ListOfFilm.addNewFilm(f3);

ListOfFilm.sortByDate();
