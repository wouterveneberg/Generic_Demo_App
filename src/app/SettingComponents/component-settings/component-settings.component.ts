import { Component } from '@angular/core';
import { BaseComponentComponent } from '../../base-component/base-component.component';
import { MccColorPickerItem, MccColorPickerService } from 'material-community-components/color-picker';
import { Configuration } from '../../configuration';
import { Page } from '../../Objects/PageObject';

@Component({
  selector: 'app-component-settings',
  templateUrl: './component-settings.component.html',
  styleUrls: ['./component-settings.component.css']
})
export class ComponentSettingsComponent {

  placeholder: string;
  text: string;
  selectedColor: string;
  selectedBackgroundColor: string;
  selectedTextAlign: string;
  selectedWidth: string;
  linkUrl: string;

  selectedLinkOption = "page";
  private pages = Array<Page>();

  componentInstance: any;
  componentObject: any;
  constructor(private conf: Configuration) { 
    conf.getPages().forEach(element => {
      this.pages.push(element);
    }); 
  }

  setAttributes(comp, compObj) {
    this.componentInstance = comp;
    this.componentObject = compObj;

    this.selectedColor = comp.styles['color'];
    this.selectedBackgroundColor = comp.styles['background-color'];
    this.selectedTextAlign = comp.styles['text-align'] ? comp.styles['text-align'] : "center";
    this.selectedWidth = comp.classes.find(value => /^button|width$/.test(value)) ? comp.classes.find(value => /^button|width$/.test(value)) : "button-text-width";
    
    this.text = comp.text;
    this.linkUrl = comp.linkUrl;
    this.placeholder = comp.placeholder;
  }

  /**
   * Changes the placeholder of the component
   * @param placeholder String
   */
  changePlaceholder(placeholder) {
    this.componentInstance.placeholder = placeholder;
    this.componentObject.placeholder = placeholder;
  }
  
  /**
   * Changes the text of the component
   * @param text String
   */
  changeText(text) {
    this.componentInstance.text = text;
    this.componentObject.text = text;
  }

  addWidthStyling(selected) {
    if(this.componentInstance.classes.length > 0) {
      let index = this.componentInstance.classes.indexOf(this.selectedWidth);
      this.componentInstance.classes.splice(index, 1);
      this.componentObject.classes.splice(index, 1);
    }
    this.selectedWidth = selected;
    this.addClass(selected);
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

  /**
   * Adds a class to a component
   * @param className String
   */
  addClass(className) {
    this.componentInstance.classes.push(className);
    this.componentObject.classes.push(className);
  }

  changeLinkOption(linkOption) {
    this.selectedLinkOption = linkOption;
  }

  changeLinkUrl(url) {
    this.componentInstance.linkUrl = url;
    this.componentObject.linkUrl = url;
  }
}
