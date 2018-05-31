export class BaseComponent {

    component: string
    styles = {};
    classes = [];

    constructor(compType: string) {
        this.component = compType;
    }
}