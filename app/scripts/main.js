$(document).ready(function() { 


// function Character(name, type, ability, speed) {
// 	this.name = name;
// 	this.type = type; 
// 	this.ability = ability;
// 	this.life = 100;
// 	this.speed = speed; 
// }  //functions don't have terminating ;- function without them

// Character.prototype.changeAbility = function(newAbility) {
// 	this.ability = newAbility; //method

// // }; 

// function Character(name, type, ability, speed) {
// 	this.name = name;
// 	this.type = type; 
// 	this.ability = ability;
// 	this.life = 100;
// 	this.changeAbility = function(newAbility) { //method
// 		this.ability = newAbility;

// 	this.speed = speed;
// 	this.addDamage = function(weapon) {
// 		if (this.life <= 0) {
// 			console.log("im in add damage is less eq to this.life");
// 		this.ability = "none";
// 		alert(this.name + "died. Game over for" + this.name)

// 		}
// 		this.life = this.life -weapon.damage;
// 	}
// 	};

// }


function Snowman(name, age, size) {
	this.name = name;
	this.age = age;
	this.size = size || "3 Snowballs";
	this.life = 100;

	this.bonus = function(accessories) {
		if (this.accessories = hat)
	}
}

Snowman();


function Location(time, exactArea, snowProb) {
	this.time = time; || "HighNoon"
	this.exactArea = exactArea || "Backyard";
	this.snowProb = snowProb;

	Snowman.prototype.meltProb = function(snowProb) {
	if( this.snowProb <=20){
		this.life = this.life - 20;
	};
};
}

Location();

function Build(eyes, arms, accessories) {
	this.eyes = eyes || "Coal";
	this.arms = arms;
	this.accessories = accessories;
}

Build();

function Deathtraps(type, damage, quanity){
	this.type = type || "RogueIcicles";
	this.damage = damage || 25;
	this.quanity = quanity;
}

Deathtraps();



// function Phone( type, brand) {
// 	this.type = type;
// 	this.brand = brand;
// }

// Phone.prototype.dropPhone = function(){
// 	this.broken = true;	
// };

// function Weapons(type, damage, weight) {
// 	this.type = type || "pea shooter";
// 	this.damage = damage || 0;
// 	this.weight = weight || "1 kilo";
// 	this.fire = function (target) {
// 		console.log("pew pew");
// 		var chance = Math.floor(Math.random() * 10);
// 		console.log(chance);
// 		if (chance < 3) {
// 			target.addDamage(this)
// 		}
// 	};








});