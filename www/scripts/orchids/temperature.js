class TemperatureList {
    #list;
    constructor() {
        this.#list = [];
    }

    add(newTemperature){
        this.#list.push(new Temperature(newTemperature));
    }

    remove(temperature){
        for(let i = 0; i<this.#list.length; i++){
            if(this.#list[i].temperature === temperature){
                return this.#list.splice(i, 1);
            }
        }
    }

    get temperatureList(){
        return this.#list.slice();
    }

}

class Temperature {
    static _currentId = 1;
    #id;
    #description;
    constructor(description) {
        this.#id = Temperature._currentId++;
        this.#description = description;
    }

    get temperature() {
        return this.#description;
    }

    set temperature(newDescription) {
        this.#description = newDescription;
    }

    get id(){
        return this.#id;
    }
}