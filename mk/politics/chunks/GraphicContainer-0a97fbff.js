import{I as e}from"./Utils-be23a2c6.js";import{t as r}from"./BaseGraphicContainer-6b173879.js";class i extends r{renderChildren(r){this.attributeView.bindTextures(r.context,!1),this.children.some((e=>e.hasData))&&(super.renderChildren(r),r.drawPhase===e.MAP&&this._renderChildren(r),this.hasHighlight()&&r.drawPhase===e.HIGHLIGHT&&this._renderHighlight(r),this._boundsRenderer&&this._boundsRenderer.doRender(r))}_renderHighlight(e){const{painter:r}=e,i=r.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind()}}export{i};