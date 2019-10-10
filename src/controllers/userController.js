const _ = require('lodash');
const Joi = require('joi');
const userService = require('../services/userService');

const createuser = async (request, response)=>{
    try {

        const body = request.body;
        const schema = Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required()
        });

        const { error, value } = Joi.validate(body, schema, { abortEarly: false });

        if (!_.isNull(error)) {
           return response.send({
                code: 400,
                message: error.details[0].message,
                success: false,
                error: error.details
            })
        }

        let responseData = userService.create(value);
        return response.send(responseData);

    } catch (error) {
        response.send(error)
    }
};

const getUser = async (request, response) => {
    try {

        const schema = Joi.object().keys({
            id: Joi.string().required(),
        });
        const _input = { ...request.query, ...request.params };
        const { error, value } = Joi.validate(_input, schema, { abortEarly: false });

        if (!_.isNull(error)) {
            return response.send({
                code: 400,
                message: error.details[0].message,
                success: false,
                error: error.details
            })
        }
        let query = {
            _id: value.id
        }
        let responseData = await userService.get(query);
        return response.send(responseData);

    } catch (error) {
        response.send(error)
    }
};

const updateUser = async (request, response) => {
    try {

        const schema = Joi.object().keys({
            user_id: Joi.string().required(),
            name:Joi.string(),
            password:Joi.string()
        });
        const { error, value } = Joi.validate(request.body, schema, { abortEarly: false });

        if (!_.isNull(error)) {
            return response.send({
                code: 400,
                message: error.details[0].message,
                success: false,
                error: error.details
            })
        }
        let user_id = value.user_id;
        delete value.user_id;

        let responseData = await userService.update(user_id,value);
        return response.send(responseData);

    } catch (error) {
        response.send(error)
    }
};

const getAllUsers = async (request, response)=>{
    try {
        let responseData = await userService.getAll();
        return response.send(responseData);

    } catch (error) {
        response.send(error)
    }
};

const deletUser = async (request, response) => {
    try {

        const schema = Joi.object().keys({
            id: Joi.string().required(),
        });
        const _input = { ...request.query, ...request.params };
        const { error, value } = Joi.validate(_input, schema, { abortEarly: false });

        if (!_.isNull(error)) {
            return response.send({
                code: 400,
                message: error.details[0].message,
                success: false,
                error: error.details
            })
        }

        let responseData = await userService.deleteById(value.id);
        return response.send(responseData);

    } catch (error) {
        response.send(error)
    }
};


module.exports = {
    createuser,
    getUser,
    getAllUsers,
    updateUser,
    deletUser
};