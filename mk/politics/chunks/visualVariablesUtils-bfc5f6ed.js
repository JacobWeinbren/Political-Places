import{s as e,e as s}from"../main.js";import{Z as i,c as l}from"./Utils-be23a2c6.js";const a=e.getLogger("esri.views.2d.engine.webgl");function r(e){return i(e.minDataValue)&&i(e.maxDataValue)&&null!=e.minSize&&null!=e.maxSize?l.SIZE_MINMAX_VALUE:(e.expression&&"view.scale"===e.expression||e.valueExpression&&"$view.scale"===e.valueExpression)&&Array.isArray(e.stops)?l.SIZE_SCALE_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&(Array.isArray(e.stops)||"levels"in e&&e.levels)?l.SIZE_FIELD_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&null!=e.valueUnit?l.SIZE_UNIT_VALUE:(a.error(new s("mapview-bad-type","Found invalid size VisualVariable",e)),l.NONE)}export{r as o};