
function Player(name, race, weapon) {
	this.name = name;
	this.race= race;
	this.weapon = weapon;
	this.attack = function(target) {
		if( this.type == "Wizard") {
			console.log("You attack enemies with your sexy Staff!");
			console.log("You attack for 200 damage!");
		} else if (this.type =="Barbarian"){
			console.log("You attack enemies with your slaying Sword!");
			console.log("You attack for 400 damage!");
		} else if (this.type =="Demon Hunter"){
			console.log("You attack enemies with your badass Bow!");
			console.log("You attack for 100 damage!");
		}

		if (target.health > 0){
			target.health = target.health- this.damage;
			if(target.armor <= 0) {
				alert("You vanquish the Monster!");
				target.health = 0;
			}	
		} 
	}

}

function Race(type, health, damage, armor) {
	this.type = type;
	this.health = health;
	this.damage = damage;
	this.armor = armor;

}

function Monster(type, health, damage) {
	this.type = type;
	this.health = health;
	this.damage = damage; 
	this.attack = function(target) {
		if( this.type == "Undead") {
			console.log("You are being attacked by a Grinning Ghost!");
			console.log("You have been attacked for 50 points of damage!");
		} else if (this.type =="Demon"){
			console.log("You are being attacked by a Sassy Succubus!");
			console.log("You have been attacked for 100 points of damage!");
		} else if (this.type =="Changling"){
			console.log("You are being attacked by a Wandering Werewolf!");
			console.log("You have been attacked for 150 points of damage!");
		}

		if (target.armor > 0){
			target.armor = target.armor - this.damage;
			if(target.armor <= 0) {
				alert("Your armor is broken! Only your health remains!");
				target.armor = 0;
			}	
		} else {
			target.health = target.health - this.damage;
				if(target.health <= 0){
					alert("You have DIED.");
					target.health = 0;
				}
		}

	}
}	

var Wizard = new Race("Wizard",200, 200, 100);
var Barbarian = new Race("Barbarian", 200, 400, 250);
var DemonHunter = new Race("Demon Hunter", 300, 100, 250);

var Ariden = new Player("Ariden", Wizard, "Staff");
var Yogart = new Player("Yogart", Barbarian, "Sword");
var Sora = new Player("Sora", DemonHunter, "Bow");

var Ghost = new Monster("Undead", 200, 50);
var Succubus = new Monster("Demon", 300, 100);
var Werewolf = new Monster("Changling", 400, 150);






