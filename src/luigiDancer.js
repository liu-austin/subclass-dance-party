var luigiDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // this.$node = $('<span class="mario"></span>');
  this.i = 1;
  this.$node.addClass('luigi0');
  this.$node.addClass('toggle-image');
  // this.$node.addClass('mario1');
  this.$node.addClass('show');
};

luigiDancer.prototype = Object.create(Dancer.prototype);
luigiDancer.prototype.constructor = luigiDancer;
luigiDancer.prototype.step = function() {
  this.$node.toggleClass('luigi' + (this.i));
  this.i += 1;
  if (this.i === 7) {
    this.i = 1;
  }
  Dancer.prototype.step.call(this);
};
