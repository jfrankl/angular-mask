'use strict';

describe('Service: Mapzoomdetail', function () {

  // load the service's module
  beforeEach(module('angularMaskApp'));

  // instantiate service
  var Mapzoomdetail;
  beforeEach(inject(function (_Mapzoomdetail_) {
    Mapzoomdetail = _Mapzoomdetail_;
  }));

  it('should do something', function () {
    expect(!!Mapzoomdetail).toBe(true);
  });

});
