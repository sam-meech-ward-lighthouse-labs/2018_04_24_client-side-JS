document.addEventListener("DOMContentLoaded", function() {

  // var item1 = document.createElement("li");
  // item1.innerText = "🧛‍♂️🧛‍♂️"

  // var item2 = document.createElement("li");
  // item2.innerText = "🧛‍‍"

  var list =  document.querySelector("#favorites-list");

  // list.appendChild(item1);
  // list.appendChild(item2);

  var emojiForm = document.querySelector("#newEmojiForm");

  emojiForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var input = document.querySelector("#emojiTextInput").value;
    
    var listItem = document.createElement("li");
    listItem.innerText = input;

    list.appendChild(listItem);
    // console.log(input.value);
  });
});