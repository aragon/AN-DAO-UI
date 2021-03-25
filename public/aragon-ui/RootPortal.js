'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
var React = require('react');
require('./_commonjsHelpers-1b94f6bc.js');
var index = require('./index-46d0e707.js');
require('./extends-023d783e.js');
require('./objectWithoutProperties-c6d3675c.js');
var ReactDOM = require('react-dom');
var Root = require('./Root-8693e46b.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

var RootPortal = function RootPortal(props) {
  return /*#__PURE__*/React__default['default'].createElement(Root.Root, null, function (rootElement) {
    if (!rootElement) {
      throw new Error('<RootPortal> needs to be nested in <Root.Provider>. Have you declared <Main>?');
    }

    return /*#__PURE__*/ReactDOM__default['default'].createPortal(props.children, rootElement);
  });
};

RootPortal.propTypes = {
  children: index.propTypes.node.isRequired
};

exports.default = RootPortal;
//# sourceMappingURL=RootPortal.js.map
