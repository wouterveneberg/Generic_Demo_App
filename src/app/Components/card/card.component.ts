import { Component, ComponentRef } from '@angular/core';
import { BaseComponentComponent } from '../../base-component/base-component.component';
import { BaseComponent } from '../../Objects/BaseComponent';
import { Configuration } from '../../configuration';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements BaseComponentComponent {

  styles: any[];
  classes: any[];
  componentInstace: BaseComponent;
  componentRef: ComponentRef<{}>;
  
  title: string;
  subtitle: string;
  content: string;
  avatar: string;
  avatarName: string;

  constructor(private conf: Configuration, public sanitizer: DomSanitizer) { }

  setAttributes(comp, compRef) {
    this.componentInstace = comp;
    this.componentRef = compRef;
    this.setDefaultAttributes(comp);

    this.title = comp.title;
    this.subtitle = comp.subtitle;
    this.content = comp.content;
    this.avatar = comp.avatar;
    this.avatarName = comp.avatarName;
  }

  openSettings() {
    this.conf.openCardSettings(this, this.componentInstace);
  }

  /**
   * Sets the default values of the component, only if variables are undefined
   * @param comp BaseComponent
   */
  private setDefaultAttributes(comp) {
    (comp.title == undefined) && (comp.title = "Voornaam Achternaam");
    (comp.subtitle == undefined) && (comp.subtitle = "Medewerker");
    (comp.content == undefined) && (comp.content = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.");
    (comp.avatar == undefined) && (comp.avatar = "../../assets/default_avatar.png");
    (comp.avatarName == undefined) && (comp.avatarName = "");
  }
}
