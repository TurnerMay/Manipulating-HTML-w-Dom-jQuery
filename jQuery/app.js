$(document).ready(function () {
  let $btn = $("<button>Alert!</button>");

  $("body").append($btn);
  $btn.click(function () {
    alert("This is an alert!");
  });

  let $button = $("#btnSubmit");
  $button.click(function () {
    let message = $("#inputText").val();
    alert(message);
  });

  $(newDiv).on("mouseover", function () {
    newDiv.style.backgroundColor = "red";
  });
  $(newDiv).on("mouseleave", function () {
    newDiv.style.backgroundColor = "initial";
  });
  let msg = "This is some text in a paragraph!";
  let $newPara = $("<p>" + msg + "</p>");
  $("body").append($newPara);
  $newPara.on("click", function () {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);

    $newPara.css("color", "#" + randomColor);
  });

  let $newBtn = $("<button>Span</button>");
  $("body").append($newBtn);
  let $newDiv = $("<div></div>");
  $("body").append($newDiv);
  $newBtn.on("click", function () {
    let $span = $("<span>Turner May</span>");
    $($newDiv).append($span);
  });

  let friendsArr = [
    "Jordan",
    "Walker",
    "Heather",
    "Livi",
    "Campbell",
    "Everly",
    "JB",
    "Dave",
    "Mikey",
    "Neal",
  ];
  let i = 0;
  let friendBtn = $("#friendBtn");
  let newUL = $("#ulID");
  $(friendBtn).on("click", function () {
    if (i < friendsArr.length){
    let newLi = $("<li></li>");
    let name = (friendsArr[i]);
    $(newLi).append(name);
    $(newUL).append(newLi);
    i++}
    else {alert("No more friends, loser!")}
  });
});
