import{Z as e,a0 as r}from"../main.js";import{I as t}from"./Utils-c08a2f63.js";import{t as i}from"./BaseGraphicContainer-57b4dfa8.js";import{_ as s}from"./enums-23145ba2.js";let n=class extends i{renderChildren(e){if(e.drawPhase!==t.HIGHLIGHT)return;if(this.attributeView.bindTextures(e.context),!this.children.some((e=>e.hasData)))return;super.renderChildren(e);const{painter:r}=e,i=r.effects.highlight;i.bind(e),e.context.setColorMask(!0,!0,!0,!0),e.context.clear(s.COLOR_BUFFER_BIT),this._renderChildren(e,i.defines.concat(["highlightAll"])),i.draw(e),i.unbind()}};n=e([r("esri.views.2d.layers.support.HighlightGraphicContainer")],n);const a=n;export{a as n};