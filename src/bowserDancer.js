var bowserDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // this.$node = $('<span class="mario"></span>');
  this.id = Math.random() * 100000;
  this.i = 1;
  this.$node.addClass(String(this.id));
  this.$node.addClass('bowser0');
  this.$node.addClass('toggle-image');
  this.$node.addClass('show');
  this.$node.addClass('growOnMouseOver');

  this.$node.mouseover(function(event) {

    $(this).css("height", "300px");
    $(this).css("width", "275px");
  });
};

bowserDancer.prototype = Object.create(Dancer.prototype);
bowserDancer.prototype.constructor = bowserDancer;
bowserDancer.prototype.step = function() {
  this.$node.toggleClass('bowser' + (this.i));
  this.i += 1;
  if (this.i === 7) {
    this.i = 1;

  }
  else {
    this.move();
  }
  Dancer.prototype.step.call(this);
};

bowserDancer.prototype.grow = function() {
  this.$node.css("height", "194px");
};