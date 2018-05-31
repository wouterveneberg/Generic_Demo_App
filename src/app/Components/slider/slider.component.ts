import { Configuration } from '../../configuration';
import { Component, OnInit, ComponentRef } from '@angular/core';
import { BaseComponentComponent } from '../../base-component/base-component.component';
import { BaseComponent } from '../../Objects/BaseComponent';
import 'hammerjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements BaseComponentComponent {

  styles: any[];
  classes: any[];

  min: number;
  max: number;
  steps: number;
  value: number;

  componentInstace: BaseComponent;
  componentRef: ComponentRef<{}>;
  
  constructor(private conf: Configuration) { }

  /**
   * Sets the attributes of the slider or default.
   * @param comp BaseComponent
   */
  setAttributes(comp, compRef) {
    this.componentInstace = comp;
    this.componentRef = compRef;
    this.setDefaultAttributes(comp);

    this.min = comp.min;
    this.max = comp.max;
    this.value = comp.value;
    this.steps = comp.steps;
  }

  openSettings() {
    this.conf.openSliderSettings(this, this.componentInstace);
  }

  /**
   * Sets the default values of the component, only if variables are undefined
   * @param comp BaseComponent
   */
  private setDefaultAttributes(comp) {
    (comp.min == undefined) && (comp.min = 0);
    (comp.max == undefined) && (comp.max = 50);
    (comp.steps == undefined) && (comp.steps = 5);
    (comp.value == undefined) && (comp.value = 25);
  }
}
