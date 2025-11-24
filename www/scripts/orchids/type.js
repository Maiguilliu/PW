class TypeList {
    #list;
    constructor() {
        this.#list = [];
    }

    add(newType){
        this.#list.push(new Type(newType));
    }

    remove(type){
        for(let i = 0; i<this.#list.length; i++){
            if(this.#list[i].type === type){
                return this.#list.splice(i, 1);
            }
        }
    }

    get typeList(){
        return this.#list.slice();
    }

}

class Type {
    static _currentId = 1;
    #id;
    #description;
    constructor(description) {
        this.#id = Type._currentId++;
        this.#description = description;
    }

    get type() {
        return this.#description;
    }

    set type(newDescription) {
        this.#description = newDescription;
    }

    get id(){
        return this.#id;
    }
}