//get card item using array
var cardnum = Array.from(document.querySelectorAll(".broduct"));
//count the length of array
var cardcount = cardnum.length;

var currentpage = 1;
//get next and prev item
var nextbutton = document.getElementById("next");
var prevbutton = document.getElementById("prev");
//handle click on prev and next button
nextbutton.onclick = nextslide;
prevbutton.onclick = prevslide;
//create ul element
var paginationelement = document.createElement("ul");
//set attribute id  for ul element
paginationelement.setAttribute("id", "pageination-ul");
//create li item in for loop
for (var i = 1; i <= cardcount; i++) {
  var paginationitem = document.createElement("li");
  //set attribute for li
  paginationitem.setAttribute("data-index", i);
  //set item contant
  paginationitem.appendChild(document.createTextNode(i));
  //append the perent with child
  paginationelement.appendChild(paginationitem);
}
//add the created element ul to the page
document.getElementById("indicators").appendChild(paginationelement);

var paginationcreatedul = document.getElementById("pageination-ul");
var pageinationpullet = Array.from(
  document.querySelectorAll("#pageination-ul li")
);
for (var i = 0; i < pageinationpullet.length; i++) {
  pageinationpullet[i].onclick = function () {
    currentpage = parseInt(this.getAttribute("data-index"));
    shacker();
  };
}
shacker();
function nextslide() {
  if (nextbutton.classList.contains("disabled")) {
    return false;
  } else {
    currentpage++;
    shacker();
  }
}
function prevslide() {
  if (prevbutton.classList.contains("disabled")) {
    return false;
  } else {
    currentpage--;
    shacker();
  }
}
function shacker() {
  removeactive();

  cardnum[currentpage - 1].classList.add("active");
  paginationcreatedul.children[currentpage - 1].classList.add("active");

  if (currentpage == 1) {
    prevbutton.classList.add("disabled");
  } else {
    prevbutton.classList.remove("disabled");
  }

  if (currentpage == cardcount) {
    nextbutton.classList.add("disabled");
  } else {
    nextbutton.classList.remove("disabled");
  }
}
function removeactive() {
  cardnum.forEach(function (cardd) {
    cardd.classList.remove("active");
  });

  pageinationpullet.forEach(function (pagee) {
    pagee.classList.remove("active");
  });
}
let adab = document.querySelector(".contanir2");
document.querySelector(".gassan").onclick = () => {
  adab.classList.toggle("active");
};
document.querySelector("#close-login-btn").onclick = () => {
  adab.classList.remove("active");
};
