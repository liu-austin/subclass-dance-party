var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.i = 1;
  this.$node.addClass('color1');
  this.$node.addClass('toggle-image');
  this.$node.addClass('show');
};

makeBlinkyDancer.prototype = Object.create(Dancer.prototype)
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
makeBlinkyDancer.prototype.step = function() {
  this.$node.toggleClass('color' + (this.i));
  this.i += 1;
  if (this.i === 6) {
    this.i = 1;
  }
  Dancer.prototype.step.call(this);

  // call the old version of step at the beginning of any call to this new version of step
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  this.$node.toggle();
  // this.changeColor();
};
