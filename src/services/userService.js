const client = require('../db/queries');
const indexName = 'users';

const create = async (data) => {

    try {
        let response = await client._create(indexName, data);
        return response;
    } catch (error) {
        throw { error }
    }

};


const get = async (query) => {

    try {
        let response = await client._find(indexName,query);
        return response;
    } catch (error) {
        throw { error }
    }

};

const update = async (id,data) => {

    try {
        let response = await client._update(indexName,id,data);
        return response;
    } catch (error) {
        throw { error }
    }

};

const deleteById = async (id) => {

    try {
        let response = await client._delete(indexName,id);
        return response;
    } catch (error) {
        throw { error }
    }

};

const getAll = async () => {

    try {
        let response = await client._findAll(indexName);
        return response;
    } catch (error) {
        throw { error }
    }

};

module.exports = {
    create,
    get,
    getAll,
    update,
    deleteById
}