import { Component, ComponentFactoryResolver, ViewContainerRef, ViewChild, ComponentRef, trigger, transition, animate, style, keyframes, ComponentFactory } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig, MatToolbar, MatIcon, MatTabChangeEvent, MatSnackBar } from '@angular/material';
import { Configuration } from '../app/configuration';
import { NewPageComponent } from './new-page/new-page.component';
import { Page } from './Objects/PageObject';
import { PageComponent } from './page/page.component';
import { Textbox } from './Objects/Textbox';
import { BaseComponent } from './Objects/BaseComponent';
import { NewApplicationComponent } from './new-application/new-application.component';
import { ServerconnectionService } from './serverconnection.service';
import { Menu } from './Objects/MenuObject';
import { TextboxComponent } from './components/textbox/textbox.component';
import { MenuSettingsComponent } from './SettingComponents/menu-settings/menu-settings.component';
import { MenuItem } from './Objects/Menu-ItemObject';
import { BaseComponentComponent } from './base-component/base-component.component';
import { ComponentSettingsComponent } from './SettingComponents/component-settings/component-settings.component';
import { PageSettingsComponent } from './SettingComponents/page-settings/page-settings.component';
import { SliderComponent } from './components/slider/slider.component';
import { SliderSettingsComponent } from './SettingComponents/slider-settings/slider-settings.component';
import { ImageComponent } from './Components/image/image.component';
import { ImageSettingsComponent } from './SettingComponents/image-settings/image-settings.component';
import { HeaderComponent } from './Components/header/header.component';
import { HeaderSettingsComponent } from './SettingComponents/header-settings/header-settings.component';
import { DropdownComponent } from './Components/dropdown/dropdown.component';
import { DropdownSettingsComponent } from './SettingComponents/dropdown-settings/dropdown-settings.component';
import { CardSettingsComponent } from './SettingComponents/card-settings/card-settings.component';
import { CardComponent } from './Components/card/card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  pages: Array<Page>;
  private currentPageRef: ComponentRef<PageComponent>;
  private currentPage: Page;
  private selectedMenu: string;

  private beginTabs: Array<MenuItem>;

  show = false;

  components = [
    {type: "TextboxComponent", name: "Tekstvak"},
    {type: "ButtonComponent", name: "Knop"},
    {type: "SliderComponent", name: "Slider"},
    {type: "ImageComponent", name: "Plaatje"},
    {type: "HeaderComponent", name: "Koptekst"},
    {type: "DropdownComponent", name: "Keuzelijst"},
    {type: "CardComponent", name: "Kaart"}
  ];

  @ViewChild('container', {read: ViewContainerRef}) parent: ViewContainerRef;
  @ViewChild('settings', {read: ViewContainerRef}) settingsParent: ViewContainerRef;

  constructor(private dialog: MatDialog, private conf: Configuration, private viewContainerRef: ViewContainerRef, private cfr: ComponentFactoryResolver, private service: ServerconnectionService, public snackBar: MatSnackBar) {
    this.components.sort(function(a,b){ return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);});
    this.openNewAppDialog();  
  }

  /**
   * Opens a dialog to create a new page.
   */
  openNewPageDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';
    dialogConfig.height = '400px';

    dialogConfig.data = {
      title: "Voeg Pagina Toe"
    }

    const dialogRef = this.dialog.open(NewPageComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if(data != null) {
          let newPage = new Page(data.name);
          this.conf.addPage(newPage);
          //this.conf.setAppComp(this);
        }
      }
    );
  }

  /**
   * Opens a dialog to create a new application
   */
  openNewAppDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';
    dialogConfig.height = '693px';

    dialogConfig.data = {
      title: "Maak applicatie aan"
    }

    const dialogRef = this.dialog.open(NewApplicationComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if(data != null) {
          this.conf.addApplication(data.name);
          this.conf.setMenu(new Menu(data.selectedMenu, true));
        }
        this.selectedMenu = this.conf.getMenu().getMenuType();
        this.title = this.conf.getApplication().getName();
        this.pages = this.conf.getPages();
        this.beginTabs = this.conf.getMenu().getMenuItems();
        this.conf.setAppComp(this);
      }
    );
  }

  /**
   * Opens page that is selected.
   * @param page Page
   */
  openPage(page: Page, index?: number) {
    this.currentPage = page;
    this.conf.currentPage = page;
    this.show = true;
    let test = this.cfr.resolveComponentFactory(PageComponent);
    this.parent.clear();

    let componentRef = this.parent.createComponent(test);
    (componentRef.instance).setAttributes(page);

    page.getComponents().forEach(function(value) {
      (componentRef.instance).addComponent(value);
    });
    this.currentPageRef = componentRef;

    this.openPageSettings(componentRef.instance, page);
  }

  /**
   * Adds a component to the selected page.
   * @param component BaseComponent
   */
  addComponent(component: string) {
    let newComponent = new BaseComponent(component);
    (this.currentPageRef.instance).addComponent(newComponent);
    this.currentPage.addComponent(newComponent);
  }

  /**
   * Saves a JSON to the Database
   */
  saveToDatabase() {
    //console.log(this.conf.getJson());
    this.service.addApplication(JSON.parse(this.conf.getJson()))
      .subscribe(data => {
        this.snackBar.open("Opgeslagen!", "Ok", { duration: 2000 });
      }, err => {
        this.snackBar.open(err, "Ok", { duration: 2000 });
    });
  }

  onTabChange(event: MatTabChangeEvent) {
    let linkName = event.tab.textLabel;
    this.openMenuSettings(linkName);
  }

  openMenuSettings(linkName: string) {
    let menuSettings = this.cfr.resolveComponentFactory(MenuSettingsComponent);
    this.settingsParent.clear();
    let componentRef = this.settingsParent.createComponent(menuSettings);
    let tabId = this.conf.getMenu().getMenuItems().find(item => item.name == linkName).id;
    (componentRef.instance).setAttributes(linkName, tabId);
  }

  openComponentSettings(comp: BaseComponentComponent, compObj: BaseComponent) {
    let compSettings = this.cfr.resolveComponentFactory(ComponentSettingsComponent);
    this.openSettings(compSettings, comp, compObj);
  }

  openPageSettings(pageComp: PageComponent, pageObj: Page) {
    let pageSettings = this.cfr.resolveComponentFactory(PageSettingsComponent);
    this.openSettings(pageSettings, pageComp, pageObj);
  }

  openSliderSettings(sliderComp: SliderComponent, compObj: BaseComponent) {
    let sliderSettings = this.cfr.resolveComponentFactory(SliderSettingsComponent);
    this.openSettings(sliderSettings, sliderComp, compObj);
  }

  openImageSettings(imageComp: ImageComponent, compObj: BaseComponent) {
    let imageSettings = this.cfr.resolveComponentFactory(ImageSettingsComponent);
    this.openSettings(imageSettings, imageComp, compObj);
  }

  openHeaderSettings(headerComp: HeaderComponent, headerObj: BaseComponent) {
    let headerSettings = this.cfr.resolveComponentFactory(HeaderSettingsComponent);
    this.openSettings(headerSettings, headerComp, headerObj);
  }

  openDropdownSettings(dropdownComp: DropdownComponent, dropdownObj: BaseComponent) {
    let dropdownSettings = this.cfr.resolveComponentFactory(DropdownSettingsComponent);
    this.openSettings(dropdownSettings, dropdownComp, dropdownObj);
  }

  openCardSettings(cardComp: CardComponent, cardObj: BaseComponent) {
    let cardSettings = this.cfr.resolveComponentFactory(CardSettingsComponent);
    this.openSettings(cardSettings, cardComp, cardObj);
  }

  private openSettings(settings : ComponentFactory<any>, comp, compObj) {
    this.settingsParent.clear();
    let componentRef = this.settingsParent.createComponent(settings);
    (componentRef.instance).setAttributes(comp, compObj);
  }

  clearSettingsParent() {
    this.settingsParent.clear();
  }
}
