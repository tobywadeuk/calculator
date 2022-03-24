let userFirstNumber = ""
let userSecondNumber = ""
let chosenOp = ""
let operatorClicked = false
let calculationDone = false
let calculation = ""
let calculationRounded = ""
let displayArea = document.querySelector(".display")
let dotButtonClickedNumOne = false
let dotButtonClickedNumTwo = false

function operate(operator, num1, num2) {
  if (operator == "+") {
    return Number(num1) + Number(num2)
  } else if (operator == "-") {
    return Number(num1) - Number(num2)
  } else if (operator == "*") {
    return Number(num1) * Number(num2)
  } else if (operator == "/") {
    return Number(num1) / Number(num2)
  }
}

let numberClickArray = Array.from(document.querySelectorAll(".number"))
let operationClickArray = Array.from(document.querySelectorAll(".operator"))
let clearButton = document.querySelector(".clear")
let equalsButton = document.querySelector(".equals")
let dotButton = document.querySelector(".dot")

////
// numberclicked
////

numberClickArray.forEach((item) => {
  item.addEventListener("click", function() {
    numberClicked(item.innerHTML)
  })
})

document.addEventListener('keydown', function(event) {
  if (event.key >= '0' && event.key <= '9') {
    numberClicked(event.key)
  }
})

function numberClicked(item) {
  displayArea.textContent = ""

  if (operatorClicked === false) {
    userFirstNumber = userFirstNumber + item
    displayArea.textContent = userFirstNumber
  } else {
    userSecondNumber = userSecondNumber + item
    displayArea.textContent = userSecondNumber
    console.log(userSecondNumber)
  }
}

////
// operation clicked
////

operationClickArray.forEach((item) => {
  item.addEventListener("click", function() {
    operationClicked(item.innerHTML)
  })
})

document.addEventListener('keydown', function(event) {
  if (event.key == "+" || event.key == "*" || event.key == "/" || event.key == "-") {
    operationClicked(event.key)
  }
})

function operationClicked(item) {
  console.log(item)
  chosenOp = item
  if (userFirstNumber !== "" && userSecondNumber !== "") {
    doTheCalculate()
    displayArea.textContent = calculation
  } else {
    displayArea.textContent = chosenOp
  }
  operatorClicked = true
}

////
// clear clicked
////

document.addEventListener("keydown", function(event) {
  if (event.key == "Escape") {
    clearClicked()
  }
})

clearButton.addEventListener("click", function() {
  clearClicked()
})

function clearClicked() {
  displayArea.textContent = ""
  userFirstNumber = ""
  userSecondNumber = ""
  chosenOp = ""
  operatorClicked = false
  calculationDone = false
  calculation = ""
  dotButtonClickedNumOne = false
  dotButtonClickedNumTwo = false
}

////
// equals clicked
////

document.addEventListener("keydown", function(event) {
  if (event.key == "=") {
    equalsClicked()
  }
})

function equalsClicked() {
  if (userFirstNumber == "" || userSecondNumber == "" || chosenOp == "") {
    console.log("error")
    displayArea.textContent = "ya didn't write the thing"
  } else {
    doTheCalculate()
  }
}

equalsButton.addEventListener("click", function() {
  equalsClicked()
})

////
// calculation
////


function doTheCalculate() {
  if (chosenOp == "/" && userSecondNumber == "0") {
    displayArea.textContent = "y'all really thought"
  } else {
    console.log(userFirstNumber, chosenOp, userSecondNumber)
    calculation = operate(chosenOp, userFirstNumber, userSecondNumber)
    calculationRounded = Math.round(calculation * 10) / 10
    displayArea.textContent = calculationRounded
    calculationDone = true
    userFirstNumber = calculation
    userSecondNumber = ""
    console.log(calculation)
  }
}

////
// dot clicked
////

dotButton.addEventListener("click", function() {
  dotClicked()
})


document.addEventListener("keydown", function(event) {
  if (event.key == ".") {
    dotClicked()
  }
})

function dotClicked() {
  if (operatorClicked == false && dotButtonClickedNumOne == false) {
    userFirstNumber = userFirstNumber + "."
    dotButtonClickedNumOne = true
    displayArea.textContent = userFirstNumber
    console.log(userFirstNumber)
  } else if (operatorClicked === true && dotButtonClickedNumTwo == false) {
    userSecondNumber = userSecondNumber + "."
    dotButtonClickedNumTwo = true
    console.log(userSecondNumber)
  }
}
