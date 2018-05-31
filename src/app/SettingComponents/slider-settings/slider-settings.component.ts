import { Component } from '@angular/core';
import { BaseComponent } from '../../Objects/BaseComponent';
import { SliderComponent } from '../../components/slider/slider.component';

@Component({
  selector: 'app-slider-settings',
  templateUrl: './slider-settings.component.html',
  styleUrls: ['./slider-settings.component.css']
})
export class SliderSettingsComponent {

  max: number;
  min: number;
  steps: number;
  value: number; 

  sliderComp: SliderComponent;
  compObj: any;
  
  constructor() { }

  /**
   * Set attributes of slider
   * @param comp    SliderComponent
   * @param compObj BaseComponent
   */
  setAttributes(comp, compObj) {
    this.sliderComp = comp;
    this.compObj = compObj;

    this.max = comp.max;
    this.min = comp.min;
    this.value = comp.value;
    this.steps = comp.steps;
  }

  /**
   * Change value of min
   * @param newMin number
   */
  changeMin(newMin) {
    this.sliderComp.min = +newMin;
    this.compObj.min = +newMin;
  }

  /**
   * Change value of max
   * @param newMax number
   */
  changeMax(newMax) {
    this.sliderComp.max = +newMax;
    this.compObj.max = +newMax;
  }

  /**
   * change value of steps
   * @param newSteps number
   */
  changeSteps(newSteps) {
    this.sliderComp.steps = +newSteps;
    this.compObj.steps = +newSteps;
  }

  /**
   * Change value of value
   * @param newValue number
   */
  changeValue(newValue) {
    this.sliderComp.value = +newValue;
    this.compObj.value = +newValue;
  }
}
