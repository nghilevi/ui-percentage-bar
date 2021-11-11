/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { GraphElem } from "./utils/model";
export namespace Components {
    interface PercentageBar {
        "data": GraphElem[];
    }
}
declare global {
    interface HTMLPercentageBarElement extends Components.PercentageBar, HTMLStencilElement {
    }
    var HTMLPercentageBarElement: {
        prototype: HTMLPercentageBarElement;
        new (): HTMLPercentageBarElement;
    };
    interface HTMLElementTagNameMap {
        "percentage-bar": HTMLPercentageBarElement;
    }
}
declare namespace LocalJSX {
    interface PercentageBar {
        "data"?: GraphElem[];
    }
    interface IntrinsicElements {
        "percentage-bar": PercentageBar;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "percentage-bar": LocalJSX.PercentageBar & JSXBase.HTMLAttributes<HTMLPercentageBarElement>;
        }
    }
}
