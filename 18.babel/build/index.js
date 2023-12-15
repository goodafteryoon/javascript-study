"use strict";

require("core-js/modules/es.symbol.to-primitive.js");
require("core-js/modules/es.date.to-primitive.js");
require("core-js/modules/es.symbol.js");
require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.number.constructor.js");
require("core-js/modules/es.object.define-property.js");
require("core-js/modules/es.symbol.iterator.js");
require("core-js/modules/es.array.iterator.js");
require("core-js/modules/es.string.iterator.js");
require("core-js/modules/web.dom-collections.iterator.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
require("core-js/modules/es.object.to-string.js");
require("core-js/modules/es.promise.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Cat = /*#__PURE__*/_createClass(function Cat() {
  _classCallCheck(this, Cat);
});
var hello = function hello() {};
var yes = Promise.resolve(1);

/**
 * Babel
 * 프로젝트 빌드 후 배포 코드에 예전 자바스크립트 버전으로 변환해주는 기능
 * 리액트나 노드 등 최신 라이브러리와 프레임워크들은 이미 Babel과 같은 툴들이 내장되어 있음
 * 그래서 바벨에 신경쓰지 않고 최신 JS로 리액트 개발을 할 수 있었던 것
 *
 * TS 컴파일러도 TS코드를 JS로 변환해줄 뿐만아니라 최신 JS를 예전 JS로도 변환해줌
 * 프레임워크를 사용하면 기본적으로 내장되어 있음
 * 1버전까지 지원하려고 할 필요없이 내가 배포하고자하는 사용자의 주된 버전까지만 확인해서 지원하면 됨
 * babel 역시 core, cli, preset-env 등을 dev dependency에 셋업함
 */
