// Get a all topics
exports.getAllTopics = (req, res, database) => {
        let sqlString = "SELECT * FROM topic WHERE id_topic = 1";

    database.execQuery(sqlString,
        function (results) {
            res.send(JSON.stringify(results));
        }, function (error) {
            console.log(error);
            res.status(404).send({
                "msg": "Could find a topic",
                "errorCode": "5.0.1"
            });
        })
}

// Get a topic
exports.getTopic = (req, res) => {
     let itemID = parseInt(req.params.id);

    if (Number.isNaN(itemID)) {
        // Return error
        res.status(400).send({
            "msg": "Could not get project",
            "errorCode": "5.1.1"
        })
    }
    else {
        itemID = database.escapeString(itemID);
        let sqlString = `SELECT * FROM test_table WHERE id_topic = ${itemID}`;

        database.execQuery(sqlString,
            function (results) {
                res.send(JSON.stringify(results));
            }, function (error) {
                console.log(error);
                res.status(404).send({
                    "msg": "Could find a topic",
                    "errorCode": "5.1.2"
                });
            })
    }
}

exports.createTopic = (req, res, database) => {

    console.log(req.body);

    let name = req.body.name;

    if (name == null) {
        let error = new Object({
            "msg": "Name not send",
            "errorCode": "5.2.1"
        })
        res.status(400).send(JSON.stringify(error))
        return
    }


    let insertQuery = "INSERT INTO `topic` (`name`) VALUES ("+ database.escapeString(name) +");";
    database.execQuery(insertQuery,
        function (results) {
            res.status(200).send({
                "msg": "Project created!"
            });
        }, function (error) {
            console.log(error);
            res.status(404).send({
                "msg": "Error while creating project",
                "errorCode": "5.2.4"
            });
        })
}

exports.createProject = (req, res, database) => {

    console.log(req.body);

    let name = req.body.name;

    if (name == null) {
        let error = new Object({
            "msg": "Name not send",
            "errorCode": "5.2.1"
        })
        res.status(400).send(JSON.stringify(error))
        return
    }


    let insertQuery = "INSERT INTO `topic` (`name`) VALUES ("+ database.escapeString(name) +");";
    database.execQuery(insertQuery,
        function (results) {
            res.status(200).send({
                "msg": "Project created!"
            });
        }, function (error) {
            console.log(error);
            res.status(404).send({
                "msg": "Error while creating project",
                "errorCode": "5.2.4"
            });
        })
}

exports.deleteProject = (req, res, database) => {

      let id_topic = req.params.id_topic;
    if (id_topic == null || Number.isNaN(id_topic)) {
        let error = new Object({
            "msg": "Name not send",
            "errorCode": "5.3.1"
        })
        res.status(400).send(JSON.stringify(error))
        return;
    }


    let insertQuery = "INSERT INTO `topic` (`name`) VALUES ("+ database.escapeString(name) +");";
    database.execQuery(insertQuery,
        function (results) {
            res.status(200).send({
                "msg": "Project created!"
            });
        }, function (error) {
            console.log(error);
            res.status(404).send({
                "msg": "Error while creating project",
                "errorCode": "5.2.4"
            });
        })
}



