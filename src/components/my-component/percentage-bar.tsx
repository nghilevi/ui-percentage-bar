import { Component, Prop, h, Host } from '@stencil/core';
import { GraphElem } from '../../utils/model';

@Component({
  tag: 'percentage-bar',
  styleUrl: 'percentage-bar.css',
  shadow: true
})
export class MyComponent {

  private graphData
  @Prop() data: GraphElem[];
  
  componentWillRender(){
    if (this.data && this.data.length > 0) { // display only when there is data
      this.graphData = this.data.map((graphElem) => {
          return {
              ...graphElem,
              graphStyle: {
                  'flex-grow': graphElem.percentage,
                  'background-color': graphElem.color,
              },
              legendStyle: {
                  'background-color': graphElem.color,
              }
          }
      })
    }
  }

  render() {
    return (
      [
        <div class="horiz-bar">
          {
            this.graphData.map((element) => {
              return <div
                      class="horiz-bar__element"
                      title="{ element.label } - { element.percentage }%"
                      style={element.graphStyle}
                    >{element.label}</div>
            })
          }
        </div>,

        <div class="horiz-bar-legend ncc-space-top-l">
          {
            
            this.graphData.map((element) => {
              return <div
                        class="horiz-bar-legend__element ncc-space-top-s ncc-space-bottom-s"
                      >
                        <div
                            class="horiz-bar-legend__circle"
                            style={element.legendStyle}
                        ></div>

                        <div class="ncc-space-left-s">
                          <div>{element.label }: <b>{ element.value }</b></div>
                        </div>
                      </div>
            
            })
          
          }
        </div>

      ]
    
    ) // end of return
  
  } // end of render

}
