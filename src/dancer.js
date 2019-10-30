// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.top = top;
  this.left = left;
  this.setPosition(this.top, this.left);
};
Dancer.prototype.step = function() {

  setTimeout(this.step.bind(this), this.timeBetweenSteps);

};
Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.jump = function() {
  this.setPosition(this.top + (Math.round(Math.random()) ? 1 : -1) * (Math.random() * 125), this.left + (Math.round(Math.random()) ? 1 : -1) * (Math.random() * 125));
  this.top = this.top + (Math.round(Math.random()) ? 1 : -1) * (Math.random() * 125);
  this.left = this.left + (Math.round(Math.random()) ? 1 : -1) * (Math.random() * 125);
};

Dancer.prototype.move = function() {
  this.setPosition(this.top,this.left + (Math.round(Math.random()) ? 1 : -1) * (Math.random() * 125));
  this.left = this.left + (Math.round(Math.random()) ? 1 : -1) * (Math.random() * 125);
};

Dancer.prototype.lineUp = function() {
  this.setPosition(600, this.left);
};
Dancer.prototype.interact = function (centerTop, centerLeft) {
  var horizontalAdjust = (((centerLeft - this.left) >= 0) ? 1 : -1) * Math.abs(Math.min(50, centerLeft - this.left));
  var verticalAdjust = (((centerTop - this.top) >= 0) ? 1 : -1) * Math.sqrt(Math.pow(50,2) - Math.pow(horizontalAdjust, 2));

  this.setPosition(this.top + verticalAdjust, this.left + horizontalAdjust);
  this.top = this.top + verticalAdjust;
  this.left = this.left + horizontalAdjust;
};