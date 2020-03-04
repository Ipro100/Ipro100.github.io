$(function(){

//  if(window.screen.width > 992) {
// skrollr.init();
//  }



var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
	triggerElement: '.mouse',
  offset: 200, // start scene after scrolling for 100px
  duration: 1000 // pin the element for 400px of scrolling
})
.setClassToggle('.mouse1', 'move')
.addTo(controller);

var scene1 = new ScrollMagic.Scene({
	triggerElement: '.mouse',
  offset: 200, // start scene after scrolling for 100px
  duration: 1000 // pin the element for 400px of scrolling
})
.setClassToggle('.mouse2', 'move2')
.addTo(controller);


var scene2 = new ScrollMagic.Scene({
	triggerElement: '.mouse',
  offset: 200, // start scene after scrolling for 100px
  duration: 1000 // pin the element for 400px of scrolling
})
.setClassToggle('.mouse3', 'move3')
.addTo(controller);


var scene3 = new ScrollMagic.Scene({
	triggerElement: '.mouse',
  offset: 200, // start scene after scrolling for 100px
  duration: 1000 // pin the element for 400px of scrolling
})
.setClassToggle('.mouse4', 'move4')
.addTo(controller);

var scene4 = new ScrollMagic.Scene({
	triggerElement: '.trigger',
  offset: 200, // start scene after scrolling for 100px
  duration: 1000 // pin the element for 400px of scrolling
})
.setClassToggle('.hdec', 'move5')
.addTo(controller);






});