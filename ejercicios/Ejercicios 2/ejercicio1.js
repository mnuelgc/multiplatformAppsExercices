const mensjError = "Introduce valores validos"

var firstNumberField = document.getElementById("oper1");
var secondNumberField = document.getElementById("oper2");

var resultField = document.getElementById('result');


function suma()
{
	let firstNumber = checkInputsGeneral(firstNumberField, "primer campo");
	let secondNumber = checkInputsGeneral(secondNumberField, "segundo campo");

	if (firstNumber != null && secondNumber != null){
		let suma = firstNumber + secondNumber;
		resultField.innerHTML = suma;
	}else{
		resultField.innerHTML = mensjError;
	}
}

function resta()
{
	let firstNumber = checkInputsGeneral(firstNumberField, "primer campo");
	let secondNumber = checkInputsGeneral(secondNumberField, "segundo campo");

	if (firstNumber != null && secondNumber != null){
		let resta = firstNumber - secondNumber;
		resultField.innerHTML = resta;
	}else{
	resultField.innerHTML = mensjError
	}
}

function multiplica()
{
	let firstNumber = checkInputsGeneral(firstNumberField, "primer campo");
	let secondNumber = checkInputsGeneral(secondNumberField, "segundo campo");

	if (firstNumber != null && secondNumber != null){
		let multiplica = firstNumber * secondNumber;
		resultField.innerHTML = multiplica;
	}
	else{
		resultField.innerHTML = mensjError;
	}
}

function divide()
{
	let firstNumber = checkInputsGeneral(firstNumberField, "primer campo");
	let secondNumber = checkInputsGeneral(secondNumberField, "segundo campo");

	secondNumber = checkInputDivision(secondNumber)


	if (firstNumber != null && secondNumber != null){
		let divide = firstNumber / secondNumber;
		resultField.innerHTML = divide;
	}
	else{
		resultField.innerHTML = mensjError;
	}
}

function checkInputsGeneral(inputValue, valueName)
{
	if (!isNaN(inputValue.value) && inputValue.value != "")
	{
		return 	parseFloat(inputValue.value);
	}else{
		alert("Debes introducir un número en el " + valueName);

		return null;

	}
}

function checkInputDivision(secondInputNumber)
{
	if (secondInputNumber === null || secondInputNumber == 0) 
	{
		alert("El segundo número de la división no puede ser 0");
		return null;
	}
	return secondInputNumber;
}

