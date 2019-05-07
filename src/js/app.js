const input = [
  {
    id: 26,
    title: 'Побег из Шоушенка',
    imdb: 9.30,
    year: 1994,
  },
  {
    id: 25,
    title: 'Крёстный отец',
    imdb: 9.20,
    year: 1972,
  },
  {
    id: 27,
    title: 'Крёстный отец 2',
    imdb: 9.00,
    year: 1974,
  },
  {
    id: 1047,
    title: 'Тёмный рыцарь',
    imdb: 9.00,
    year: 2008,
  },
  {
    id: 223,
    title: 'Криминальное чтиво',
    imdb: 8.90,
    year: 1994,
  },
];

const tbody = document.getElementById('tbody');
if (!(tbody instanceof HTMLElement)) {
  throw new Error('container is not HTMLElement');
}

input.forEach((film) => {
  const element = document.createElement('tr');
  element.dataset.id = film.id;
  element.dataset.title = film.title;
  element.dataset.year = film.year;
  element.dataset.imdb = film.imdb;
  const id = document.createElement('td');
  id.textContent = film.id;
  const title = document.createElement('td');
  title.textContent = film.title;
  const year = document.createElement('td');
  year.textContent = `(${film.year})`;
  const imdb = document.createElement('td');
  imdb.textContent = film.imdb.toFixed(2);
  element.appendChild(id);
  element.appendChild(title);
  element.appendChild(year);
  element.appendChild(imdb);
  tbody.appendChild(element);
});

function redraw(films) {
  films.forEach((film) => {
    tbody.appendChild(film);
  });
}

let step = 0;
setInterval(() => {
  const id = document.getElementById('id');
  const title = document.getElementById('title');
  const year = document.getElementById('year');
  const imdb = document.getElementById('imdb');
  const films = document.getElementsByTagName('tr');
  const filmsArr = [...films];
  filmsArr.shift();

  // по возрастанию - по первому полю (остальные поля не учитываются)
  if (step === 0) {
    filmsArr.sort((filmA, filmB) => filmA.dataset.id - filmB.dataset.id);
    redraw(filmsArr);
    imdb.classList = '';
    id.classList = 'darr';
  }

  // по убыванию - по первому полю (остальные поля не учитываются)
  if (step === 1) {
    filmsArr.sort((filmA, filmB) => filmB.dataset.id - filmA.dataset.id);
    redraw(filmsArr);
    id.classList = 'uarr';
  }

  // по возрастанию - по второму полю (остальные поля не учитываются)
  if (step === 2) {
    filmsArr.sort((filmA, filmB) => filmA.dataset.title.localeCompare(filmB.dataset.title));
    redraw(filmsArr);
    id.classList = '';
    title.classList = 'darr';
  }

  // по убыванию - по второму полю (остальные поля не учитываются)
  if (step === 3) {
    filmsArr.sort((filmA, filmB) => filmB.dataset.title.localeCompare(filmA.dataset.title));
    redraw(filmsArr);
    title.classList = 'uarr';
  }
  // по возрастанию - по третьему полю (остальные поля не учитываются)
  if (step === 4) {
    filmsArr.sort((filmA, filmB) => filmA.dataset.year - filmB.dataset.year);
    redraw(filmsArr);
    title.classList = '';
    year.classList = 'darr';
  }

  // по убыванию - по третьему полю (остальные поля не учитываются)
  if (step === 5) {
    filmsArr.sort((filmA, filmB) => filmB.dataset.year - filmA.dataset.year);
    redraw(filmsArr);
    year.classList = 'uarr';
  }

  // то же самое по четвёртому полю
  if (step === 6) {
    filmsArr.sort((filmA, filmB) => filmA.dataset.imdb - filmB.dataset.imdb);
    redraw(filmsArr);
    year.classList = '';
    imdb.classList = 'darr';
  }

  if (step === 7) {
    filmsArr.sort((filmA, filmB) => filmB.dataset.imdb - filmA.dataset.imdb);
    redraw(filmsArr);
    imdb.classList = 'uarr';
  }

  // всё повторяется с первого пункта
  step = step === 7 ? 0 : step + 1;
}, 2000);
