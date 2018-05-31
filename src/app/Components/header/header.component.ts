import { Component, ComponentRef } from '@angular/core';
import { BaseComponentComponent } from '../../base-component/base-component.component';
import { BaseComponent } from '../../Objects/BaseComponent';
import { Configuration } from '../../configuration';
import { MccColorPickerItem, MccColorPickerService } from 'material-community-components/color-picker';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements BaseComponentComponent {

  styles: any[];
  classes = [];
  componentInstace: BaseComponent;
  componentRef: ComponentRef<{}>;

  size: string;
  text: string;
  
  constructor(private conf: Configuration) { }

  setAttributes(comp, compRef) {
    this.componentInstace = comp;
    this.componentRef = compRef;
    this.size = comp.size ? comp.size : "H1";
    this.text = comp.text ? comp.text : this.size;
    this.styles = comp.styles;
  }
  

  openSettings() {
    this.conf.openHeaderSettings(this, this.componentInstace);
  }

  /**
   * Sets the default values of the component, only if variables are undefined
   * @param comp BaseComponent
   */
  private setDefaultAttributes(comp) {
    (comp.size == undefined) && (comp.size = "H1");
    (comp.text == undefined) && (comp.text = comp.size);
  }
}
