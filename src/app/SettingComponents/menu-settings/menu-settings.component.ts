import { Component, OnInit } from '@angular/core';
import { Configuration } from '../../configuration';
import { Page } from '../../Objects/PageObject';

@Component({
  selector: 'app-menu-settings',
  templateUrl: './menu-settings.component.html',
  styleUrls: ['./menu-settings.component.css']
})
export class MenuSettingsComponent {

  private linkName: string;
  private tabId: string;
  private pages = Array<Page>();
  private selected: string;

  private disabledLeftButton = false;
  private disabledRightButton = false;

  constructor(private conf: Configuration) { 
    conf.getPages().forEach(element => {
      this.pages.push(element);
    }); 
  }

  /**
   * Sets a link between menu-item and page
   * @param pageId String
   */
  setPageLink(pageId) {
    this.conf.setPageLink(this.tabId, pageId);
  }

  /**
   * Changes the text of a menu-item
   * @param oldName String
   * @param newName String
   */
  changeName(oldName, newName) {
    this.conf.setNameOfMenu(oldName, newName);
    this.linkName = newName;
  }

  /**
   * Sets the attributes of this component
   * @param linkName  String
   * @param tabId     String
   */
  setAttributes(linkName, tabId) {
    this.tabId = tabId;
    this.linkName = linkName;
    this.selected = this.conf.getMenu().getMenuItems().find(item => item.id == tabId).linkId;
    this.getIndexOfItem() == 0 ? this.disabledLeftButton = true : this.disabledLeftButton = false;
    this.getIndexOfItem() == (this.conf.getMenu().getMenuItems().length - 1) ? this.disabledRightButton = true : this.disabledRightButton = false;
  }

  /**
   * Adds a menu-item to the menu
   */
  addMenuItem() {
    let name = "Tab " + (this.conf.getMenu().getMenuItems().length + 1);
    this.conf.addMenuItem(name);
  }

  /**
   * Move a menuitem in the list
   * @param number Number to move to
   */
  moveMenuItem(number) {
    this.conf.moveItemToLeft(this.tabId, number);
    this.getIndexOfItem() == 0 ? this.disabledLeftButton = true : this.disabledLeftButton = false;
    this.getIndexOfItem() == (this.conf.getMenu().getMenuItems().length - 1) ? this.disabledRightButton = true : this.disabledRightButton = false;
  }

  /**
   * Get index of menuitem
   */
  getIndexOfItem() {
    return this.conf.getMenu().getMenuItems().indexOf(this.conf.getMenu().getMenuItems().filter(x => x.id == this.tabId)[0]);
  }

  /**
   * Removes a menuitem from the list
   */
  removeMenuItem() {
    this.conf.removeMenuItem(this.tabId);
  }

}
