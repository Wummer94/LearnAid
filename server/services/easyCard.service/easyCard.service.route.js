// Service
var controller = require('./easyCard.service.controller');

// Main-Function import
exports.import = function (_app, _database) {
    _app.get('/api/v1/easyCard/', function (req, res) {
        controller.getAllTopics(req, res, _database);
    })
        .get('/api/v1/easyCard/:id', function (req, res) {
            controller.getTopic(req, res, _database);
        })
        .post('/api/v1/easyCard', (req, res) => {
            controller.createTopic(req, res, _database);
        })
}