import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Configuration } from './configuration';
import { ApplicationComponent } from './application/application.component';
import { Page } from './Objects/PageObject';
import { Menu } from './Objects/MenuObject';
import { MenuItem } from './Objects/Menu-ItemObject';
import { BaseComponent } from './Objects/BaseComponent';

fdescribe('Configuration', () => {
    let conf: Configuration;

    beforeEach(() => {
        conf = new Configuration();
        conf.addApplication('Test');
    });

    fit('should add an application', () => {
        expect(conf.getApplication()).toBeDefined();
    });

    fit('should add a page', () => {
        let page = new Page("Home");
        conf.addPage(page);
        expect(conf.getPages()).toBeDefined();
        expect(conf.getPages().length).toBeGreaterThan(0);
    });

    fit('should add a menu', () => {
        let menu = new Menu("sideMenu");
        conf.setMenu(menu);
        expect(conf.getMenu()).toBeDefined();
    });

    /**
     * A menu always start with three menu-items
     */
    fit('should add a menu-item', () => {
        conf.setMenu(new Menu("sideMenu"));
        let menuItemName = "Home";
        conf.addMenuItem(menuItemName)
        expect(conf.getMenu().getMenuItems().filter(item => item.name == menuItemName).length).toBeGreaterThan(0);
        expect(conf.getMenu().getMenuItems().length).toBeGreaterThan(3);
    });

    fit('should link menu-item to page', () => {
        let page = new Page("Instellingen");
        conf.addPage(page);
        conf.setMenu(new Menu("sideMenu"));

        let menuItem = conf.getMenu().getMenuItems()[0];
        conf.setPageLink(menuItem.id, page.getId());
        //Is there a menu-item with a link to the page?
        expect(conf.getMenu().getMenuItems().filter(item => item.linkId == page.getId()).length).toBeGreaterThan(0);
    });

    fit('should add a component to a page', () => {
        let page = new Page("Home");
        conf.addPage(page);

        let newHeaderComponent = new BaseComponent("HeaderComponent");
        page.addComponent(newHeaderComponent);

        expect(conf.getPages().filter(p => p.getComponents().filter(c => c.component == newHeaderComponent.component)).length).toBeGreaterThan(0);
    });
});