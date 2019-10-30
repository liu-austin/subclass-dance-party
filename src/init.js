$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
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

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineUpButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
  });
  $('.interactButton').on('click', function(event) {
    var corners = {};
    corners.topLeft = [];
    corners.topRight = [];
    corners.bottomLeft = [];
    corners.bottomRight = [];
    for (var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i].top >= ($("body").height() / 2) && window.dancers[i].left < ($("body").width() / 2)) {
        corners.bottomLeft.push(window.dancers[i]);
      } else if (window.dancers[i].top >= ($("body").height() / 2) && window.dancers[i].left >= ($("body").width() / 2)) {
        corners.bottomRight.push(window.dancers[i]);
      } else if (window.dancers[i].top < ($("body").height() / 2) && window.dancers[i].left >= ($("body").width() / 2)) {
        corners.topRight.push(window.dancers[i]);
      } else {
        corners.topLeft.push(window.dancers[i]);
      }
    }
    var topLeftCenter = [$("body").height() / 4, $("body").width() / 4];
    var topRightCenter = [$("body").height() / 4, 3 * $("body").width() / 4];
    var bottomLeftCenter = [3 * $("body").height() / 4, $("body").width() / 4];
    var bottomRightCenter = [3 * $("body").height() / 4, 3 * $("body").width() / 4];

    for (var i = 0; i < window.dancers.length; i++) {
      if (corners.topLeft.includes(window.dancers[i])) {
        window.dancers[i].interact(topLeftCenter[0], topLeftCenter[1]);
      } else if (corners.topRight.includes(window.dancers[i])) {
        window.dancers[i].interact(topRightCenter[0], topRightCenter[1]);
      } else if (corners.bottomLeft.includes(window.dancers[i])) {
        window.dancers[i].interact(bottomLeftCenter[0], bottomLeftCenter[1]);
      } else {
        window.dancers[i].interact(bottomRightCenter[0], bottomRightCenter[1]);
      }
    }
  });


});

