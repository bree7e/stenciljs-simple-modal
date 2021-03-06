/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface TyapkModal {
    /**
    * Header
    */
    'header': string;
    /**
    * show modal
    */
    'show': () => void;
  }
  interface TyapkModalAttributes extends StencilHTMLAttributes {
    /**
    * Header
    */
    'header'?: string;
    /**
    * Close event
    */
    'onClose'?: (event: CustomEvent) => void;
  }
}

declare global {
  interface StencilElementInterfaces {
    'TyapkModal': Components.TyapkModal;
  }

  interface StencilIntrinsicElements {
    'tyapk-modal': Components.TyapkModalAttributes;
  }


  interface HTMLTyapkModalElement extends Components.TyapkModal, HTMLStencilElement {}
  var HTMLTyapkModalElement: {
    prototype: HTMLTyapkModalElement;
    new (): HTMLTyapkModalElement;
  };

  interface HTMLElementTagNameMap {
    'tyapk-modal': HTMLTyapkModalElement
  }

  interface ElementTagNameMap {
    'tyapk-modal': HTMLTyapkModalElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
