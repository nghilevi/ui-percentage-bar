import { r as registerInstance, h } from './index-51b8202a.js';

const uiPercentageBarCss = ".hb-space-top-l{margin-top:16px}.hb-space-top-s{margin-top:8px}.hb-space-bottom-s{margin-bottom:8px}.hb-space-left-s{margin-left:8px}.horiz-bar{height:2rem;display:flex}.horiz-bar__element{margin-right:1px;min-width:1px}.horiz-bar-legend{display:flex;flex-wrap:wrap;flex-direction:row}.horiz-bar-legend__element{width:100%;display:flex}.horiz-bar-legend__circle{height:16px;width:16px;border-radius:50%}@media only screen and (min-width: 768px){.horiz-bar-legend__element{width:50%}.horiz-bar-legend__element b{color:black;font-weight:700;font-size:medium}}";

let MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillRender() {
    if (this.data && this.data.length > 0) { // display only when there is data
      this.graphData = this.data.map((graphElem) => {
        return Object.assign(Object.assign({}, graphElem), { graphStyle: {
            'flex-grow': graphElem.percentage,
            'background-color': graphElem.color
          }, legendStyle: {
            'background-color': graphElem.color
          } });
      });
    }
  }
  createTitle(element) {
    return element.label + ' - ' + element.percentage + ' %';
  }
  render() {
    return ([
      h("div", { class: "horiz-bar" }, this.graphData.map((element) => {
        return h("div", { class: "horiz-bar__element", title: this.createTitle(element), style: element.graphStyle });
      })),
      h("div", { class: "horiz-bar-legend hb-space-top-l" }, this.graphData.map((element) => {
        return h("div", { class: "horiz-bar-legend__element hb-space-top-s hb-space-bottom-s" }, h("div", { class: "horiz-bar-legend__circle", style: element.legendStyle }), h("div", { class: "hb-space-left-s" }, h("div", null, element.label, ": ", h("b", null, element.value))));
      }))
    ]); // end of return
  } // end of render
};
MyComponent.style = uiPercentageBarCss;

export { MyComponent as ui_percentage_bar };
