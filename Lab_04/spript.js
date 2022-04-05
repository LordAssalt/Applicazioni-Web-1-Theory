const ListOfFilm = new FilmList();
let rows = document.querySelectorAll('table tr');

const f1 = new Film(1, "Avengers", true, "03 15 2022", 5);
ListOfFilm.addNewFilm(f1);
const f2 = new Film(2, "Pulp Fiction", false, "03 10 2022", 4);
ListOfFilm.addNewFilm(f2);
const f3 = new Film(3, "Titanic", true, "03 19 2022", 3);
ListOfFilm.addNewFilm(f3);
const f4 = new Film(4, "StarWars", false, "02 23 2022", 5);
ListOfFilm.addNewFilm(f4);
const f5 = new Film(5, "Uncharted", true, "02 19 2022", 4);
ListOfFilm.addNewFilm(f5);

function Film(id, title, favorites = false, date = undefined, rating = undefined) {
    this.id = id;
    this.title = title;
    this.favorites = favorites;
    this.date = dayjs(date);
    this.rating = rating;
}

function FilmList() {
    this.list = [];

    this.addNewFilm = (f) => {
        this.list.push(f);
    }

    this.sortByDate = () => {
        const new_array = [...this.list]
        new_array.sort((a, b) => {
            const date1 = dayjs(a.date);
            const date2 = dayjs(b.date);
            return date1.diff(date2);
        });
        return new_array;
    }

    this.favFilms = () => {
        let new_array = []
        for (film of this.list) {
            if (film.favorites == true) {
                new_array.push(film);
            }
        }
        return new_array;
    }

    this.bestFilms = () => {
        let new_array = []
        for (film of this.list) {
            if (film.rating == 5) {
                new_array.push(film);
            }
        }
        return new_array;
    }

    this.seenLastMonth = () => {

        let new_array = []
        const today = dayjs();

        for (film of this.list) {

            const date = dayjs(film.date);
            const time = today.diff(date, 'day');

            if (time < 30) {
                new_array.push(film);
            }

        }
        return new_array;
    }

}

function setAsActive(id){
    const mod = document.getElementById(id).classList.add('active');
}

function setAsNonActive(id){
    const mod = document.getElementById(id).classList.remove('active');
}

function deleteButtonsReload() {
    rows = document.querySelectorAll('table tr');
    for (let row of rows) {
        if (row.firstElementChild.tagName.toLowerCase() !== "th") {
            row.querySelector('.btn').addEventListener("click", event => {
                while (row.firstChild)
                    row.removeChild(row.firstChild);
                const parent = row.parentNode;
                parent.removeChild(row);
            })
        }
    }
}

function deleteAllRows() {
    //Serve per eliminare tutte le righe della tabella
    const tab = document.getElementById("scoretable");
    const numRows = tab.rows.length;
    for (let i = 1; i < numRows; i++) {
        if (tab.firstElementChild.tagName.toLowerCase() !== "th") {
            tab.deleteRow(1);
        }
    }
}

function createFilmElement(film) {
    let check = "";
    let stars = "";
    for (let i = 0; i < 5; i++) {
        if (i < film.rating) {
            stars = stars + ' <span class="fa fa-star checked"></span> '
        } else {
            stars = stars + ' <span class="fa fa-star unchecked"></span> '
        }
    }
    if (film.favorites == true) { check = "checked" }
    const newTr = document.createElement("tr");
    const tt = '<td>' + film.title + '</td>  <td><divclass="form-check"><input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" ' + check + ' ><label class="form-check-label" for="flexCheckChecked" >Favorite </label></div></td>  <td>' + film.date.format("DD-MM-YYYY") + '</td>  <td> ' + stars + '</td>  <td><button type="button" class="btn btn-danger">X</button></td>  ';
    newTr.innerHTML = tt;
    return newTr;
}

function loadAllFilms() {
    const tab = document.getElementById("scoretable");
    const tableBody = document.querySelector('tbody');

    for (f of ListOfFilm.list) {
        const newRow = createFilmElement(f);
        tableBody.appendChild(newRow);
    }
}

function loadFavFilms(){
    const tab = document.getElementById("scoretable");
    const tableBody = document.querySelector('tbody');

    for (f of ListOfFilm.favFilms()){
        const newRow = createFilmElement(f);
        tableBody.appendChild(newRow);
    }
}

function loadBestFilms(){
    const tab = document.getElementById("scoretable");
    const tableBody = document.querySelector('tbody');

    for (f of ListOfFilm.bestFilms()){
        const newRow = createFilmElement(f);
        tableBody.appendChild(newRow);
    }
}

function loadLastMonthFilms(){
    const tab = document.getElementById("scoretable");
    const tableBody = document.querySelector('tbody');

    for (f of ListOfFilm.seenLastMonth()){
        const newRow = createFilmElement(f);
        tableBody.appendChild(newRow);
    }
}





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


window.addEventListener("load", event => {
    //carico i film
    loadAllFilms();

    document.getElementById('all').addEventListener("click", event => {
        deleteAllRows();
        loadAllFilms();
        setAsActive("all");
        setAsNonActive("fav");
        setAsNonActive("best");
        setAsNonActive("lastmonth");
        setAsNonActive("unseen");
        deleteButtonsReload();
    })

    document.getElementById('fav').addEventListener("click", event => {
        deleteAllRows();
        loadFavFilms();
        setAsActive("fav");
        setAsNonActive("all");
        setAsNonActive("best");
        setAsNonActive("lastmonth");
        setAsNonActive("unseen");
        deleteButtonsReload();
    })

    document.getElementById('best').addEventListener("click", event => {
        deleteAllRows();
        loadBestFilms();
        setAsActive("best");
        setAsNonActive("fav");
        setAsNonActive("all");
        setAsNonActive("lastmonth");
        setAsNonActive("unseen");
        deleteButtonsReload();
    })

    document.getElementById('lastmonth').addEventListener("click", event => {
        deleteAllRows();
        loadLastMonthFilms();
        setAsActive("lastmonth");
        setAsNonActive("fav");
        setAsNonActive("best");
        setAsNonActive("all");
        setAsNonActive("unseen");
        deleteButtonsReload();
    })

    document.getElementById('unseen').addEventListener("click", event => {
        deleteAllRows();
        setAsActive("unseen");
        setAsNonActive("fav");
        setAsNonActive("best");
        setAsNonActive("lastmonth");
        setAsNonActive("all");
        deleteButtonsReload();
    })

    //aggiorno l'elenco dei titoli per permetterne l'eliminazione
    deleteButtonsReload();
});


