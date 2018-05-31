export class MenuItem {

    name: string;
    linkId: string;
    id: string;

    constructor(name: string, id?: string, linkId?: string) {
        this.name = name;
        this.id = id ? id : this.guidGenerator();
        this.linkId = linkId;
    }

    /**
     * Sets name of menu-item
     * @param name String
     */
    setName(name: string) {
        this.name = name;
    }

    /**
     * Gets name of menu-item
     */
    getName() {
        return this.name;
    }

    /**
     * Set the linkId
     * @param id String
     */
    setLink(id: string) {
        this.linkId = id;
    }

    /**
     * Get the linkId
     */
    getLink() {
        return this.linkId;
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
}