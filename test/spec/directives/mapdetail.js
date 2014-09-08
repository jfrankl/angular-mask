'use strict';

describe('Directive: mapDetail', function () {

  // load the directive's module
  beforeEach(module('angularMaskApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<map-detail></map-detail>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the mapDetail directive');
  }));
});
