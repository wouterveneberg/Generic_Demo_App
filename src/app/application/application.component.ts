import { Component, OnInit } from '@angular/core';
import { PageComponent } from '../page/page.component';
import { Menu } from '../Objects/MenuObject';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  private appName: string;
  private pages = [];
  private menu: Menu;

  constructor(name: string) { 
    this.appName = name;
  }

  ngOnInit() {
  }

  public getName() {
    return this.appName;
  }

  public addPage(page) {
    this.pages.push(page);
  }

  public getPages() {
    return this.pages;
  }

  public addMenu(menu: Menu) {
    this.menu = menu;
  }

  public getMenu() {
    return this.menu;
  }

  public setLink(linkName, page) {
    this.menu.setPageLink(linkName, page);
  }

  // public getPageLink(linkName) {
  //   return this.menu.getPageLink(linkName);
  // }

  public setNameOfMenu(oldName: string, newName: string) {
    this.menu.setName(oldName, newName);
  }

  public addMenuItem(name: string, id?: string, linkId?: string) {
    this.menu.addMenuItem(name, id, linkId);
  }

  public moveItem(itemId, number) {
    this.menu.moveItem(itemId, number);
  }

  public removeMenuItem(itemId) {
    this.menu.removeMenuItem(itemId);
  }
}
