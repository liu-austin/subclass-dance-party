var yoshiDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // this.$node = $('<span class="mario"></span>');
  this.i = 1;
  this.$node.addClass('yoshi0');
  this.$node.addClass('toggle-image');
  this.$node.addClass('show');
};

yoshiDancer.prototype = Object.create(Dancer.prototype);
yoshiDancer.prototype.constructor = yoshiDancer;
yoshiDancer.prototype.step = function() {
  this.$node.toggleClass('yoshi' + (this.i));
  this.i += 1;
  if (this.i === 3) {
    this.i = 1;
    this.move();
  }
  Dancer.prototype.step.call(this);
};





