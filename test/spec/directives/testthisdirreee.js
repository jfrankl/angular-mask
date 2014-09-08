'use strict';

describe('Directive: testthisdirreee', function () {

  // load the directive's module
  beforeEach(module('angularMaskApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<testthisdirreee></testthisdirreee>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the testthisdirreee directive');
  }));
});
