import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Page } from '../Objects/PageObject';
import { BaseComponent } from '../Objects/BaseComponent';
import { TextboxComponent } from '../Components/textbox/textbox.component';
import { BaseComponentComponent } from '../base-component/base-component.component';
import { Configuration } from '../configuration';
import { Menu } from '../Objects/MenuObject';
import { MatTabChangeEvent } from '@angular/material';
import { ButtonComponent } from '../Components/button/button.component';
import { SliderComponent } from '../Components/slider/slider.component';
import { ImageComponent } from '../Components/image/image.component';
import { HeaderComponent } from '../Components/header/header.component';
import { DropdownComponent } from '../Components/dropdown/dropdown.component';
import { CardComponent } from '../Components/card/card.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {
  
  pageName : string;
  components = [];
  pages = [];
  menu: Menu;
  styles = {};

  public typesOfComponents = {
    'TextboxComponent': TextboxComponent,
    'ButtonComponent' : ButtonComponent,
    'SliderComponent' : SliderComponent,
    'ImageComponent' : ImageComponent,
    'HeaderComponent' : HeaderComponent,
    'DropdownComponent' : DropdownComponent,
    'CardComponent' : CardComponent
  }

  @ViewChild('container', {read: ViewContainerRef}) parent: ViewContainerRef;

  constructor(public viewContainerRef: ViewContainerRef, private conf: Configuration, public cfr: ComponentFactoryResolver) { 
    this.conf.getMenu().getMenuItems().forEach(element => {
      this.pages.push(element.name);
    });

    this.menu = this.conf.getMenu();
  }

  /**
   * Set the attributes of the PageComponent
   * @param page Page
   */
  setAttributes(page: Page) {
    this.pageName = page.getPageName();
    this.styles = page.getStyles();
    this.components = page.getComponents();
  }

  /**
   * Adds a component to the page
   * @param component Instance of Basecomponent
   */
  addComponent(component: BaseComponent) {
    let componentRef = this.parent.createComponent(this.cfr.resolveComponentFactory(this.typesOfComponents[component.component]));
    (<BaseComponentComponent>componentRef.instance).setAttributes(component, componentRef);
  }
}
