import { Component, OnInit, ComponentRef } from '@angular/core';
import { BaseComponent } from '../Objects/BaseComponent';

@Component({
  selector: 'app-base-component',
  templateUrl: './base-component.component.html',
  styleUrls: ['./base-component.component.css']
})
export class BaseComponentComponent {

  styles = [];
  classes = [];

  componentInstace: BaseComponent;
  
  constructor() { 
    
  }

  setAttributes(comp: BaseComponent, compRef: ComponentRef<{}>) {
    
  }
}
