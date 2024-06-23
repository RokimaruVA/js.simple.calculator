// const num = 27;
// const num2 = num * 1.3;
// let firstName = "Roma";
// let secondName = "Volkov";
// const isProgramer = true;

// console.log("test:", num, firstName);

/* Can do	this
let $ = "test";
let $num = 42;
let num$ = 42;
let _ = 49;
let _num = 12;
let num_ = 12;
*/

// Restricted
// let 22num = "11"
// let num-22 = "11"
// let let

// alert(firstName);

/*
console.log("test:", firstName);
console.log(num + 10, num - 10, num * 10, num / 10);
console.log(num2 + num);
console.log((num2 + num) * 3);
console.log(firstName + " " + secondName);
*/

// console.log(resultElement.textContent);
// console.log(typeof sum);

const input1 = document.getElementById("input1");
const pasteBtn = document.getElementById("paste");
const input2 = document.getElementById("input2");
const clearBtn = document.getElementById("clear");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
const submitBtn = document.getElementById("submit");
const copyBtn = document.getElementById("copy");
const resultElement = document.getElementById("result");

clearBtn.onclick = function () {
  input1.value = "";
  input2.value = "";
  resultElement.textContent = "0.00";
  printResult(clearBtn);
};

pasteBtn.onclick = function () {
  navigator.clipboard.readText().then((text) => {
    input1.value = text;
  });
};

function setActiveBtn(activeBtn) {
  plus.classList.remove("btn-active");
  minus.classList.remove("btn-active");
  multiply.classList.remove("btn-active");
  divide.classList.remove("btn-active");

  activeBtn.classList.add("btn-active");
}

let action = "+";
plusBtn.onclick = function () {
  action = "+";
  setActiveBtn(plusBtn);
};
minusBtn.onclick = function () {
  action = "-";
  setActiveBtn(minusBtn);
};
multiplyBtn.onclick = function () {
  action = "*";
  setActiveBtn(multiplyBtn);
};
divideBtn.onclick = function () {
  action = "/";
  setActiveBtn(divideBtn);
};

function adjustFontSize(element) {
  const length = element.textContent.length;
  if (length <= 12) {
    element.style.fontSize = "3.5rem";
  } else if (length > 12) {
    element.style.fontSize = "2.5rem";
  }
}

function computeNumbersWithActions(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);
  if (actionSymbol == "+") {
    return num1 + num2;
  } else if (actionSymbol == "-") {
    return num1 - num2;
  } else if (actionSymbol == "*") {
    return num1 * num2;
  } else if (actionSymbol == "/") {
    return num1 / num2;
  }
}

submitBtn.onclick = function () {
  const result = computeNumbersWithActions(input1, input2, action);
  printResult(result);
  copyBtn.classList.remove("copied");
  setTimeout(() => {
    copyBtn.textContent = "Copy"; // Возвращаем текст кнопки
  }, 130);
  // Удаляем класс copied с кнопки copy
};

copyBtn.onclick = function () {
  navigator.clipboard
    .writeText(resultElement.textContent)
    .then(function () {
      copyBtn.classList.add("copied");
      setTimeout(() => {
        copyBtn.textContent = "Copied!"; // Меняем текст кнопки
      }, 200);
      // Добавляем класс copied к кнопке
    })
    .catch(function (error) {
      console.error("Could not copy text: ", error);
    });
};

function printResult(result) {
  if (result < 0) {
    resultElement.style.color = "#ff0044";
  } else if (result > 0) {
    resultElement.style.color = "#a9ff20";
  } else {
    resultElement.style.color = "#ffffff";
  }
  resultElement.textContent = result.toFixed(2);
  adjustFontSize(resultElement);

  // navigator.clipboard.writeText(resultElement.textContent);
}
