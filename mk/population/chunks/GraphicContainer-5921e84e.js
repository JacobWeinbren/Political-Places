import{I as e}from"./Utils-a13f2b84.js";import{t as r}from"./BaseGraphicContainer-feb4a671.js";var i=class extends r{renderChildren(r){this.attributeView.bindTextures(r.context),this.children.some((e=>e.hasData))&&(super.renderChildren(r),r.drawPhase===e.MAP&&this._renderChildren(r),r.drawPhase===e.HIGHLIGHT&&this._renderHighlight(r))}_renderHighlight(e){const{painter:r}=e,i=r.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind()}};export{i};
