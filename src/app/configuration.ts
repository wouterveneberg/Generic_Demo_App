import { ApplicationComponent } from "./application/application.component";
import { Menu } from "./Objects/MenuObject";
import { Page } from "./Objects/PageObject";
import { AppComponent } from "./app.component";
import { BaseComponent } from "./Objects/BaseComponent";
import { BaseComponentComponent } from "./base-component/base-component.component";
import { SliderComponent } from "./components/slider/slider.component";
import { ImageComponent } from "./Components/image/image.component";
import { HeaderComponent } from "./Components/header/header.component";
import { DropdownComponent } from "./Components/dropdown/dropdown.component";
import { CardComponent } from "./Components/card/card.component";
import { ComponentRef } from "@angular/core";
import { PageComponent } from "./page/page.component";

export class Configuration {
    private app: ApplicationComponent;
    private appComp : AppComponent;

    currentPage: Page;

    SERVER_URL = "http://localhost:8080/application";

    constructor() {}

    /**
     * Add an Application to the configuration.
     * @param appName ApplicationComponent
     */
    public addApplication(appName) {
        this.app = new ApplicationComponent();
        this.app.setName(appName);
    }

    /**
     * Get current Application.
     */
    public getApplication() {
        return this.app;
    }

    /**
     * Add a page to the application.
     * @param page PageComponent
     */
    public addPage(page) {
        this.app.addPage(page);
    }

    /**
     * Get all pages from application.
     */
    public getPages() : Page[] {
        return this.app.getPages();
    }

    public setAppComp(appComp : AppComponent) {
        this.appComp = appComp;
    }

    /**
     * Stringify whole application to JSON.
     */
    public getJson() {
        return JSON.stringify(this.app);
    }

    public getMenu() {
        return this.app.getMenu();
    }

    public setMenu(menu: Menu) {
        this.app.addMenu(menu);
    }

    public moveItemToLeft(itemId, number) {
        this.app.moveItem(itemId, number);
    }

    /**
     * Set a link between tab and page
     * @param tabId String
     * @param pageId String
     */
    public setPageLink(tabId: string, pageId: string) {
        this.app.setLink(tabId, pageId);
    }

    public setNameOfMenu(oldName: string, newName: string) {
        this.app.setNameOfMenu(oldName, newName);
    }

    addMenuItem(name: string, id?: string, linkId?: string) {
        this.app.addMenuItem(name, id, linkId);
    }

    public removeMenuItem(itemId) {
        this.app.removeMenuItem(itemId);
    }

    public openComponentSettings(comp: BaseComponentComponent, compObj: BaseComponent) {
        this.appComp.openComponentSettings(comp, compObj);
    }

    public openSliderSettings(comp: SliderComponent, compObj: BaseComponent) {
        this.appComp.openSliderSettings(comp, compObj);
    }

    public openImageSettings(comp: ImageComponent, compObj: BaseComponent) {
        this.appComp.openImageSettings(comp, compObj);
    }

    public openHeaderSettings(comp: HeaderComponent, compObj: BaseComponent) {
        this.appComp.openHeaderSettings(comp, compObj);
    }

    public openDropdownSettings(comp: DropdownComponent, compObj: BaseComponent) {
        this.appComp.openDropdownSettings(comp, compObj);
    }

    public openCardSettings(comp: CardComponent, compObj: BaseComponent) {
        this.appComp.openCardSettings(comp, compObj);
    }

    public clearSettingsPage() {
        this.appComp.clearSettingsParent();
    }
}