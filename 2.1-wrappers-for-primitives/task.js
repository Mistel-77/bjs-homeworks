"use strict";

let currentDate = new Date();

function calculateTotalMortgage(percent, contribution, amount, date) {
	let totalAmount = 0;
	let incorrectParameter = '';
	let incorrectParameterValue;
	let months = 0;
	let monthAmount = 0;
	let monthPercent = 0;
	
	let persentNumber = Number(percent);
	let contributionNumber = Number(contribution);
	let amountNumber = Number(amount);
	
	if (isNaN(persentNumber)) {
		incorrectParameter = 'Процентная ставка';
		incorrectParameterValue = percent;
		reportIncorrectparameter(incorrectParameter, incorrectParameterValue);
		return;
	}
	if (isNaN(contributionNumber)) {
		incorrectParameter = 'Начальный взнос';
		incorrectParameterValue = contribution;
		reportIncorrectparameter(incorrectParameter, incorrectParameterValue);
		return;
	}
	if (isNaN(amountNumber)) {
		incorrectParameter = 'Общая стоимость';
		incorrectParameterValue = amount;
		reportIncorrectparameter(incorrectParameter, incorrectParameterValue);
		return;
	}
	
	let refund = amountNumber - contributionNumber;
	months = (date.getFullYear() - currentDate.getFullYear())*12 + (date.getMonth() - currentDate.getMonth());
    monthPercent = (percent / 100 ) / 12;
	monthAmount = refund * (monthPercent + monthPercent/(Math.pow(1 + monthPercent, months) - 1));
	totalAmount = Math.round(monthAmount * months * 100) / 100;
    return totalAmount;
}

//функция вывода сообщения о неправильно параметре ввода
function reportIncorrectparameter(parameter, parameterValue) {
	alert(`Параметр ${parameter} содержит неправильное значение ${parameterValue}`);
}
function getGreeting(name) {
	switch(name) {
		case '':
		case undefined:
		case null:
		name = 'Аноним';
		break;
	}
	console.log(typeof name);
    let greeting = `Привет, мир! Меня зовут ${name}`;
    return greeting;
}