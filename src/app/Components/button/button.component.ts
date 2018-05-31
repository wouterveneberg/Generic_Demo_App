import { Component, OnInit, ComponentRef } from '@angular/core';
import { BaseComponentComponent } from '../../base-component/base-component.component';
import { BaseComponent } from '../../Objects/BaseComponent';
import { Configuration } from '../../configuration';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements BaseComponentComponent {

  styles: any[];
  classes = [];
  text: string;

  linkUrl: string
  
  componentInstace: BaseComponent;
  componentRef: ComponentRef<{}>;

  constructor(private conf: Configuration) { 
  }

  /**
   * Set the attributes of the buttom or default
   * @param comp ButtonObject
   */
  setAttributes(comp, compRef) {
    this.componentInstace = comp;
    this.componentRef = compRef;
    this.setDefaultAttributes(comp);

    this.text = comp.text;
    this.styles = comp.styles;
    this.classes = this.classes.concat(comp.classes);
    this.linkUrl = comp.linkUrl;
  }

  /**
   * Opens the settingscomponent with current button
   */
  openSettings() {
    this.conf.openComponentSettings(this, this.componentInstace);
  }

  /**
   * Sets the default values of the component, only if variables are undefined
   * @param comp BaseComponent
   */
  private setDefaultAttributes(comp) {
    (comp.text == undefined) && (comp.text = "Knop");
    (comp.linkUrl == undefined) && (comp.linkUrl = "");
  }

}
