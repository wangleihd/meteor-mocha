describe('spec 1', function() {
  it('should not blame me', function() { });
});
describe('spec 2', function() {
  before(function(done) {
    process.nextTick(function () {
      throw new Error('before hook error');
    });
  });
  it('skipped');
});
