import { BaseComponentComponent } from "../base-component/base-component.component";
import { BaseComponent } from "./BaseComponent";

export class Page {

    private pageName : string;
    private id: string;
    private components = [];
    private styles = {};

    constructor(name: string, id?: string) {
        this.pageName = name;
        this.id = id ? id : this.guidGenerator();
    }

    /**
     * Set name of page
     * @param name String
     */
    public setPageName(name: string) {
        this.pageName = name;
    }
    
    /**
     * Get name of page
     */
    public getPageName() {
        return this.pageName;
    }

    public getComponents() {
        return this.components;
    }

    public getId() {
        return this.id;
    }

    /**
     * Add a component to the page
     * @param component BaseComponent
     */
    public addComponent(component: BaseComponent) {
        this.components.push(component);
    }

    /**
     * Removes a component from the page
     * @param component BaseComponent
     */
    public removeComponent(component: BaseComponent) {
        let index = this.components.indexOf(component);
        this.components.splice(index, 1);
    }

    /**
     * Generates a random id
     */
    private guidGenerator() {
        var S4 = function() {
           return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }

    public addStyling(key, value) {
        this.styles[key] = value;
    }

    public getStyles() {
        return this.styles;
    }
}