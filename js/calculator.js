let input = document.getElementById("inputBar");
let buttons = document.getElementsByTagName("button");
let result = "";

function inputBorder(e) {
  if (e.target.value?.length > 0) {
    input.style.border = "10px solid green";
  } else {
    input.style.border = "10px solid red";
  }
}

let mybtn = Array.from(buttons);
mybtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      result = eval(result);
      input.value = result;
    } else if (e.target.innerHTML == "AC") {
      result = "";
      input.value = result;
    } else if (e.target.innerHTML == "DEL") {
      result = result.substring(0, result.length - 1);
      input.value = result;
    } else {
      result += e.target.innerHTML;
      input.value = result;
    }
  });
});
