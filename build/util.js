'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getViewPort = exports.getViewPort = function getViewPort(context) {
  var viewport = 1600;
  if (context.tablet) viewport = 768; // iPad portrait width
  if (context.phone) viewport = 375; // iPhone 6 width
  if (typeof window !== 'undefined' && window.innerWidth) {
    viewport = window.innerWidth;
  }
  return viewport;
};

var defaultBreakpoints = exports.defaultBreakpoints = [768, 992, 1200];

var defaultContainerWidths = exports.defaultContainerWidths = [750, 970, 1170];