document
  .getElementById("clickable-title")
  .addEventListener("click", function () {
    alert("شما کلیک کردید");
  });

document
  .getElementById("mouseover-title")
  .addEventListener("mouseover", function () {
    this.style.backgroundColor = "green";
  });

document
  .getElementById("mouseover-title")
  .addEventListener("mouseout", function () {
    this.style.backgroundColor = "blue";
  });

document.getElementById("my-input").addEventListener("input", function () {
  document.getElementById("output").innerText = "Input: " + this.value;
});

window.addEventListener("load", function () {
  alert("خوش آمدید");
});

function addParagraph() {
  var newParagraph = document.createElement("p");
  newParagraph.textContent = "این یک پاراگراف جدید است";
  newParagraph.id = "new-paragraph";
  document.body.appendChild(newParagraph);
}

function changeParagraphText() {
  var newParagraph = document.getElementById("new-paragraph");
  if (newParagraph) {
    newParagraph.textContent = "متن تغییر کرد";
  }
}

function addListItem() {
  var myList = document.getElementById("my-list");
  var newListItem = document.createElement("li");
  newListItem.textContent = "این یک آیتم لیست جدید است";
  myList.appendChild(newListItem);
}

function changeListItemText() {
  var myList = document.getElementById("my-list");
  if (myList && myList.children.length > 0) {
    var newListItem = myList.children[0];
    newListItem.textContent = "آیتم بروزرسانی شد";
  }
}

function addImage() {
  var newImage = document.createElement("img");
  newImage.src = "./ax.jpg";
  newImage.width = "500";
  newImage.id = "new-image";
  document.body.appendChild(newImage);
}

function changeImageSource() {
  var newImage = document.getElementById("new-image");
  if (newImage) {
    newImage.src = "./loki.jpeg";
  }
}

function addKeyValuePair() {
  
  var keyInput1 = document.getElementById("key-input1");
  var valueInput1 = document.getElementById("value-input1");
  var keyInput2 = document.getElementById("key-input2");
  var valueInput2 = document.getElementById("value-input2");
  var keyInput3 = document.getElementById("key-input3");
  var valueInput3 = document.getElementById("value-input3");
  var keyInput4 = document.getElementById("key-input4");
  var valueInput4 = document.getElementById("value-input4");

  var key1 = keyInput1.value;
  var value1 = valueInput1.value;
  var key2 = keyInput2.value;
  var value2 = valueInput2.value;
  var key3 = keyInput3.value;
  var value3 = valueInput3.value;
  var key4 = keyInput4.value;
  var value4 = valueInput4.value;

  var keyValueObject = {};
  keyValueObject[key1] = value1;
  keyValueObject[key2] = value2;
  keyValueObject[key3] = value3;
  keyValueObject[key4] = value4;


  displayObject(keyValueObject);


  keyInput1.value = "";
  valueInput1.value = "";
  keyInput2.value = "";
  valueInput2.value = "";
  keyInput3.value = "";
  valueInput3.value = "";
  keyInput4.value = "";
  valueInput4.value = "";
}

function displayObject(obj) {
  var outputDiv = document.getElementById("object-output");

  // Create a new paragraph for each property in the object
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      var paragraph = document.createElement("p");
      paragraph.textContent = prop + ": " + obj[prop];
      outputDiv.appendChild(paragraph);
    }
  }
}
