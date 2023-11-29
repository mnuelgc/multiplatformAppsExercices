
let firstNumberField = document.getElementById("oper1");
let secondNumberField = document.getElementById("oper2");

let resultField = document.getElementById('result');


function suma()
{
	var firstNumber = parseFloat(firstNumberField.value);
	var secondNumber = parseFloat(secondNumberField.value);

	var suma = firstNumber + secondNumber
	resultField.innerHTML = suma;

}

function resta()
{
	var firstNumber = parseFloat(firstNumberField.value);
	var secondNumber = parseFloat(secondNumberField.value);

	var resta = firstNumber - secondNumber
	resultField.innerHTML = resta;

}

function multiplica()
{
	var firstNumber = parseFloat(firstNumberField.value);
	var secondNumber = parseFloat(secondNumberField.value);

	var multiplica = firstNumber * secondNumber
	resultField.innerHTML = multiplica;
}

function divide()
{
	var firstNumber = parseFloat(firstNumberField.value);
	var secondNumber = parseFloat(secondNumberField.value);

	var divide = firstNumber / secondNumber
	resultField.innerHTML = divide;
}