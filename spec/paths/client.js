'use strict';
var templates = require('../templates');


var name = 'client';

module.exports = {
    get: templates.get(name),
    post: templates.post(name),
    put: templates.put(name),
};
