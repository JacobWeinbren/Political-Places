import{s as e,e as s}from"../main.js";import{Z as i,e as a}from"./Utils-a0a3c935.js";const l=e.getLogger("esri.views.2d.engine.webgl");function r(e){return i(e.minDataValue)&&i(e.maxDataValue)&&null!=e.minSize&&null!=e.maxSize?a.SIZE_MINMAX_VALUE:(e.expression&&"view.scale"===e.expression||e.valueExpression&&"$view.scale"===e.valueExpression)&&Array.isArray(e.stops)?a.SIZE_SCALE_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&(Array.isArray(e.stops)||"levels"in e&&e.levels)?a.SIZE_FIELD_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&null!=e.valueUnit?a.SIZE_UNIT_VALUE:(l.error(new s("mapview-bad-type","Found invalid size VisualVariable",e)),a.NONE)}export{r as o};
