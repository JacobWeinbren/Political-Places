import{G as e}from"./geometryEngineBase-0359660e.js";import{hydratedAdapter as n}from"./hydrated-78c545b7.js";import"../main.js";function r(e){return Array.isArray(e)?e[0].spatialReference:e&&e.spatialReference}function t(n){return e.extendedSpatialReferenceInfo(n)}function i(t,i){return e.clip(n,r(t),t,i)}function o(t,i){return e.cut(n,r(t),t,i)}function a(t,i){return e.contains(n,r(t),t,i)}function s(t,i){return e.crosses(n,r(t),t,i)}function u(t,i,o){return e.distance(n,r(t),t,i,o)}function c(t,i){return e.equals(n,r(t),t,i)}function f(t,i){return e.intersects(n,r(t),t,i)}function l(t,i){return e.touches(n,r(t),t,i)}function p(t,i){return e.within(n,r(t),t,i)}function g(t,i){return e.disjoint(n,r(t),t,i)}function d(t,i){return e.overlaps(n,r(t),t,i)}function m(t,i,o){return e.relate(n,r(t),t,i,o)}function x(t){return e.isSimple(n,r(t),t)}function h(t){return e.simplify(n,r(t),t)}function w(t,i=!1){return e.convexHull(n,r(t),t,i)}function y(t,i){return e.difference(n,r(t),t,i)}function A(t,i){return e.symmetricDifference(n,r(t),t,i)}function E(t,i){return e.intersect(n,r(t),t,i)}function R(t,i=null){return e.union(n,r(t),t,i)}function I(t,i,o,a,s,u){return e.offset(n,r(t),t,i,o,a,s,u)}function v(t,i,o,a=!1){return e.buffer(n,r(t),t,i,o,a)}function S(t,i,o,a,s,u){return e.geodesicBuffer(n,r(t),t,i,o,a,s,u)}function V(t,i,o=!0){return e.nearestCoordinate(n,r(t),t,i,o)}function j(t,i){return e.nearestVertex(n,r(t),t,i)}function z(t,i,o,a){return e.nearestVertices(n,r(t),t,i,o,a)}function D(e){return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e?e.extent.center:null}function H(n,r,t){var i;if(null==n)throw new Error("Illegal Argument Exception");const o=n.spatialReference;if(null==(t=null!=(i=t)?i:D(n)))throw new Error("Illegal Argument Exception");const a=n.constructor.fromJSON(e.rotate(n,r,t));return a.spatialReference=o,a}function L(n,r){var t;if(null==n)throw new Error("Illegal Argument Exception");const i=n.spatialReference;if(null==(r=null!=(t=r)?t:D(n)))throw new Error("Illegal Argument Exception");const o=n.constructor.fromJSON(e.flipHorizontal(n,r));return o.spatialReference=i,o}function b(n,r){var t;if(null==n)throw new Error("Illegal Argument Exception");const i=n.spatialReference;if(null==(r=null!=(t=r)?t:D(n)))throw new Error("Illegal Argument Exception");const o=n.constructor.fromJSON(e.flipVertical(n,r));return o.spatialReference=i,o}function B(t,i,o,a){return e.generalize(n,r(t),t,i,o,a)}function J(t,i,o){return e.densify(n,r(t),t,i,o)}function N(t,i,o,a=0){return e.geodesicDensify(n,r(t),t,i,o,a)}function O(t,i){return e.planarArea(n,r(t),t,i)}function q(t,i){return e.planarLength(n,r(t),t,i)}function C(t,i,o){return e.geodesicArea(n,r(t),t,i,o)}function G(t,i,o){return e.geodesicLength(n,r(t),t,i,o)}export{v as buffer,i as clip,a as contains,w as convexHull,s as crosses,o as cut,J as densify,y as difference,g as disjoint,u as distance,c as equals,t as extendedSpatialReferenceInfo,L as flipHorizontal,b as flipVertical,B as generalize,C as geodesicArea,S as geodesicBuffer,N as geodesicDensify,G as geodesicLength,E as intersect,f as intersects,x as isSimple,V as nearestCoordinate,j as nearestVertex,z as nearestVertices,I as offset,d as overlaps,O as planarArea,q as planarLength,m as relate,H as rotate,h as simplify,A as symmetricDifference,l as touches,R as union,p as within};
