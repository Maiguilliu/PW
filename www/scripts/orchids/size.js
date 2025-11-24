class SizeList {
    #list;
    constructor() {
        this.#list = [];
    }

    add(newSize){
        this.#list.push(new Size(newSize));
    }

    remove(size){
        for(let i = 0; i<this.#list.length; i++){
            if(this.#list[i].size === size){
                return this.#list.splice(i, 1);
            }
        }
    }

    get sizeList(){
        return this.#list.slice();
    }

}

class Size {
    static _currentId = 1;
    #id;
    #description;
    constructor(description) {
        this.#id = Size._currentId++;
        this.#description = description;
    }

    get size() {
        return this.#description;
    }

    set size(newDescription) {
        this.#description = newDescription;
    }

    get id(){
        return this.#id;
    }
}