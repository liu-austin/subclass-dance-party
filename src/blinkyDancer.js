var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

makeBlinkyDancer.prototype = Object.create(Dancer.prototype)
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
makeBlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  // call the old version of step at the beginning of any call to this new version of step
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();

  var randomColorGenerator = function() {
    return Math.floor(Math.random() * 256);
  };

  // New CSS background color
  var styleSettings = {
    border: '10px solid rgb (' +
      randomColorGenerator() + ',' +
      randomColorGenerator() + ',' +
      randomColorGenerator() + ')'};

  // Sets new CSS background color for this.$node
  this.$node.css(styleSettings);
};