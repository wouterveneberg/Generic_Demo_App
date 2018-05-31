import { BaseComponent } from "./BaseComponent";

export class Textbox implements BaseComponent {
    
    text: string;
    component: string;
    placeholder: string;
    styles = {};
    classes = [];

    constructor(text: string, type: string, placeholder: string) {
        this.placeholder = placeholder;
        this.text = text;
        this.component = type;
    }
}