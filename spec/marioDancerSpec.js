describe('mariodancer', function() {

  var mariodancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    mariodancer = new marioDancer(10, 20, timeBetweenSteps);

  });

  it('should have a jQuery $node object', function() {
    expect(mariodancer.$node).to.be.an.instanceof(jQuery);
  });



  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(mariodancer, 'step');
      expect(mariodancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(mariodancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(mariodancer.step.callCount).to.be.equal(2);
    });
  });
});
