'use strict';

describe('Service: importData', function () {

  // load the service's module
  beforeEach(module('angularMaskApp'));

  // instantiate service
  var importData;
  beforeEach(inject(function (_importData_) {
    importData = _importData_;
  }));

  it('should do something', function () {
    expect(!!importData).toBe(true);
  });

});
