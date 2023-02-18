const buttonSelector = document.querySelectorAll("button");
let string = "";
buttonSelector.forEach((element) => {
  element.addEventListener("click", function (e) {
    if (this.innerHTML == "=") {
      string = eval(string);
      document.querySelector(".active-op").innerHTML = string;
    } else if (this.innerHTML == "AC") {
      string = "";
      document.querySelector(".active-op").innerHTML = string;
    } else if (this.innerHTML == "DEL") {
      string = document.querySelector(".active-op").innerHTML.slice(0, -1);
      document.querySelector(".active-op").innerHTML = string;
    } else {
      string += element.innerHTML;
      document.querySelector(".active-op").innerHTML = string;
    }
  });
});

// buttonSelector.forEach(callBack);
// function callBack(element) {
//   element.addEventListener("click", function () {
//     document.querySelector(".active-op").innerHTML = element.innerHTML;
//   });
// }
