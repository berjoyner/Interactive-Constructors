/* global describe, it */

(function () {
    'use strict';


 describe('Checking & Testing All Constructors For Diablo 4', function (){


 	describe('New Player Test', function(){
 		// var Wizard = new Race("Wizard",200, 200, 100);
 		var newPlayer = new Player();
 		var theOfficeDwight = new Player("Dwight", Wizard, "Septor");

 		it('Should Be a New Player Instance', function(){

 			expect(newPlayer).to.be.an.instanceof(Player);
 		});
 	});

 	describe('Player Defaults', function() {

 		it('Should Be Set to 3 Default Players, Unless New Player Instance is made', function(){

 			var testPlayer = new Player();
 			// var Sora = new Player("Sora", DemonHunter, "Bow");

 		// 	expect(testPlayer.name).to.equal('Sora');
			// expect(testPlayer.race).to.equal(DemonHunter);
			// expect(testPlayer.weapon).to.equal('Bow');

 			expect(testPlayer.name).to.be.an("undefined");
			expect(testPlayer.race).to.be.an('undefined');
			expect(testPlayer.weapon).to.be.an('undefined');

 		});
 	});

 	describe('Player Attack Function', function() {

 		it('Player Should Attack Monsters Based on Race Parameters', function() {

 			var theOfficeDwight = new Player("Dwight", Wizard, "Septor");
 			var Ghost = new Monster("Undead", 250, 50);
 			// var Wizard = new Race("Wizard",200, 200, 100);

 			expect(Ghost.health).to.be.equal(250);
 			theOfficeDwight.attack(Ghost);
 			expect(Ghost.health).to.be.equal(50);

 		});

 		it('Monster Health Status', function() {

 			var Succubus = new Monster("Demon", 500, 500);
 			var Barbarian = new Race("Barbarian", 200, 400, 250);

 			Succubus.health = 0;
 			Yogart.attack(Succubus);

 		});
 	});

 	describe('Player Race Default', function(){

 		it('Can Be Set To 3 Default Races, Unless Another Instance Is Created', function() {

 			var testRace = new Race();

 			expect(testRace.type).to.be.an("undefined");
			expect(testRace.health).to.be.an('undefined');
			expect(testRace.damage).to.be.an('undefined');
			expect(testRace.armor).to.be.an("undefined");
 		});
 	});

 	describe('New Monster Test', function(){

 		var newMonster = new Monster();
 		var theOfficeKevin = new Monster("Cookie Monster", 450, 100);

 		it('Should Be a New Monster Instance', function(){

 			expect(newMonster).to.be.an.instanceof(Monster);
 		});
 	});

 	describe('Monster Attack Function', function() {

 		it('Monster Should Attack Players Based on Type Parameters', function() {

 			var theOfficeDwight = new Player("Dwight", Wizard, "Septor");
 			var theOfficeKevin = new Monster("Cookie Monster", 450, 100);

 			expect(theOfficeDwight.race.armor).to.be.equal(100);
 			theOfficeKevin.attack(theOfficeDwight.race);
 			expect(theOfficeDwight.race.armor).to.be.equal(0);

 			expect(theOfficeDwight.race.health).to.be.equal(200);
 			theOfficeKevin.attack(theOfficeDwight.race);
 			expect(theOfficeDwight.race.health).to.be.equal(100);

 		});

 	// 	it('Player Health Status', function() {

 	// 		var Werewolf = new Monster("Demon", 500, 500);
 	// 		var Ariden = new Player("Ariden", Wizard, "Staff");

 	// 		Ariden.armor = 0;
 	// 		Werewolf.attack(Ariden.armor);

 	// 		Ariden.health = 0;
 	// 		Werewolf.attack(Ariden.health);

 	// 	});
 	});
 });

})();