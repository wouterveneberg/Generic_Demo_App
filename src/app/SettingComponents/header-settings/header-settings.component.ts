import { Component } from '@angular/core';

@Component({
  selector: 'app-header-settings',
  templateUrl: './header-settings.component.html',
  styleUrls: ['./header-settings.component.css']
})
export class HeaderSettingsComponent {

  componentInstance: any;
  componentObject: any;
  selectedSize: string;

  size: string;
  text: string;

  selectedFontColor: string;

  constructor() { }

  /**
   * Set attributes of header settings
   * @param comp    HeaderComponent
   * @param compObj BaseComponent
   */
  setAttributes(comp, compObj) {
    this.componentInstance = comp;
    this.componentObject = compObj;

    this.size = comp.size;
    this.text = comp.text;
    this.selectedFontColor = comp.styles['color'];

    this.selectedSize = this.size;
  }

  changeSize(newSize) {
    this.componentInstance.size = newSize;
    this.componentObject.size = newSize;
  }

  changeText(newText) {
    this.componentInstance.text = newText;
    this.componentObject.text = newText;
  }

  /**
   * Adds a css-styling element to a component
   * @param key   String
   * @param value String
   */
  addStyling(key, value) {
    this.componentInstance.styles[key] = value;
    this.componentObject.styles[key] = value;
  }

}
