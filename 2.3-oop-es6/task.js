//Задание 1

class Weapon {
	constructor(name, attack, durability, range) {
		this.name = name;
		this.attack = attack;
		this.durability = durability;
		this.range = range;
		this.firstDurability = durability;
	}
	takeDamage(damage) {
		this.durability = this.durability - damage;
		
		if(this.durability < 0) {
			this.durability = 0;
		}
	}
	
	getDamage() {
		if(this.durability >= this.firstDurability * 0.3) {
			return this.attack;
		} else if (this.durability == 0) {
			return 0;
		} else {
			return this.attack / 2;
		}
	}
	
	isBroken() {
		if(this.durability > 0) {
			return false;
		} else {
			return true;
		}
	}
}

const oldSword = new Weapon('Старый меч', 20, 10, 1);

//console.log(oldSword);
oldSword.takeDamage(5);
console.log(oldSword.durability); // 5
oldSword.takeDamage(50);
console.log(oldSword.durability); // 0

const arm = new Weapon('Рука', 1, Infinity, 1);
//arm.takeDamage(20);
//console.log(arm.durability); // Infinity

const bow = new Weapon('Лук', 10, 200, 3);
//bow.takeDamage(20);
//console.log(bow.durability); // 180
//bow.takeDamage(200);
//console.log(bow.durability); // 0

//console.log(bow.durability); // 0
//console.log(bow.getDamage()); // 0
//console.log(bow.isBroken());

//console.log(arm.durability); // Infinity
//console.log(arm.getDamage()); // 1
//console.log(arm.isBroken()); // false

//Таблица 1. Варианты оружия
const sword = new Weapon('Меч', 25, 500, 1);
const knife = new Weapon('Нож', 5, 300, 1);
const staff = new Weapon('Посох', 8, 300, 2);

const longBow = new Weapon('Длинный лук', 15, bow.durability, 4);
const axe = new Weapon('Секира', 27, 800, sword.range);
const stormStaff = new Weapon('Посох Бури', 10, staff.durability, 3);


console.log('---------------');
//Задание 2
class Arm extends Weapon {
	constructor(name, attack, durability, range){
		super('Рука', 1, Infinity, 1);
	}		
};
class Bow extends Weapon {
	constructor(name, attack, durability, range){
		super('Лук', 10, 200, 3);
	}
};
class Sword extends Weapon {
	constructor(name, attack, durability, range){
		super('Меч', 25, 500, 1);
	}
};
class Knife extends Weapon {
	constructor(name, attack, durability, range){
		super('Нож', 5, 300, 1);
	}
};
class Staff extends Weapon {
	constructor(name, attack, durability, range){
		super('Посох', 8, 300, 2);
	}
};

class LongBow extends Bow {
	constructor(name, attack, durability, range){
		super('Длинный лук', 15, Bow.durability, 4);
		this.name = 'Длинный лук';
		this.attack = 15;
		this.range = 4;
	}
};

class Axe extends Sword {
	constructor(name, attack, durability, range){
		super('Секира', 27, 800, Sword.range);
		this.name = 'Секира';
		this.attack = 27;
		this.durability = 800;
		this.firstDurability = 800;

	}
};

class StormStaff extends Staff {
	constructor(name, attack, durability, range){
		super('Посох Бури', 10, Staff.durability, 3);
		this.name = 'Посох Бури';
		this.attack = 10;
		this.range = 3;
	}
};


const arm2 = new Arm();
const bow2 = new Bow();
const sword2 = new Sword();
const knife2 = new Knife();
const staff2 = new Staff();

const longBow2 = new LongBow();
const axe2 = new Axe();
const stormStaff2 = new StormStaff();

console.log(bow2.name); // Лук
console.log(bow2.attack); // 10
console.log(bow2.durability); // 200
console.log(bow2.range); // 3

console.log(longBow2);
console.log(longBow2.name);
console.log(longBow2.attack);
console.log(longBow2.durability);
console.log(longBow2.range);

console.log(axe2);
console.log(stormStaff2);

console.log('---------------');
//Задание 3
class StudentLog {
	constructor(name) {
		this.name = name;
		this.subjects = {};
	}
	
	getName() {
		return this.name;
	}
	
	addGrade(grade, subject) {
		if(this.subjects[subject] == undefined) {
			this.subjects[subject] = [];
		}
		
		if (grade < 1 || grade > 5 || typeof(grade) == "string") {
			console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
			return this.subjects[subject].length;
		}
		this.subjects[subject].push(grade);
		
		console.log(this.subjects);
		return this.subjects[subject].length;
	}
	
	getAverageBySubject(subject) {
		let sum = 0;
		if(this.subjects[subject] == undefined) {
			return 0;
		}
		
		for (let i = 0; i < this.subjects[subject].length; i++) {
			sum += this.subjects[subject][i]
		}
		
		if( sum == 0) {
			return 0;
		} else {
			return sum / this.subjects[subject].length;
		}
	}
	
	getTotalAverage() {
		let total = 0;
		let k = 0;
		
		for(let prop in this.subjects) {
			
			if(this.subjects[prop].length > 0) {  //проверка предмета без оценок
				k += 1;
				total += this.getAverageBySubject(prop);
			}
		}
		return total / k;
	}
}

const log = new StudentLog('Олег Никифоров');
console.log(log.getName()) // Олег Никифоров
console.log(log.addGrade(2, 'algebra')); //1
console.log(log.addGrade('отлично!', 'math')); //предмет добавили в массив оценок
console.log(log.addGrade(4, 'algebra')); //2
console.log(log.addGrade(5, 'geometry')); //1
console.log(log.addGrade(25, 'geometry')); //ошибка

log.addGrade(4, 'geometry');
console.log(log.getAverageBySubject('gggg')); //0
console.log(log.getAverageBySubject('geometry')); // 4.5
console.log(log.getAverageBySubject('algebra')); // 3
console.log(log.getAverageBySubject('math')); // 0
console.log('---------------');
console.log(log.getTotalAverage()); // 3,75



















