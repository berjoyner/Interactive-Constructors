
// function Snowman(name) {
// 	this.name = name;
// 	this.age = age;
// 	this.size = size;
// 	this.life = 100;

// 	// this.bonus = function(accessories) {
// 	// 	if (this.accessories = hat)
// 	// }
// }

// var person = new Snowman("Person", "2 days", 5);
// // console.log(person);

// function Location(time, exactArea, snowProb) {
// 	this.time = time; 
// 	this.exactArea = exactArea;
// 	this.snowProb = snowProb;
// }

// var ny = new Location(12, "backyard", 50);

// // console.log(ny);

// 	Location.prototype.meltProb = function(target) {
// 	if( this.life <=20){
// 		target.life = target.life - 20;
// 	};  
// 	(target)
// };



// // function Build(eyes, arms, accessories) {
// // 	this.eyes = eyes;
// // 	this.arms = arms;
// // 	this.accessories = accessories;
// // }


// // function Deathtraps(type, damage, quanity){
// // 	this.type = type;
// // 	this.damage = damage;
// // 	this.quanity = quanity;
// // }


// // });


function Player(name, race, weapon) {
	this.name = name;
	this.race= race;
	this.weapon = weapon;


}

function Race(health, damage, armor) {
	this.health = health;
	this.damage = damage;
	this.armor = armor;

}

function Monster(type, health, attack) {
	this.type = type;
	this.attack = attack; 
	this.haunt = function(target) {
		if (target.armor > 0){
			console.log("You have been attacked for 50 points of damage!");	
			target.armor = target.armor - this.attack;
			if(target.armor == 0) {
				alert("Your armor is broken! Only your health remains!");
			}
		} else {
			target.health = target.health - this.attack;
				if(target.health == 0){
					alert("You have DIED.");
				}
		}

	}
}	

var Wizard = new Race(200, 200, 100);
var Barbarian = new Race(200, 400, 250)
var DemonHunter = new Race(300, 200, 250)

var Ariden = new Player("Ariden", Wizard, "Wand");
var Yogart = new Player("Yogart", Barbarian, "Sword");
var Sora = new Player("Sora", DemonHunter, "Bow");

var Ghost = new Monster("Electric", 50, 50);




