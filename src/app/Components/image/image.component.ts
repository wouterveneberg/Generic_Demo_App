import { Component, OnInit, ComponentRef } from '@angular/core';
import { BaseComponentComponent } from '../../base-component/base-component.component';
import { BaseComponent } from '../../Objects/BaseComponent';
import { Configuration } from '../../configuration';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements BaseComponentComponent {

  styles = [];
  classes = [];
  componentInstace: BaseComponent;
  componentRef: ComponentRef<{}>;
  
  image: any;
  imageName: string;

  constructor(private conf: Configuration, public sanitizer: DomSanitizer) { }

  setAttributes(comp, compRef) {
    this.componentInstace = comp;
    this.componentRef = compRef;
    this.setDefaultAttributes(comp);

    this.image = comp.image;
    this.imageName = comp.imageName;
    this.styles = comp.styles;
  }

  openSettings() {
    this.conf.openImageSettings(this, this.componentInstace);
  }

  /**
   * Sets the default values of the component, only if variables are undefined
   * @param comp BaseComponent
   */
  private setDefaultAttributes(comp) {
    (comp.image == undefined) && (comp.image = "../../assets/default.png");
    (comp.imageName == undefined) && (comp.imageName = "");
  }
}
