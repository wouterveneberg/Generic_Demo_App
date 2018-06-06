import { Page } from "./PageObject";
import { MenuItem } from "./Menu-ItemObject";

export class Menu {

    menuType : string;
    private menuItems = Array<MenuItem>();

    constructor(type: string, newApplication?: boolean) {
        this.menuType = type;

        if(newApplication) {
            this.menuItems.push(new MenuItem("Camera"), new MenuItem("Cloud"), new MenuItem("Instellingen"));
        }
    }

    /**
     * Gets the type of the menu
     */
    public getMenuType() {
        return this.menuType;
    }

    /**
     * Sets a link between menu-item and page.
     * @param tabId   String
     * @param pageId  String
     */
    public setPageLink(tabId: string, pageId: string) {
        this.menuItems.find(item => item.id == tabId).setLink(pageId);
    }

    /**
     * Sets the name of a menu-item
     * @param oldName String
     * @param newName String
     */
    public setName(oldName: string, newName: string) {
        let index = this.menuItems.find(item => item.name == oldName);
        index.setName(newName);
    }

    /**
     * Get all menu-items
     */
    public getMenuItems() {
        return this.menuItems;
    }

    /**
     * Adds a new menu-items to the list
     * @param name String
     */
    public addMenuItem(name: string, id?: string, linkId?: string) {
        this.menuItems.push(new MenuItem(name, id, linkId));
    }

    public moveItem(itemId, number) {
        let currentItem = this.menuItems.filter(item => item.id == itemId)[0];
        let currentIndex = this.menuItems.indexOf(currentItem);
        let nextIndex = currentIndex + number;
        this.menuItems.splice(nextIndex,0, this.menuItems.splice(currentIndex,1)[0]);
    }

    public removeMenuItem(itemId) {
        let index = this.menuItems.indexOf(this.menuItems.find(item => item.id == itemId));
        this.menuItems.splice(index, 1);
    }
}