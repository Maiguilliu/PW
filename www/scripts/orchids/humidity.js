class HumidityList {
    #list;
    constructor() {
        this.#list = [];
        HumidityList.#populate;
    }

    add(newHumidity) {
        this.#list.push(new Humity(newHumidity));
    }

    remove(humidity) {
        for (let i = 0; i < this.#list.length; i++) {
            if (this.#list[i].humidity === humidity) {
                return this.#list.splice(i, 1);
            }
        }
    }

    get getList() {
        return this.#list.slice();
    }

    getHumidity(id) {
        for (let i = 0; i < this.#list; i++) {
            if (this.#list[i].id === id) {
                return this.#list.id;
            }
        }
    }

    static #populate(){
        for(let i = 0; i<4; i++){
            add(data.humidity[i].description);
        }
    }


}

class Humity {
    static _currentId = 1;
    #id;
    #description;
    constructor(description) {
        this.#id = Humity._currentId++;
        this.#description = description;
    }

    get humidity() {
        return this.#description;
    }

    set humidity(newDescription) {
        this.#description = newDescription;
    }

    get id() {
        return this.#id;
    }
}