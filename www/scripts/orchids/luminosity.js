class LuminosityList {
    #list;
    constructor() {
        this.#list = [];
    }

    add(newLuminosity){
        this.#list.push(new Luminosity(newLuminosity));
    }

    remove(luminosity){
        for(let i = 0; i<this.#list.length; i++){
            if(this.#list[i].luminosity === luminosity){
                return this.#list.splice(i, 1);
            }
        }
    }

    get LuminosityList(){
        return this.#list.slice();
    }

}

class Luminosity {
    static _currentId = 1;
    #id;
    #description;
    constructor(description) {
        this.#id = Luminosity._currentId++;
        this.#description = description;
    }

    get luminosity() {
        return this.#description;
    }

    set luminosity(newDescription) {
        this.#description = newDescription;
    }

    get id(){
        return this.#id;
    }
}