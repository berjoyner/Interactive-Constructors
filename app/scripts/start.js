
$(document).ready(function() {

// $(".heroes img").on("click", function(e) {
// 	event.preventDefault(); 
// 	$(this).siblings().toggle();
// 	$(this).parent.append("");
	
// });

// $(".heroes img").on("click", function(e) {
// 	event.preventDefault(); 
// 	$(this).closet(li).siblings().children().addClass("hide");

$(".heroes img").click(function(event) {
      event.preventDefault();
      var $singleHero = $(this);

      // console.log($(this));
$singleHero.closest("li").find(".heroActions").addClass("show");
$singleHero.closest("li").siblings().find(".heroActions").removeClass("show");
$singleHero.closest("li").siblings().toggle();

});

// $(".go").click(function(){
//   $(this).hide();
// });


$(".go").click(function() {
	event.preventDefault();
	$(this).next("div").addClass("show");
	$(".go").hide();
});

$(".attackWiz").click(function() {
	event.preventDefault();
	Ariden.attack(Ghost);
	Ghost.attack(Ariden);
	// $(".attackWiz").hide();
	
});

$(".attackBarb").click(function() {
	event.preventDefault();
	Yogart.attack(Succubus);
	Succubus.attack(Yogart);
	// $(".attackBarb").hide();
});

$(".attackDemon").click(function() {
	event.preventDefault();
	Sora.attack(Werewolf);
	Werewolf.attack(Sora);
	// $(".attackDemon").hide();
});


var Wizard = new Race("Wizard",200, 200, 100);
var Barbarian = new Race("Barbarian", 200, 400, 250);
var DemonHunter = new Race("Demon Hunter", 300, 100, 250);

var Ariden = new Player("Ariden", Wizard, "Staff");
var Yogart = new Player("Yogart", Barbarian, "Sword");
var Sora = new Player("Sora", DemonHunter, "Bow");

var Ghost = new Monster("Undead", 200, 50);
var Succubus = new Monster("Demon", 500, 500);
var Werewolf = new Monster("Changling", 400, 150);

	
});

	