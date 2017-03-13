// Service
var controller = require('./topics.service.controller');

// Main-Function import
exports.import = function (_app, _database) {
    _app.get('/api/v1/topics/', function (req, res) {
        controller.getAllTopics(req, res, _database);
    })
        .get('/api/v1/topic/:id', function (req, res) {
            controller.getTopic(req, res, _database);
        })
        .post('/api/v1/topic', (req, res) => {
            controller.createProject(req, res, _database);
        })
}