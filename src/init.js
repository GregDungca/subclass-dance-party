$(document).ready(function() {
  window.dancers = [];

  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;

  var draw = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = 'green';
    ctx.fillRect(25,25,100,100);
  }

  $(".addBlinkyDancerButton").on("click", function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("data-dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window.makeBlinkyDancer;
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });

  $(".addPizzaButton").on("click", function(event) {

    var dancerMakerFunctionName = $(this).data("data-dancer-maker-function-name");

    var dancerMakerFunction = window.makePizzaDancer;

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });

  $(".addBatonButton").on("click", function(event) {

    var dancerMakerFunctionName = $(this).data("data-dancer-maker-function-name");

    var dancerMakerFunction = window.makeBatonDancer;

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });

  // var draw = function() {
  //   var canvas = document.getElementByClass('canvas');
  //   var ctx = canvas.getContext('2d');

  //   ctx.fillStyle = 'green';
  //   ctx.fillRect(25,25,100,100);
  // }

  draw();

});
  

/* ** CANVAS**
1) var canvas = document.getElementByClass('canvas');
   var ctx = canvas.getContext('2d');
  
  on startup need to retrieve the canvas DOM element

2) 

*/
