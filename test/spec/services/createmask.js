'use strict';

describe('Service: Createmask', function () {

  // load the service's module
  beforeEach(module('angularMaskApp'));

  // instantiate service
  var Createmask;
  beforeEach(inject(function (_Createmask_) {
    Createmask = _Createmask_;
  }));

  it('should do something', function () {
    expect(!!Createmask).toBe(true);
  });

});
