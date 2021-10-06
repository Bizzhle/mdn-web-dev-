const addButton = document.querySelector(".addButton");
var input = document.querySelector(".input");
const content = document.querySelector(".content");

class item {
  // create divs for items
  constructor(itemName) {
    this.createDiv(itemName);
  }

  createDiv(itemName) {
    let input = document.createElement("input");
    input.value = itemName;
    input.disabled = true;
    input.classList.add("item_input");
    input.type = "text";

    let itemBox = document.createElement("div");
    itemBox.classList.add("item");

    let editButton = document.createElement("button");
    editButton.innerHTML = "EDIT";
    editButton.classList.add("editButton");

    let removeButton = document.createElement("button");
    removeButton.innerHTML = "REMOVE";
    removeButton.classList.add("removeButton");

    content.appendChild(itemBox);
    itemBox.appendChild(input);
    itemBox.appendChild(editButton);
    itemBox.appendChild(removeButton);

    editButton.addEventListener("click", () => this.edit(input));
    removeButton.addEventListener("click", () => this.remove(itemBox));
  }

  edit(input) {
    input.disabled = !input.disabled;
  }

  remove(itemBox) {
    content.removeChild(itemBox);
  }
}

function check() {
  if (input.value != "") {
    new item(input.value);
    input.value = "";
  }
}

addButton.addEventListener("click", check);
window.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    alert("You pressed enter");
    check();
  }
});
