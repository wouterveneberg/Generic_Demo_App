import { Component } from '@angular/core';
import { DropdownComponent } from '../../Components/dropdown/dropdown.component';

@Component({
  selector: 'app-dropdown-settings',
  templateUrl: './dropdown-settings.component.html',
  styleUrls: ['./dropdown-settings.component.css']
})
export class DropdownSettingsComponent {

  placeholder: string;
  items: string[];

  dropdownComp: DropdownComponent;
  compObj: any;

  constructor() { }

  /**
   * Set attributes of dropdown
   * @param comp    DropdownComponent
   * @param compObj BaseComponent
   */
  setAttributes(comp, compObj) {
    this.dropdownComp = comp;
    this.compObj = compObj;

    this.items = comp.items;
    this.placeholder = comp.placeholder;
  }

  /**
   * Changes the placeholder of dropdown
   * @param newPlaceholder String
   */
  changePlaceholder(newPlaceholder) {
    this.dropdownComp.placeholder = newPlaceholder;
    this.compObj.placeholder = newPlaceholder;
  }

  /**
   * Makes an array of all options and changes them in the dropdown
   * @param newItems String
   */
  changeItems(newItems) {
    //Split all items by a comma
    var items = newItems.split(',');
    //Remove all spaces or linebreaks
    items = items.map(item => item.trim());
    this.dropdownComp.items = items;
    this.compObj.items = items;
  }

}
