const addMoviesToTheDom = function () {
  movies.map((movie) => {
    var newLi = document.createElement("li");
    const UL = document.getElementById("UL");
    const titleMovie = movie.poster;
    UL.appendChild(newLi);
    img = new Image(100, 100);
    img.src = titleMovie;
    newLi.appendChild(img);
  });
};
document.addEventListener("DOMContentLoaded", addMoviesToTheDom);

const handeOnChangeEvent = function () {
  const inputAllButtons = document.querySelectorAll(".radio-input");
  inputAllButtons.forEach(function (radioo) {
    radioo.addEventListener("change", function (e) {
      console.log(e.target);
      switch (e.target.value) {
        case "2014":
          console.log("heyy hallooooo 2014");
          break;
        case "avenger":
          console.log("heyy hallooooo avenger");
          break;
        case "xmen":
          console.log("Heyy hallo xmen");
          break;
        case "princess":
          console.log("Heyy hallo Princess");
          break;
        case "batman":
          console.log("Heyy hallo BATMANN");
          break;
      }
    });
  });
};
document.addEventListener("DOMContentLoaded", handeOnChangeEvent);
// console.log(handeOnChangeEvent(addMoviesToTheDom)); (zo zou je het ook in console log weergeven)
