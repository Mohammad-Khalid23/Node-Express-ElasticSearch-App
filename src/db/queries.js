const esClient = require('../config/client');


//Create Index
const _create = async (indexName,body)=>{
    return await esClient.index({
        index: indexName,
        type: '_doc',
        body:body
      });
};

const _update = async (indexName,document_id,data)=>{
    return await esClient.update({
        index:indexName,
        type:'_doc',
        id:document_id,
        body:{
            doc:data
        }
    })
}

const _delete = async (indexName,document_id,data)=>{
    return await esClient.delete({
        index:indexName,
        type:'_doc',
        id:document_id,
    })
}

const _refreshIndex = async (indexName)=>{
   return await client.indices.refresh({ index: indexName })
}

const _find = async (indexName,query)=>{
    console.log('Find Query',query);
    let response = await esClient.search({
        index : indexName,
        body:{
            query:{
                match: query
            }
        }
    });
    return response.body.hits.hits
}

const _findAll = async (indexName)=>{
    let response = await esClient.search({
        index : indexName,
        body:{
            query:{
                match_all:{ }
            }
        }
    });
    return response.body.hits.hits
}

module.exports = {
    _create,
    _refreshIndex,
    _find,
    _findAll,
    _update,
    _delete
};