import { Component, Input, ComponentRef } from '@angular/core';
import { Configuration } from '../configuration';
import { BaseComponent } from '../Objects/BaseComponent';
import { BaseComponentComponent } from '../base-component/base-component.component';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent {

  @Input() component: ComponentRef<{}>;
  constructor(private conf: Configuration) { }

  /**
   * Removes a component
   */
  removeComponent() {
    this.conf.clearSettingsPage();
    this.conf.currentPage.removeComponent((<BaseComponentComponent>this.component.instance).componentInstace);
    this.component.destroy();
  }

}
