describe('yoshidancer', function() {

  var yoshidancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    yoshidancer = new yoshiDancer(10, 20, timeBetweenSteps);

  });

  it('should have a jQuery $node object', function() {
    expect(yoshidancer.$node).to.be.an.instanceof(jQuery);
  });



  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(yoshidancer, 'step');
      expect(yoshidancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(yoshidancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(yoshidancer.step.callCount).to.be.equal(2);
    });
  });
});
