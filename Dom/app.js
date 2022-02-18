document.addEventListener("DOMContentLoaded", function (event) {
  let btn = document.createElement("button");
  btn.textContent = "Click Me";
  document.body.appendChild(btn);
  btn.addEventListener("click", function () {
    alert("Any Nice Message!");
  });

  document.getElementById("btnSubmit").addEventListener("click", function () {
    let text = document.getElementById("inputText").value;
    alert(text);
  });

  let newDiv = document.getElementById("newDiv");
  newDiv.addEventListener("mouseover", function () {
    newDiv.style.backgroundColor = "red";
  });
  newDiv.addEventListener("mouseleave", function () {
    newDiv.style.backgroundColor = "initial";
  });
  let newPara = document.createElement("p");
  let paraText = (newPara.textContent = "Paragraph Text Content");
  document.body.appendChild(newPara);

  newPara.addEventListener("click", function () {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);

    newPara.style.color = "#" + randomColor;
  });

  let emptyDiv = document.createElement("div");
  document.body.appendChild(emptyDiv);
  let newBtn = document.createElement("button");
  newBtn.textContent = "Add Span";
  document.body.appendChild(newBtn);

  newBtn.addEventListener("click", function () {
    let span = document.createElement("span");
    span.textContent = "Turner May";
    emptyDiv.appendChild(span);
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

  let friendBtn = document.getElementById("friends");
  let ul = document.getElementById("ul");
  let i = 0;
  friendBtn.addEventListener("click", function () {
    if (i < friendsArr.length){
    // for (let i = 0; i < friendsArr.length; i++) {
    let li = document.createElement("li");
    let name = document.createTextNode(friendsArr[i]);
    li.appendChild(name);
    ul.appendChild(li);
    i++}
    else {alert("You got no more friends!")}
  });
});
