import { Component, OnInit, ComponentRef } from '@angular/core';
import { BaseComponentComponent } from '../../base-component/base-component.component';
import { BaseComponent } from '../../Objects/BaseComponent';
import { Configuration } from '../../configuration';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements BaseComponentComponent {

  placeholder: string;
  text = "";
  styles = [];
  classes = [];

  componentInstace: BaseComponent;
  componentRef: ComponentRef<{}>;

  constructor(private conf: Configuration) { 
  }

  /**
   * Sets the attributes of the component or default
   * @param comp BaseComponent
   */
  setAttributes(comp, compRef) {
    this.componentInstace = comp;
    this.componentRef = compRef;
    this.setDefaultAttributes(comp);

    this.placeholder = comp.placeholder;
    this.text = comp.text;
    this.styles = comp.styles;
  }

  /**
   * Opens the settings page with current textbox
   */
  openSettings() {
    this.conf.openComponentSettings(this, this.componentInstace);
  }

  /**
   * Sets the default values of the component, only if variables are undefined
   * @param comp BaseComponent
   */
  private setDefaultAttributes(comp) {
    (comp.text == undefined) && (comp.text = "Tekstvak");
    (comp.placeholder == undefined) && (comp.placeholder = "Placeholder");
  }

}
