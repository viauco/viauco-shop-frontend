import localForage from "localforage";

class StorageInstance
{
    constructor() {
        this.store = localForage.createInstance({
            driver      : localForage[process.env.STORAGE_DRIVER || LOCALSTORAGE], // Force WebSQL; same as using setDriver()
            name        : process.env.STORAGE_NAME || '__v',
            version     : process.env.STORAGE_VERSION || 1.0,
            size        : process.env.STORAGE_SIZE || 4980736, // Size of database, in bytes. WebSQL-only for now.
            storeName   : process.env.STORAGE_STORE_NAME || '__vs', // Should be alphanumeric, with underscores.
            description : process.env.STORAGE_DICRIPTION || 'viauco storage'
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