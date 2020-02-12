function getAnimalSound(animal) {
	let animalSound;
    if (animal == undefined) {
		animalSound = null;
	} else {
		animalSound = animal.sound;
	}
    return animalSound;
}

function getAverageMark(marks) {
	let total = 0;
	if (marks.length == 0) {
		return 0;
	} else {
		for (let i = 0; i < marks.length; i ++) {
			total = total + Number(marks[i]);
		}
	}
	
	let average = total / marks.length;
	let roundedAverage = Math.round(average);
    return roundedAverage;
}

function checkBirthday(birthday) {
	let verdict;
    let now = +(new Date());
	let year = birthday.slice(0, 4);
	let month = birthday.slice(5, 7);
	let day = birthday.slice(8, 10);
	let birthdayDay = new Date(year, month - 1, day);
	//let birthdayDay = Date.parse(birthday) как вариант можно попробовать;
	
	let diff = now - (+birthdayDay);
	let age = diff / (365.25 * 24 * 60 * 60 * 1000);
	console.log(age);
	console.log(birthdayDay);
    return age >= 18;
}