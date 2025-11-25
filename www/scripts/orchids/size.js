class SizeList {
    #list;
    constructor() {
        this.#list = [];
        SizeList.#populate();
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

    get getList(){
        return this.#list.slice();
    }

    getSize(id){
        for(let i = 0; i<this.#list; i++){
            if(this.#list[i].id === id){
                return this.#list.id;
            }
        }
    }

    static #populate(){
        for(let i = 0; i<4; i++){
            add(data.type[i].description);
        }
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