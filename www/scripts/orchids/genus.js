"use strict"

export class GenusList {
    #list;
    constructor() {
        this.#list = [];
        GenusList.#populate();
    }

    add(newGenus) {
        this.#list.push(new Genus(newGenus));
    }

    remove(genus) {
        for (let i = 0; i < this.#list.length; i++) {
            if (this.#list[i].genus === genus) {
                return this.#list.splice(i, 1);
            }
        }
    }

    get getList() {
        return this.#list.slice();
    }

    getGenus(id) {
        for (let i = 0; i < this.#list; i++) {
            if (this.#list[i].id === id) {
                return this.#list.id;
            }
        }
    }

    static #populate() {
        for (let i = 0; i < 5; i++) {
            add(data.genus[i].description);
        }
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

    get id() {
        return this.#id;
    }
}