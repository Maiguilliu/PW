class OrchidList{
    #list;
    constructor(){
        this.#list = [];
        OrchidList.#populate();
    }
    
    add(newOrchid){
        this.#list.push(new Orchid(newOrchid.description, 
            newOrchid.genus, 
            newOrchid.type, 
            newOrchid.luminosity, 
            newOrchid.temperature, 
            newOrchid.humidity,
            newOrchid.size,
            newOrchid.src));
    }

    remove(orchid){
        for(let i = 0; i<this.#list.length; i++){
            if(this.#list[i].orchid === orchid){
                return this.#list.splice(i, 1);
            }
        }
    }

    get getList(){
        return this.#list.slice();
    }

    static #populate(){
        for(let i = 0; i<25; i++){
            add(data.orchid[i].description);
        }
    }

}

class Orchid {
    static _currentId = 1;
    #id;
    #description;
    #genus;
    #type;
    #luminosity;
    #temperature;
    #humidity;
    #size;
    #src;

    constructor(description, genus, type, luminosity, temperature, humidity, size, src) {
        this.#id = id++;
        this.#description = description;
        this.#genus = genus;
        this.#type = type;
        this.#luminosity = luminosity;
        this.#temperature = temperature;
        this.#humidity = humidity;
        this.#size = size;
        this.#src = src;
    }

    get id() {
        return this.#id;
    }

    get description() {
        return this.#description;
    }

    get genus() {
        return this.#genus;
    }

    get type() {
        return this.#type;
    }

    get luminosity() {
        return this.#luminosity;
    }

    get temperature() {
        return this.#temperature;
    }

    get humidity() {
        return this.#humidity;
    }

    get size() {
        return this.#size;
    }

    get src() {
        return this.#src;
    }

    set description(Description) {
        this.#description = Description;
    }

    set genus(Genus) {
        this.#genus = Genus;
    }

    set type(Type) {
        this.#type = Type;
    }

    set luminosity(Luminosity) {
        this.#luminosity = Luminosity;
    }

    set temperature(Temperature) {
        this.#temperature = Temperature;
    }

    set humidity(Humidity) {
        this.#humidity = Humidity;
    }

    set size(Size) {
        this.#size = Size;
    }

    set src(Src) {
        this.#src = Src;
    }
}