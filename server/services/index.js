var topicService = require('./topic.service/topic.service.route');
var easyCardService = require('./easyCard.service/easyCard.service.route')


exports.importAll = (_app, _database) =>{
    topicService.import(_app, _database);
    easyCardService.import(_app, _database);
}