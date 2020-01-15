export default class storage {
    constructor(key) {
        this._key = key;
        if (!(typeof this._key === 'string')){
            this.errorKeyIsNotString(this._key);
        }
        if (!this.hasLocalStorage()){
            this.errorNoLocalStorage();
        }
    }
    hasLocalStorage() {
        return Window && Window.localStorage;
    }
    error(msg) {
        return new Error(msg)
    }
    errorKeyIsNotString(key){
        throw this.error(`Key should be a string not ${typeof key}`);
    }
     errorNoLocalStorage(){
        throw this.error(`Upgrade your browser, not localStorage found`);
    }
}