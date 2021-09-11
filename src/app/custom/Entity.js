export default class Entity {
    constructor(name, data) {

        this._name = name;
        this._data = data
    }

    get name() {
        return this._name;
    }

    get data() {
        return this.data;
    }

    set(name, data) {
        this._name = name
        this._data = data
    }
}