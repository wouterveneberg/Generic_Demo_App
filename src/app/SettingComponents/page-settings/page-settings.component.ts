import { Component } from '@angular/core';
import { Page } from '../../Objects/PageObject';
import { PageComponent } from '../../page/page.component';

@Component({
  selector: 'app-page-settings',
  templateUrl: './page-settings.component.html',
  styleUrls: ['./page-settings.component.css']
})
export class PageSettingsComponent {

  pageName: string;
  selectedBackColor: string;

  pageComp: PageComponent;
  pageObj: Page;
  constructor() { }

  setAttributes(pageComp: PageComponent, pageObj: Page) {
    this.pageComp = pageComp;
    this.pageObj = pageObj;

    this.pageName = pageComp.pageName;
    this.selectedBackColor = pageComp.styles['background-color'];
  }

  changeTitle(title) {
    this.pageComp.pageName = title;
    this.pageObj.setPageName(title);
  }

  addBackgroundColor(value) {
    this.pageObj.addStyling("background-color", value);
    this.pageComp.styles["background-color"] = value;
  }

}
