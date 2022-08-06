// Asignment Film Finder

// AddMoviesToTheDOM FUNCTION:

const addMoviesToTheDom = function (inputt) {
  inputt.map((movie) => {
    const UL = document.getElementById("UL");
    var newLi = document.createElement("li");
    const createA = document.createElement("a");
    UL.appendChild(newLi);
    newLi.appendChild(createA);
    const Linkmovie = "https://www.imdb.com/title/" + movie.imdbID;
    createA.href = Linkmovie;
    createA.target = "_blank"; // Heb er een target link van gemaakt. Vind ik persoonlijk veel prettiger.
    const posterMovie = movie.poster;
    img = new Image();
    img.src = posterMovie;
    createA.appendChild(img);
  });
};
document.addEventListener("DOMContentLoaded", addMoviesToTheDom(movies));

// DE FILTERS:

var filter2014 = movies.filter((movie) => movie.year >= 2014);
var filterPrincess = movies.filter((movie) => movie.title.includes("Princess"));
var filterXmen = movies.filter((movie) => movie.title.includes("X-Men"));
var filterAvengers = movies.filter((movie) => movie.title.includes("Avengers"));
var filterBatman = movies.filter((movie) => movie.title.includes("Batman"));

// HandeOnChangeEvent FUNCTION:

const handeOnChangeEvent = function () {
  const inputAllButtons = document.querySelectorAll(".radio-input");
  inputAllButtons.forEach(function (radioo) {
    radioo.addEventListener("change", function (e) {
      console.log(e.target);
      switch (e.target.value) {
        case "2014":
          removeUl();
          addMoviesToTheDom(filter2014);
          break;
        case "avenger":
          removeUl();
          addMoviesToTheDom(filterAvengers);

          break;
        case "xmen":
          removeUl();
          addMoviesToTheDom(filterXmen);

          break;
        case "princess":
          removeUl();
          addMoviesToTheDom(filterPrincess);
          break;
        case "batman":
          removeUl();
          addMoviesToTheDom(filterBatman);
          break;
        default:
          addMoviesToTheDom();
      }
    });
  });
};
document.addEventListener("DOMContentLoaded", handeOnChangeEvent);

//removeUl FUNCTION:

const removeUl = () => {
  const removeChilds = document.getElementById("UL");
  removeChilds.innerHTML = "";
};

// SEARCHBAR

const charactersList = document.getElementById("charactersList");
const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  const filteredCharacters = movies.filter((moviee) => {
    return (
      moviee.title.toLowerCase().includes(searchString) ||
      moviee.year.toLowerCase().includes(searchString)
    );
  });
  removeUl();
  displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
  try {
    const res = await fetch(movie.poster);
    hpCharacters = await res.json();
    displayCharacters(hpCharacters);
  } catch (err) {
    console.error(err);
  }
};

const displayCharacters = (characters) => {
  addMoviesToTheDom(characters);
};
loadCharacters();
