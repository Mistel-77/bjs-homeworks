"use strict";

function getResult(a,b,c){
    let x;
	let discriminant = b * b - 4 * a * c;
	 console.log(discriminant);
	
	if (discriminant < 0) {
		return [];
	} else if (discriminant == 0) {
		x = [-b / (2 * a)];
		return x;
	} else {
		x = [((-1 * b) + Math.sqrt(discriminant)) / (2 * a) , ((-1 * b) - Math.sqrt(discriminant)) / (2 * a)];
		return x;
	}
}

function getAverageMark(marks){
    let marksNew = marks;
	let total = 0;
	let averageMark;
	
	if (marks.length > 5) {
		marksNew = marks.slice(0, 5);
	} 
	
	for (let i = 0; i < marksNew.length; i++ ) {
		total = total + marksNew[i];
	}
	
	averageMark = total / marksNew.length;
	console.log(averageMark);
	// return total / marksNew.length;
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    let yearBirthday = dateOfBirthday.getFullYear();
	let now = new Date();
	let yearNow = now.getFullYear();
	let result;
	
	//if(new Date().getFullYear() - dateOfBirthday.getFullYear() > 18)
	if (yearNow - yearBirthday > 18) {
		result = `Не желаете ли олд-фэшн, ${name}?`;
	} else {
		result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
	}
	
    console.log(result)
    return result;
}