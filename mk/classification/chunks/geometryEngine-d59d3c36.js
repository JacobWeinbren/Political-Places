import{G as e}from"./geometryEngineBase-7cafebed.js";import{hydratedAdapter as n}from"./hydrated-1cba80e6.js";import"../main.js";function r(e){return Array.isArray(e)?e[0].spatialReference:e&&e.spatialReference}function t(n){return e.extendedSpatialReferenceInfo(n)}function i(t,i){return e.clip(n,r(t),t,i)}function a(t,i){return e.cut(n,r(t),t,i)}function o(t,i){return e.contains(n,r(t),t,i)}function s(t,i){return e.crosses(n,r(t),t,i)}function u(t,i,a){return e.distance(n,r(t),t,i,a)}function c(t,i){return e.equals(n,r(t),t,i)}function f(t,i){return e.intersects(n,r(t),t,i)}function l(t,i){return e.touches(n,r(t),t,i)}function p(t,i){return e.within(n,r(t),t,i)}function d(t,i){return e.disjoint(n,r(t),t,i)}function g(t,i){return e.overlaps(n,r(t),t,i)}function m(t,i,a){return e.relate(n,r(t),t,i,a)}function x(t){return e.isSimple(n,r(t),t)}function h(t){return e.simplify(n,r(t),t)}function w(t,i=!1){return e.convexHull(n,r(t),t,i)}function y(t,i){return e.difference(n,r(t),t,i)}function A(t,i){return e.symmetricDifference(n,r(t),t,i)}function E(t,i){return e.intersect(n,r(t),t,i)}function R(t,i=null){return e.union(n,r(t),t,i)}function I(t,i,a,o,s,u){return e.offset(n,r(t),t,i,a,o,s,u)}function v(t,i,a,o=!1){return e.buffer(n,r(t),t,i,a,o)}function S(t,i,a,o,s,u){return e.geodesicBuffer(n,r(t),t,i,a,o,s,u)}function V(t,i,a=!0){return e.nearestCoordinate(n,r(t),t,i,a)}function j(t,i){return e.nearestVertex(n,r(t),t,i)}function b(t,i,a,o){return e.nearestVertices(n,r(t),t,i,a,o)}function z(e){return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e?e.extent.center:null}function D(n,r,t){var i;if(null==n)throw new Error("Illegal Argument Exception");const a=n.spatialReference;if(null==(t=null!=(i=t)?i:z(n)))throw new Error("Illegal Argument Exception");const o=n.constructor.fromJSON(e.rotate(n,r,t));return o.spatialReference=a,o}function H(n,r){var t;if(null==n)throw new Error("Illegal Argument Exception");const i=n.spatialReference;if(null==(r=null!=(t=r)?t:z(n)))throw new Error("Illegal Argument Exception");const a=n.constructor.fromJSON(e.flipHorizontal(n,r));return a.spatialReference=i,a}function L(n,r){var t;if(null==n)throw new Error("Illegal Argument Exception");const i=n.spatialReference;if(null==(r=null!=(t=r)?t:z(n)))throw new Error("Illegal Argument Exception");const a=n.constructor.fromJSON(e.flipVertical(n,r));return a.spatialReference=i,a}function B(t,i,a,o){return e.generalize(n,r(t),t,i,a,o)}function J(t,i,a){return e.densify(n,r(t),t,i,a)}function N(t,i,a,o=0){return e.geodesicDensify(n,r(t),t,i,a,o)}function O(t,i){return e.planarArea(n,r(t),t,i)}function q(t,i){return e.planarLength(n,r(t),t,i)}function C(t,i,a){return e.geodesicArea(n,r(t),t,i,a)}function G(t,i,a){return e.geodesicLength(n,r(t),t,i,a)}export{v as buffer,i as clip,o as contains,w as convexHull,s as crosses,a as cut,J as densify,y as difference,d as disjoint,u as distance,c as equals,t as extendedSpatialReferenceInfo,H as flipHorizontal,L as flipVertical,B as generalize,C as geodesicArea,S as geodesicBuffer,N as geodesicDensify,G as geodesicLength,E as intersect,f as intersects,x as isSimple,V as nearestCoordinate,j as nearestVertex,b as nearestVertices,I as offset,g as overlaps,O as planarArea,q as planarLength,m as relate,D as rotate,h as simplify,A as symmetricDifference,l as touches,R as union,p as within};
