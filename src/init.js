$(document).ready(function() {
  window.dancers = [];
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  canvas.width = document.body.clientWidth - 150;
  canvas.height = document.body.clientHeight - 150;

  //ball array
  var ballsArr = [];

  var draw = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
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


  $('#canvas').on('click', function(event) {
    ballsArr.push(new makeBall(event.pageX - 75, event.pageY - 107));
  });

  $('.lineUpButton').on('click', function(event) {
    clearInterval(drawAllBallsInterval);
    var lineUpInterval = setInterval(lineUp, 10);

    function lineUp() {

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      var midpoint = canvas.height / 2;
      var timing = 20;
      if (ballsArr[0].yAxis === midpoint) {
        clearInterval(lineUpInterval);
      }
      // distance 
        // yAxis = current yAxis - midpoint
        // xAxis = current xAxis
      for ( var i = 0; i < ballsArr.length; i ++ ) {
        //ballsArr[i].xAxis -= ballsArr[i].moveX;
        ballsArr[i].moveLineUpY = midpoint - ballsArr[i].yAxis - ballsArr[i].moveY;
        ballsArr[i].yAxis += ballsArr[i].moveLineUpY;

        ctx.beginPath();
        ctx.arc(ballsArr[i].xAxis, ballsArr[i].yAxis, ballsArr[i].radius, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.fillStyle = ballsArr[i].color;
        ctx.fill();
      }
    }
  });

  var drawAllBallsInterval = setInterval(drawAllBalls, 10);



  function drawAllBalls() {
    //Clear canvas
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);



    //Loop through all balls and draw
    for ( var i = 0; i < ballsArr.length; i ++ ) {
      var proposedMovementX = ballsArr[i].xAxis + ballsArr[i].moveX;
      var proposedMovementY = ballsArr[i].yAxis + ballsArr[i].moveY;

      ctx.beginPath();
      ctx.arc(ballsArr[i].xAxis, ballsArr[i].yAxis, ballsArr[i].radius, 0, Math.PI*2, true);
      ctx.closePath();
      ctx.fillStyle = ballsArr[i].color;
      ctx.fill();

      ballsArr[i].moveX = proposedMovementX < ballsArr[i].radius || proposedMovementX > canvas.width - ballsArr[i].radius ? -1 * ballsArr[i].moveX : ballsArr[i].moveX;
      ballsArr[i].moveY = proposedMovementY < ballsArr[i].radius || proposedMovementY > canvas.height - ballsArr[i].radius ? -1 * ballsArr[i].moveY : ballsArr[i].moveY;
      ballsArr[i].xAxis += ballsArr[i].moveX;
      ballsArr[i].yAxis += ballsArr[i].moveY;
    }

    
  }



});
  

