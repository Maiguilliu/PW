class GenusList {
    #list;
    constructor() {
        this.#list = [];
    }

    add(newGenus){
        this.#list.push(new Genus(newGenus));
    }

    remove(genus){
        for(let i = 0; i<this.#list.length; i++){
            if(this.#list[i].genus === genus){
                return this.#list.splice(i, 1);
            }
        }
    }

    get GenusList(){
        return this.#list.slice();
    }

}

class Genus {
    static _currentId = 1;
    #id;
    #description;
    constructor(description) {
        this.#id = Genus._currentId++;
        this.#description = description;
    }

    get genus() {
        return this.#description;
    }

    set genus(newDescription) {
        this.#description = newDescription;
    }

    get id(){
        return this.#id;
    }
}