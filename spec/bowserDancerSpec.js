describe('bowserdancer', function() {

  var bowserdancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bowserdancer = new bowserDancer(10, 20, timeBetweenSteps);

  });

  it('should have a jQuery $node object', function() {
    expect(bowserdancer.$node).to.be.an.instanceof(jQuery);
  });



  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(bowserdancer, 'step');
      expect(bowserdancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(bowserdancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(bowserdancer.step.callCount).to.be.equal(2);
    });
  });
});
