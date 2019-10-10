const client = require('./db/queries');
const indexName = 'test';

const test = async (query)=>{
    try {
        
        switch (query) {
            case 'create':
                let createBody = {
                    title: 'Khalid',
                    description: 'yes ...'
                };
                let createResponse = await client._create(indexName, createBody);
                console.log('create response', createResponse);
                break;
            case 'find':
                let findBody = {
                    title: 'Khalid'
                }
                let findResponse = await client._find(indexName, findBody);
                console.log('find response', findResponse.body.hits.hits);
                break;
            case 'update':
                let updateBody = {
                    title: 'Kahlid Ayub',
                    description: 'MERN stack developer'
                };
                let updateResponse = await client._update(indexName, 'pL4GtW0BbWtVsSYe8o9p', updateBody);
                console.log('Update response', updateResponse);
                break;
            case 'delete':
                let updateBody = {
                    title: 'Kahlid Ayub',
                    description: 'MERN stack developer'
                };
                let updateResponse = await client._update(indexName, 'pL4GtW0BbWtVsSYe8o9p', updateBody);
                console.log('Update response', updateResponse);
                break;
            default:
                let response = await client._findAll(indexName);
                console.log('findAll response', response.body.hits.hits);
                break;
        }
    } catch (error) {
        console.log(`Error in ${query} query`,error);
    }
}

//Just change the parameters and run the test cases
/*
 *find
 *update
 *create
 *with not param it findAll 
 */
// test();