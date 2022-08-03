

const handeOnChangeEvent = function () {
  const inputAllButtons = document.querySelectorAll(".radio-input");
  console.log(inputAllButtons);
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
      return handeOnChangeEvent;
    });
  });
};
