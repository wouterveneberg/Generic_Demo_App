import { Component, ComponentRef } from '@angular/core';
import { BaseComponentComponent } from '../../base-component/base-component.component';
import { BaseComponent } from '../../Objects/BaseComponent';
import { Configuration } from '../../configuration';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements BaseComponentComponent {

  styles: any[];
  classes: any[];
  componentInstace: BaseComponent;
  componentRef: ComponentRef<{}>;

  items: string[];
  placeholder: string;
  
  constructor(private conf: Configuration) { }

  setAttributes(comp, compRef) {
    this.componentInstace = comp;
    this.componentRef = compRef;
    this.setDefaultAttributes(comp);

    this.items = comp.items
    this.placeholder = comp.placeholder

    this.styles = comp.styles;
  }

  openSettings() {
    this.conf.openDropdownSettings(this, this.componentInstace);
  }

  /**
   * Sets the default values of the component, only if variables are undefined
   * @param comp BaseComponent
   */
  private setDefaultAttributes(comp) {
    (comp.placeholder == undefined) && (comp.placeholder = "Kies een optie");
    (comp.items == undefined) && (comp.items = ["Optie 1", "Optie 2", "Optie 3"]);
  }
}
