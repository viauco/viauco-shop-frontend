import Promise from 'bluebird'
import strapi from './strapi'

class Repository {
    constructor() {

    }

    login(params) {
        return strapi.login( params.identifier, params.password)
    }

    register(params) {
        return strapi.register(params.username, params.email, params.password)
    }

    forgotPassword(params) {
        return strapi.forgotPassword(params.email, params.url)
    }

    resetPassword(params) {
        return strapi.resetPassword(params.code, params.password, params.passwordConfirmation)
    }

    getProviderAuthenticationUrl(params) {
        return strapi.getProviderAuthenticationUrl(params.provider)
    }

    authenticateProvider(params) {
        return strapi.authenticateProvider(params.provider, params.data)    
    }

    setToken(params) {
        return strapi.setToken(params.token, params.comesFromStorage)  
    }

    clearToken(params) {
        return strapi.clearToken(params.token)  
    }

    getEntries(params) {
        return strapi.getEntries(params.entry, params.data)
    }

    getEntry(params) {
        return strapi.getEntry(params.entry, params.id)
    }

    getEntryCount(params) {
        return strapi.getEntryCount(params.entry, params.data)
    }

    createEntry(params) {
        return strapi.createEntry(params.entry, params.data)
    }

    updateEntry(params) {
        return strapi.updateEntry(params.entry, params.id, params.data) 
    }

    deleteEntry(params) {
        return strapi.deleteEntry(params.entry, params.id)
    }

    searchFiles(params) {
        return strapi.searchFiles(params.query)
    }

    getFiles(params) {
        return strapi.getFiles(params.data)  
    }

    getFile(params) {
        return strapi.getFile(params.id) 
    }

    upload(params) {
        return strapi.upload(params.data)
    }
}

const repository = new Repository();

export default repository;