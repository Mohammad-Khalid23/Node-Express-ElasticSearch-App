const elasticsearch = require('@elastic/elasticsearch')
const _client = new elasticsearch.Client({
    node: 'http://localhost:9200',
    requestTimeout: 1000,
});

_client.ping({
}, err => {
    if (err) {
        console.log(err);
    } else {
        console.log("elastic search ready");
    }
})

module.exports = _client;