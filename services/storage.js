import localForage from "localforage";

class StorageInstance
{
    constructor() {
        this.store = localForage.createInstance({
            driver      : localForage.LOCALSTORAGE, // Force WebSQL; same as using setDriver()
            name        : '__viauco',
            version     : 1.0,
            size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
            storeName   : '__v_store_key', // Should be alphanumeric, with underscores.
            description : 'viauco storage'
        });
        
    }

    remove(key) {
        return this.store.removeItem(key)
    }

    get(key) {
        return this.store.getItem(key)
    }
    
    set(key, value) {
        return this.store.setItem(key, value)
    }
    
    clear() {
        return this.store.clear()
    }

}

const storage = new StorageInstance;

export default storage;