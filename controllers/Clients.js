'use strict';
var swaggerify = require('./swaggerify');

var models  = require('../models');


module.exports = swaggerify('Clients', {
    get: function(req, res) {
        models.Client.findAll().then(function(clients) {
            res.json(clients);
        });
    },
    post: function(req, res) {
        var body = req.swagger.params.body.value;

        models.Client.create(body).then(function(client) {
            res.json({
                id: client.dataValues.id
            });
        });
    },
    put: function(req, res) {
        var body = req.swagger.params.body.value;

        console.log('at put client', body);

        res.json({id: 1});
    }
});
