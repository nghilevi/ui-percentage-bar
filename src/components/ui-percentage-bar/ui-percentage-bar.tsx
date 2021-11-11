import { Component, Prop, h } from '@stencil/core';
import { GraphElem } from '../../global/model';

@Component({
  tag: 'ui-percentage-bar',
  styleUrl: 'ui-percentage-bar.scss',
  shadow: true
})
export class UiPercentageBar {

  private graphData
  @Prop() data: GraphElem[];
  
  componentWillRender(){
    if (this.data && this.data.length > 0) { // display only when there is data
      this.graphData = this.data.map((graphElem) => {
          return {
              ...graphElem,
              graphStyle: {
                  'flex-grow': graphElem.percentage,
                  'background-color': graphElem.color
              },
              legendStyle: {
                  'background-color': graphElem.color
              }
          }
      })
    }
  }

  createTitle(element){
    return element.label+' - '+ element.percentage+' %'
  }

  render() {
    return (
      [
        <div class="horiz-bar">
          {
            this.graphData.map((element) => {
              return <div
                      class="horiz-bar__element"
                      title={this.createTitle(element)}
                      style={element.graphStyle}
                    ></div>
            })
          }
        </div>,

        <div class="horiz-bar-legend hb-space-top-l">
          {
            
            this.graphData.map((element) => {
              return <div
                        class="horiz-bar-legend__element hb-space-top-s hb-space-bottom-s"
                      >
                        <div
                            class="horiz-bar-legend__circle"
                            style={element.legendStyle}
                        ></div>

                        <div class="hb-space-left-s">
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
