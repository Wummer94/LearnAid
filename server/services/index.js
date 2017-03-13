var topicService = require('./topic.service/topic.service.route');


exports.importAll = (_app, _database) =>{
    topicService.import(_app, _database);

}