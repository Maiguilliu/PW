class orchid {
    #id;
    #description;
    #genus;
    #type;
    #luminosity;
    #temperature;
    #humidity;
    #size;
    #src;

    constructor(id, description, genus, type, luminosity, temperature, humidity, size, src) {
        this.#id = id;
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

    set id(newId) {
        this.#id = newId;
    }

    set description(newDescription) {
        this.#description = newDescription;
    }

    set genus(newGenus) {
        this.#genus = newGenus;
    }

    set type(newType) {
        this.#type = newType;
    }

    set luminosity(newLuminosity) {
        this.#luminosity = newLuminosity;
    }

    set temperature(newTemperature) {
        this.#temperature = newTemperature;
    }

    set humidity(newHumidity) {
        this.#humidity = newHumidity;
    }

    set size(newSize) {
        this.#size = newSize;
    }

    set src(newSrc) {
        this.#src = newSrc;
    }
}