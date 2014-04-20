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

$(".go").click(function() {
	$(this).closest("div").next().addClass("show");
	$(this).closest("div").addClass("show");
});



$(".wizard").click(function(event) {
	event.preventDefault();
	var $wizard = $(this);

$wizard.closest("li").find(".wizard").addClass("show");
$wizard.closest("li").siblings().find(".heroActions").removeClass("hide");
$wizard.closest("li").siblings().toggle();
});
	







// $(".attack").click(function() {

});

// var startButton = $(".btn");
// $(".btn").append();

// $(".wizard").on("click", ".img-rounded", function(e) { 
// 	event.preventDefault(); 
// 	$(this).siblings().toggle();
// 	$(this).parent("div").append("test");
	
// });

	

var Wizard = new Race("Wizard",200, 200, 100);
var Barbarian = new Race("Barbarian", 200, 400, 250);
var DemonHunter = new Race("Demon Hunter", 300, 100, 250);

var Ariden = new Player("Ariden", Wizard, "Staff");
var Yogart = new Player("Yogart", Barbarian, "Sword");
var Sora = new Player("Sora", DemonHunter, "Bow");

var Ghost = new Monster("Undead", 200, 50);
var Succubus = new Monster("Demon", 300, 100);
var Werewolf = new Monster("Changling", 400, 150);