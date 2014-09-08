'use strict';

describe('Service: makeMask', function () {

  // load the service's module
  beforeEach(module('angularMaskApp'));

  // instantiate service
  var makeMask;
  beforeEach(inject(function (_makeMask_) {
    makeMask = _makeMask_;
  }));

  it('should do something', function () {
    expect(!!makeMask).toBe(true);
  });

});
