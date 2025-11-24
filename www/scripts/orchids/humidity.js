class HumidityList {
    #list;
    constructor() {
        this.#list = [];
    }

    add(newHumidity){
        this.#list.push(new Humity(newHumidity));
    }

    remove(humidity){
        for(let i = 0; i<this.#list.length; i++){
            if(this.#list[i].humidity === humidity){
                return this.#list.splice(i, 1);
            }
        }
    }

    get humidityList(){
        return this.#list.slice();
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

    get id(){
        return this.#id;
    }
}